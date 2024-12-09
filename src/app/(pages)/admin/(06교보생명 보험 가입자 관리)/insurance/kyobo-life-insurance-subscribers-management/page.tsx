'use client'
import CommonHeader from '@/components/CommonHeader'
import InputNoLabel from '@/components/InputNoLable'
import row8Column1 from '@/data/tables/row8Column1'
import { Button, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import React, { useState } from 'react'

const page = () => {
  const viewOptions = [
    { key: "10", label: "10개씩 보기" },
    { key: "20", label: "20개씩 보기" },
    { key: "50", label: "50개씩 보기" },
    { key: "100", label: "100개씩 보기" },
  ];

  const viewOptionsDefault = viewOptions[0].key;
  const [viewValue, setViewValue] = useState(viewOptionsDefault);
  const [page, setPage] = useState(1);

  const rowsPerPage = parseInt(viewValue);
  const pages = Math.ceil(row8Column1.length / rowsPerPage);

  // Memoized items
  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return row8Column1.slice(start, start + rowsPerPage);
  }, [page, rowsPerPage]);

  return (
    <section>
      <CommonHeader title='상품 관리 '/>
      <header className= "flex items-center gap-16 bg-white py-10 px-10 rounded-[20px] ">
        <div className='flex items-center gap-7 w-full'>
          <p className='text-base font-normal min-w-[72px]'>상품명</p>
          <div className='w-full'>
            <InputNoLabel placeholder='상품명'/>
          </div>
        </div>
        <div className='flex items-center gap-7 w-full'>
          <p className='text-base font-normal  min-w-[72px]'>이름</p>
          <div className='w-full'> 
            <InputNoLabel/>
          </div>
        </div>
      </header>
      <header className= " bg-white py-10 px-10 rounded-[20px] mt-10">
        <div className='flex items-center justify-between'>
          <p className='font-bold text-base'>총 00건</p>
          <Button className='bg-mainBlack text-white px-5 py-4'>엑셀 다운로드</Button>
        </div>
      </header>
      <article className="mt-8">
      <Table
  aria-label="Data Table"
  shadow="none"
  classNames={{
    th: "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[48px] text-center",
    td: "px-6 text-center font-normal text-base text-[#363941]",
  }}
  bottomContent={
    <div className="flex w-full justify-center mt-8">
      <Pagination
        isCompact
        showControls
        showShadow
        color="secondary"
        page={page}
        total={pages}
        onChange={setPage}
      />
    </div>
  }
>
  <TableHeader>
    <TableColumn className="w-[10%]">SIMSMCID</TableColumn>
    <TableColumn className="w-[10%]">성명</TableColumn>
    <TableColumn className="w-[10%]">생년월일</TableColumn>
    <TableColumn className="w-[10%]">성별</TableColumn>
    <TableColumn className="w-[25%]">상품명</TableColumn>
    <TableColumn className="w-[10%]">결제완료일시</TableColumn>
    <TableColumn className="w-[10%]">결제완료일시</TableColumn>
    <TableColumn className="w-[10%]">유입처</TableColumn>
  </TableHeader>
  <TableBody>
    {items.map((row) => (
      <TableRow key={row.SIMSMCID} className="border-b-1">
        <TableCell className="truncate max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
          {row.SIMSMCID}
        </TableCell>
        <TableCell className="truncate max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
          {row.name}
        </TableCell>
        <TableCell className="truncate max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
          {row.birthDate}
        </TableCell>
        <TableCell className="truncate max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
          {row.gender}
        </TableCell>
        <TableCell className="truncate max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
          {row.productName}
        </TableCell>
        <TableCell className="truncate max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap">
          {row.insuranceDateAndTime}
        </TableCell>
        <TableCell className="truncate max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap">
          {row.paymentDateAndTime}
        </TableCell>
        <TableCell className="truncate max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap">
          {row.inflow}
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>

      </article>
      </section>
  )
}

export default page