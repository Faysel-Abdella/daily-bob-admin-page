'use client';
import CommonHeader from '@/components/CommonHeader';
import DropDown from '@/components/DropDown';
import DropDownWithLabel from '@/components/DropDownWithLabel';
import HeaderDropDown from '@/components/HeaderDropDown';
import InputNoLabel from '@/components/InputNoLable';
import InputWithLabel from '@/components/InputWithLabel';
import row6Column1 from '@/data/tables/row6Column1';
import {
  Button,
  Checkbox,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => {
  const viewOptions = [
    {
      key: '10',
      label: '10개씩 보기',
    },
    {
      key: '20',
      label: '20개씩 보기',
    },
    {
      key: '50',
      label: '50개씩 보기',
    },
    {
      key: '100',
      label: '100개씩 보기',
    },
  ];

  const viewOptionsDefault = viewOptions[0].key;

  const [viewValue, setViewValue] = useState(viewOptionsDefault);

  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = parseInt(viewValue);

  const pages = Math.ceil(row6Column1.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row6Column1.slice(start, end));
    return row6Column1.slice(start, end);
  }, [page, row6Column1, viewValue, rowsPerPage]);
  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);

  const labelStyle = 'font-bold text-base text-mainBlack min-w-[80px]';
  const dropDownOptions = [
    { key: 'option1', label: '전체 회원' },
    { key: 'option2', label: '전체 회원' },
    { key: 'option3', label: '전체 회원' },
  ];
  const defaultDropDown = dropDownOptions[0].key;
  return (
    <section>
      <CommonHeader title='상품 관리 ' />
      <header className='bg-white py-7 px-10 rounded-[20px] '>
        <div className='flex items-center gap-7 w-full'>
          <div className='flex items-center gap-7 w-full'>
            <div className='w-full'>
              <InputWithLabel
                label='상품명'
                placeholder='상품명'
                labelStyles={labelStyle}
              />
            </div>

            <Button className='py-3 px-5 bg-mainBlack text-white rounded-md'>
              검색
            </Button>
          </div>
        </div>
        <div className='w-full flex items-center gap-7 mt-5'>
          <div className='w-[90%] flex items-center justify-between'>
            <div className='w-[30%]'>
              <DropDownWithLabel
                title='업종'
                options={dropDownOptions}
                defaultSelectedKeys={defaultDropDown}
                titleStyles={labelStyle}
                selectStyles='w-full'
              />
            </div>
            <div className='w-[30%]'>
              <DropDownWithLabel
                title='그룹'
                options={dropDownOptions}
                defaultSelectedKeys={defaultDropDown}
                titleStyles={labelStyle}
                selectStyles='w-full'
              />
            </div>
            <div className='w-[30%]'>
              <DropDownWithLabel
                title='하위 그룹'
                options={dropDownOptions}
                defaultSelectedKeys={defaultDropDown}
                titleStyles={labelStyle}
                selectStyles='w-full'
              />
            </div>
          </div>
        </div>
      </header>
      <div className='bg-white py-10 px-10 rounded-[20px] mt-9'>
        <header className='flex mt-5 items-center justify-between'>
          <p className='font-bold text-mainBlack'>총 00건</p>
          <div className='flex items-center gap-3'>
            <div className='w-[150px]'>
              <DropDown
                options={dropDownOptions}
                defaultSelectedKeys={defaultDropDown}
                selectStyles='w-full'
              />
            </div>
            <div>
              <HeaderDropDown
                options={viewOptions}
                defaultSelectedKey={viewOptionsDefault}
                value={viewValue}
                setNewValue={setViewValue}
                styles='w-[100px] '
                mainStyles='bg-transparent border border-grayBorder rounded-[5px]'
              />
            </div>
            <Button className='py-3 px-5 rounded-md bg-grayLight text-white'>
              삭제
            </Button>
            <Button className='py-3 px-5 rounded-md bg-mainBlack text-white'>
              등록
            </Button>
          </div>
        </header>
        <article className='mt-5'>
          <Table
            aria-label='Data Table'
            shadow='none'
            className='table-fixed w-full'
            classNames={{
              th: [
                'font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[48px] text-center whitespace-nowrap',
              ],
              td: [
                'px-2 text-center font-normal text-base text-[#363941] whitespace-nowrap truncate max-w-[150px]',
              ],
            }}
            bottomContent={
              <div className='flex w-full justify-center mt-8'>
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color='secondary'
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
          >
            <TableHeader>
              <TableColumn>
                <Checkbox
                  onClick={() => {
                    if (allListCheckedPageNumbers.includes(page)) {
                      setAllListCheckedPageNumbers(
                        allListCheckedPageNumbers.filter(
                          (number) => number !== page
                        )
                      );
                      setClickedRowIds(
                        clickedRowIds.filter(
                          (id) =>
                            !currentData
                              .map((item: any) => item.number)
                              .includes(id)
                        )
                      );
                    } else {
                      setClickedRowIds([
                        ...clickedRowIds,
                        ...currentData.map((item: any) => item.number),
                      ]);
                      setAllListCheckedPageNumbers([
                        ...allListCheckedPageNumbers,
                        page,
                      ]);
                    }
                  }}
                  className={`size-[30px] rounded-[2px] bg-transparent`}
                  isSelected={allListCheckedPageNumbers.includes(page)}
                ></Checkbox>
              </TableColumn>
              <TableColumn>상품 아이디</TableColumn>
              <TableColumn>업종</TableColumn>
              <TableColumn>그룹</TableColumn>
              <TableColumn>하위그룹</TableColumn>
              <TableColumn>상품명</TableColumn>
              <TableColumn>재고수량</TableColumn>
              <TableColumn>판매가</TableColumn>
              <TableColumn>판매 여부</TableColumn>
              <TableColumn>구매 제한</TableColumn>
              <TableColumn>상품 수정일</TableColumn>
            </TableHeader>
            <TableBody>
              {items.map((row) => (
                <TableRow key={row.productId} className='border-b-1'>
                  <TableCell>
                    <Checkbox
                      className={`text-center size-[30px] rounded-[2px]`}
                      onClick={() => {
                        if (clickedRowIds.includes(row.number)) {
                          setClickedRowIds(
                            clickedRowIds.filter((id) => id !== row.number)
                          );
                        } else {
                          setClickedRowIds([...clickedRowIds, row.number]);
                        }
                      }}
                      isSelected={clickedRowIds.includes(row.number)}
                    ></Checkbox>
                  </TableCell>
                  <TableCell className='truncate'>{row.productId}</TableCell>
                  <TableCell className='truncate'>{row.industry}</TableCell>
                  <TableCell className='truncate'>{row.group}</TableCell>
                  <TableCell className='truncate'>{row.subGroup}</TableCell>
                  <TableCell className='truncate'>
                    <Link
                      href='/admin/product/product-management/1'
                      className='underline underline-offset-1'
                    >
                      {row.productName}
                    </Link>
                  </TableCell>
                  <TableCell className='truncate'>
                    {row.stockQuantity}
                  </TableCell>
                  <TableCell className='truncate'>{row.salePrice}</TableCell>
                  <TableCell className='truncate'>{row.saleOrNot}</TableCell>
                  <TableCell className='truncate'>
                    {row.purchaseLimit}
                  </TableCell>
                  <TableCell>{row.modificationDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>
      </div>
    </section>
  );
};

export default Page;
