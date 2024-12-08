"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDown from "@/components/DropDown";
import HeaderDropDown from "@/components/HeaderDropDown";
import InputNoLabel from "@/components/InputNoLable";
import row15Column1 from "@/data/tables/row15Column1";
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

  const pages = Math.ceil(row15Column1.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row15Column1.slice(start, end));
    return row15Column1.slice(start, end);
  }, [page, row15Column1, viewValue, rowsPerPage]);
  const labelStyle = "font-normal text-base text-mainBlack min-w-[98px]";
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
      <CommonHeader title="데일리 퀴즈 관리 " />
      <header className=" bg-white py-10 px-10 rounded-[20px] ">
        <div className="flex items-center gap-16">
          <div className="flex items-center gap-7 w-full">
            <p className="min-w-[72px]">질문</p>
            <div className="w-full">
              <InputNoLabel placeholder="질문명" />
            </div>
          </div>
          <div className="flex items-center gap-7">
            <p className="min-w-[72px]">대답</p>
            <div className="flex items-center gap-7 w-full">
              <DropDown
                options={dropDownOptions}
                defaultSelectedKeys={defaultDropDown}
                selectStyles="w-[330px]"
              />
              <Button className="py-3 px-16 bg-mainBlack text-white">
                검색
              </Button>
            </div>
          </div>
        </div>
      </header>
      <div className="bg-white py-10 px-10 rounded-[20px] mt-9">
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
            <Button className="py-3 px-5 rounded-md bg-mainBlack text-white">
              삭제
            </Button>
            <Button className="py-3 px-10 rounded-md bg-mainBlack text-white">
              등록
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
              td: ["px-6 text-center font-normal text-base text-[#363941]"],
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
              <TableColumn className="truncate max-w-[80px]">회차</TableColumn>
              <TableColumn className="truncate max-w-[100px]">분류</TableColumn>
              <TableColumn className="truncate max-w-[120px]">질문</TableColumn>
              <TableColumn className="truncate max-w-[150px]">정답</TableColumn>
              <TableColumn className="truncate max-w-[100px]">
                상세보기
              </TableColumn>
            </TableHeader>
            <TableBody>
              {items.map((row) => (
                <TableRow key={row.round} className="border-b-1">
                  <TableCell>
                    <Checkbox
                      className="text-center size-[14px] rounded-[2px]"
                      onClick={() => {
                        if (clickedRowIds.includes(row.round)) {
                          setClickedRowIds(
                            clickedRowIds.filter((id) => id !== row.round)
                          );
                        } else {
                          setClickedRowIds([...clickedRowIds, row.round]);
                        }
                      }}
                      isSelected={clickedRowIds.includes(row.round)}
                    />
                  </TableCell>
                  <TableCell className="truncate max-w-[80px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.round}
                  </TableCell>
                  <TableCell className="truncate max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.classification}
                  </TableCell>
                  <TableCell className="truncate max-w-[120px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.questions}
                  </TableCell>
                  <TableCell className="truncate max-w-[150px] text-[#3B90F4] overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.correctAnswer}
                  </TableCell>
                  <TableCell className="truncate max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                    <Link
                      className="text-[#9388FE] underline underline-offset-1"
                      href="/admin/game/game-management/daily-quiz-management/1"
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
