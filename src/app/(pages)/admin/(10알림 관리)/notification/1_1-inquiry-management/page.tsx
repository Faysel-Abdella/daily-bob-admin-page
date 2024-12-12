"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDown from "@/components/DropDown";
import HeaderDropDown from "@/components/HeaderDropDown";
import InputNoLabel from "@/components/InputNoLable";
import InputWithLabel from "@/components/InputWithLabel";
import row20Column1 from "@/data/tables/row20Column1";
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

  const pages = Math.ceil(row20Column1.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row20Column1.slice(start, end));
    return row20Column1.slice(start, end);
  }, [page, row20Column1, viewValue, rowsPerPage]);
  const labelStyle = "font-bold text-base text-mainBlack min-w-[75px]";
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
      <CommonHeader title="1:1문의 관리" />
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
            제목
          </Button>
        </div>
      </header>
      <div className="bg-white py-10 px-10 rounded-[20px] mt-10">
        <header className="flex items-center justify-between">
          <p className="font-bold text-mainBlack">총 00건</p>
          <div className="flex items-center gap-3">
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
              추가
            </Button>
          </div>
        </header>
        <article className="mt-10">
          <Table
            aria-label="Data Table"
            shadow="none"
            classNames={{
              th: [
                "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[48px] text-center",
              ],
              td: [" text-center font-normal text-base text-[#363941]"],
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
              </TableColumn>
              <TableColumn className="truncate max-w-[80px]">번호</TableColumn>
              <TableColumn className="truncate max-w-[100px]">질문</TableColumn>
              <TableColumn className="truncate max-w-[120px]">날짜</TableColumn>

              <TableColumn className="truncate max-w-[100px]">
                질문자
              </TableColumn>
              <TableColumn className="truncate max-w-[100px]">상태</TableColumn>
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
                      className="text-center size-[14px] rounded-[2px]"
                      onClick={() => {
                        if (clickedRowIds.includes(row.number)) {
                          // Uncheck this row
                          setClickedRowIds(
                            clickedRowIds.filter((id) => id !== row.number)
                          );
                        } else {
                          // Check this row
                          setClickedRowIds([...clickedRowIds, row.number]);
                        }
                      }}
                      isSelected={clickedRowIds.includes(row.number)}
                    />
                  </TableCell>
                  <TableCell className="truncate max-w-[80px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.number}
                  </TableCell>
                  <TableCell className="truncate max-w-[120px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.question}
                  </TableCell>
                  <TableCell className="truncate max-w-[120px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.Date}
                  </TableCell>
                  <TableCell className="truncate max-w-[120px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.questioner}
                  </TableCell>
                  <TableCell className=" truncate max-w-[60px] overflow-hidden  text-ellipsis whitespace-nowrap">
                    <p className="bg-[#F0F7FF] p-[2px] rounded-[4px] text-[#307FDB]">
                      답변완료
                    </p>
                  </TableCell>

                  <TableCell className="truncate max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                    <Link
                      className="text-[#9388FE] underline underline-offset-1"
                      href="/admin/notification/1_1-inquiry-management/1"
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
