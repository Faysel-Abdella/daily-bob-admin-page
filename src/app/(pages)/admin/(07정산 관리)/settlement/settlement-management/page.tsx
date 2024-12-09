"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDown from "@/components/DropDown";
import InputNoLabel from "@/components/InputNoLable";
import row9Column1 from "@/data/tables/row9Column1";
import {
  Button,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React, { useState } from "react";

const page = () => {
  const dropDownOptions = [
    { key: "option1", label: "전체 회원" },
    { key: "option2", label: "전체 회원" },
    { key: "option3", label: "전체 회원" },
  ];
  const defaultDropDown = dropDownOptions[0].key;
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
  const pages = Math.ceil(row9Column1.length / rowsPerPage);

  // Memoized items
  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return row9Column1.slice(start, start + rowsPerPage);
  }, [page, rowsPerPage]);

  return (
    <section>
      <CommonHeader title="상품 관리 " />
      <header className=" bg-white py-10 px-10 rounded-[20px] ">
        <div className="flex items-center gap-16">
          <div className="flex items-center gap-7 w-full">
            <p className="min-w-[72px]">상품명</p>
            <div className="w-full">
              <InputNoLabel placeholder="상품명" />
            </div>
          </div>
          <div className="flex items-center gap-7">
            <p className="min-w-[72px]">상태</p>
            <div className="flex items-center gap-7 w-full">
              <DropDown
                options={dropDownOptions}
                defaultSelectedKeys={defaultDropDown}
                selectStyles="w-[400px]"
              />
              <Button className="py-3 px-5 bg-mainBlack text-white">
                검색
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8 mt-5">
          <div className="flex items-center gap-7 w-full">
            <p className="min-w-[72px]">등록일</p>
            <div className="w-full">
              <InputNoLabel type="date" />
            </div>
          </div>
          <div className="w-full">
            <InputNoLabel type="date" />
          </div>
        </div>
      </header>
      <div className="bg-white py-10 px-10 rounded-[20px] mt-9">
        <div className="flex items-center justify-between">
          <p className="font-bold text-base">총 00건</p>
          <Button className="py-3 px-5 bg-mainBlack text-white">
            엑셀 다운로드
          </Button>
        </div>
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
            <TableColumn className="w-[10%]">고객아이디</TableColumn>
            <TableColumn className="w-[10%]">상품코드</TableColumn>
            <TableColumn className="w-[10%]">상품명</TableColumn>
            <TableColumn className="w-[10%]">원가</TableColumn>
            <TableColumn className="w-[25%]">판매가</TableColumn>
            <TableColumn className="w-[10%]">판매구분</TableColumn>
            <TableColumn className="w-[10%]">수량</TableColumn>
            <TableColumn className="w-[10%]">판매금액</TableColumn>
            <TableColumn className="w-[10%]">취소금액</TableColumn>
            <TableColumn className="w-[10%]">갱신일시</TableColumn>
          </TableHeader>
          <TableBody>
            {items.map((row) => (
              <TableRow key={row.customerId} className="border-b-1">
                <TableCell className="truncate max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {row.customerId}
                </TableCell>
                <TableCell className="truncate max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {row.productCode}
                </TableCell>
                <TableCell className="truncate max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {row.productName}
                </TableCell>
                <TableCell className="truncate max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {row.cost}
                </TableCell>
                <TableCell className="truncate max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {row.salePrice}
                </TableCell>
                <TableCell className="truncate max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {row.salesCatagory}
                </TableCell>
                <TableCell className="truncate max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {row.quantity}
                </TableCell>
                <TableCell className="truncate max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {row.salesAmount}
                </TableCell>
                <TableCell className="truncate max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {row.cancellationAMount}
                </TableCell>
                <TableCell className="truncate max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {row.upDate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </article>
        </div>
      
    </section>
  );
};

export default page;
