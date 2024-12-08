"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDown from "@/components/DropDown";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import HeaderDropDown from "@/components/HeaderDropDown";
import InputNoLabel from "@/components/InputNoLable";
import row6Column1 from "@/data/tables/row6Column1";
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
} from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const viewOptions = [
    {
      key: "10",
      label: "10개씩 보기",
    },
    {
      key: "20",
      label: "20개씩 보기",
    },
    {
      key: "50",
      label: "50개씩 보기",
    },
    {
      key: "100",
      label: "100개씩 보기",
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

  const labelStyle = "font-bold text-base text-mainBlack min-w-[80px]";
  const dropDownOptions = [
    { key: "option1", label: "전체 회원" },
    { key: "option2", label: "전체 회원" },
    { key: "option3", label: "전체 회원" },
  ];
  const defaultDropDown = dropDownOptions[0].key;
  return (
    <section>
      <CommonHeader title="상품 관리 " />
      <header className="bg-white py-7 px-10 rounded-[20px] ">
        <div className="flex items-center gap-7 w-full">
          <p className="min-w-[72px]">상품명</p>
          <div className="flex items-center gap-7 w-full">
            <div className="w-full">
              {" "}
              <InputNoLabel placeholder="상품명" />
            </div>

            <Button className="py-3 px-5 bg-mainBlack text-white">검색</Button>
          </div>
        </div>
        <div className="flex items-center gap-7 mt-5">
          <p className="min-w-[72px]">업종</p>
          <div className="flex items-center  gap-[70px]">
            <div className="w-full">
              <DropDown
                options={dropDownOptions}
                defaultSelectedKeys={defaultDropDown}
                selectStyles="w-[200px]"
              />
            </div>
            <div className="w-full">
              <DropDownWithLabel
                title="그룹"
                options={dropDownOptions}
                defaultSelectedKeys={defaultDropDown}
                titleStyles={labelStyle}
                selectStyles="w-[235px]"
              />
            </div>
            <div className="w-full">
              <DropDownWithLabel
                title="하위 그룹"
                options={dropDownOptions}
                defaultSelectedKeys={defaultDropDown}
                titleStyles={labelStyle}
                selectStyles="w-[235px]"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="bg-white py-10 px-10 rounded-[20px] mt-9">
        <header className="flex items-center justify-between">
          <p className="font-bold text-mainBlack">총 00건</p>
          <div className="flex items-center gap-3">
            <DropDown
              options={dropDownOptions}
              defaultSelectedKeys={defaultDropDown}
            />
            <HeaderDropDown
              options={viewOptions}
              defaultSelectedKey={viewOptionsDefault}
              value={viewValue}
              setNewValue={setViewValue}
              styles="w-[100px] "
              mainStyles="bg-transparent border border-grayBorder rounded-[5px]"
            />
            <Button className="py-3 px-5 rounded-md bg-grayLight text-white">
              삭제
            </Button>
            <Button className="py-3 px-5 rounded-md bg-mainBlack text-white">
              등록
            </Button>
          </div>
        </header>
        <article className="mt-10">
          <Table
            aria-label="Data Table"
            shadow="none"
            className="table-fixed w-full" // Ensures the table layout doesn't expand
            classNames={{
              th: [
                "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[48px] text-center whitespace-nowrap",
              ],
              td: [
                "px-6 text-center font-normal text-base text-[#363941] whitespace-nowrap truncate max-w-[150px]", // Truncate text and limit width
              ],
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
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
          >
            <TableHeader>
              <TableColumn className="w-[5%]">
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
                  className="size-[14px] rounded-[2px] bg-transparent"
                  isSelected={allListCheckedPageNumbers.includes(page)}
                />
              </TableColumn>
              <TableColumn className="w-[10%]">상품 아이디</TableColumn>
              <TableColumn className="w-[10%]">업종</TableColumn>
              <TableColumn className="w-[10%]">그룹</TableColumn>
              <TableColumn className="w-[10%]">하위그룹</TableColumn>
              <TableColumn className="w-[20%]">상품명</TableColumn>
              <TableColumn className="w-[10%]">재고수량</TableColumn>
              <TableColumn className="w-[10%]">판매가</TableColumn>
              <TableColumn className="w-[10%]">판매 여부</TableColumn>
              <TableColumn className="w-[10%]">구매 제한</TableColumn>
              <TableColumn className="w-[15%]">상품 수정일</TableColumn>
            </TableHeader>
            <TableBody>
              {items.map((row) => (
                <TableRow key={row.productId} className="border-b-1">
                  <TableCell>
                    <Checkbox
                      className="text-center size-[14px] rounded-[2px]"
                      onClick={() => {
                        if (clickedRowIds.includes(row.productId)) {
                          setClickedRowIds(
                            clickedRowIds.filter((id) => id !== row.productId)
                          );
                        } else {
                          setClickedRowIds([...clickedRowIds, row.productId]);
                        }
                      }}
                      isSelected={clickedRowIds.includes(row.productId)}
                    />
                  </TableCell>
                  <TableCell className="truncate">{row.productId}</TableCell>
                  <TableCell className="truncate">{row.industry}</TableCell>
                  <TableCell className="truncate">{row.group}</TableCell>
                  <TableCell className="truncate">{row.subGroup}</TableCell>
                  <TableCell className="truncate">
                    <Link
                      href="/admin/product/product-management/1"
                      className="underline underline-offset-1"
                    >
                      {row.productName}
                    </Link>
                  </TableCell>
                  <TableCell className="truncate">
                    {row.stockQuantity}
                  </TableCell>
                  <TableCell className="truncate">{row.salePrice}</TableCell>
                  <TableCell className="truncate">{row.saleOrNot}</TableCell>
                  <TableCell className="truncate">
                    {row.purchaseLimit}
                  </TableCell>
                  <TableCell className="truncate">
                    {row.modificationDate}
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

export default Page;
