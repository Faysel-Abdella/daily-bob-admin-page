"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDown from "@/components/DropDown";
import HeaderDropDown from "@/components/HeaderDropDown";
import InputNoLabel from "@/components/InputNoLable";
import InputWithLabel from "@/components/InputWithLabel";
import row19Column1 from "@/data/tables/row19Column1";
import {
  Button,
  Checkbox,
  Link,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
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

  const pages = Math.ceil(row19Column1.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row19Column1.slice(start, end));
    return row19Column1.slice(start, end);
  }, [page, row19Column1, viewValue, rowsPerPage]);
  const labelStyle = "font-bold text-base text-mainBlack min-w-[80px]";
  const dropDownOptions = [
    { key: "option1", label: "전체 회원" },
    { key: "option2", label: "전체 회원" },
    { key: "option3", label: "전체 회원" },
  ];
  const defaultDropDown = dropDownOptions[0].key;
  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);

  const defaultSelectedKey = dropDownOptions[0].key;
  return (
    <section>
      <CommonHeader title="공지사항 관리" />
      <header className="bg-white py-7 px-10 rounded-[20px] ">
        <div className="flex items-center gap-7 w-full">
          <div className="w-full">
            <InputWithLabel
              label="제목"
              labelStyles={labelStyle}
              inputStyles="w-full"
            />
          </div>

          <Button className="py-3 px-16 rounded-md bg-mainBlack text-white">
            검색
          </Button>
        </div>
      </header>

      <div className="bg-white py-10 px-10 rounded-[20px] mt-10">
        <header className="flex items-center justify-between">
          <p className="font-bold text-mainBlack">총 00건</p>
          <div className="flex items-center gap-3">
            <DropDown
              options={dropDownOptions}
              defaultSelectedKeys={defaultDropDown}
              selectStyles="min-w-[124px]"
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
        <article className="mt-5">
          <Table
            aria-label="Data Table"
            shadow="none"
            classNames={{
              th: [
                "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[48px] text-center !rounded-none",
              ],
              td: [" text-center font-normal text-base text-[#363941]"],
              wrapper: ["p-0 !rounded-none overflow-hidden"],
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
              <TableColumn className="flex justify-center items-center">
                {/* Header Checkbox */}
                <Checkbox
                  onClick={() => {
                    if (allListCheckedPageNumbers.includes(page)) {
                      // Uncheck all rows for this page
                      setAllListCheckedPageNumbers(
                        allListCheckedPageNumbers.filter(
                          (number) => number !== page
                        )
                      );
                      setClickedRowIds(
                        clickedRowIds.filter(
                          (id) =>
                            !currentData
                              .map((item: any) => item.round)
                              .includes(id)
                        )
                      );
                    } else {
                      // Check all rows for this page
                      setClickedRowIds([
                        ...clickedRowIds,
                        ...currentData.map((item: any) => item.round),
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
              <TableColumn className="truncate max-w-[80px]">번호</TableColumn>
              <TableColumn className="truncate max-w-[100px]">제목</TableColumn>
              <TableColumn className="truncate max-w-[120px]">
                작성일
              </TableColumn>

              <TableColumn className="truncate max-w-[100px]">
                상세보기
              </TableColumn>
            </TableHeader>
            <TableBody>
              {items.map((row) => (
                <TableRow key={row.number} className="border-b-1">
                  <TableCell>
                    {/* Row Checkbox */}
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
                              (number) =>
                                !items
                                  .map((item: any) => item.number)
                                  .includes(number)
                            )
                          );
                        } else {
                          setClickedRowIds([
                            ...clickedRowIds,
                            ...items.map((item: any) => item.number),
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
                  </TableCell>
                  <TableCell className="truncate max-w-[80px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.number}
                  </TableCell>
                  <TableCell className="truncate max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.title}
                  </TableCell>
                  <TableCell className="truncate max-w-[120px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.creatdDate}
                  </TableCell>

                  <TableCell className="truncate max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                    <Link
                      className="text-mainBlue underline underline-offset-2"
                      href="/admin/notification/notice-management/1"
                    >
                      {row.viewDetails}
                    </Link>
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
