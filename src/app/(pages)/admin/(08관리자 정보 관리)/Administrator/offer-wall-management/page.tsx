"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDown from "@/components/DropDown";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import HeaderDropDown from "@/components/HeaderDropDown";
import InputNoLabel from "@/components/InputNoLable";
import row12Column1 from "@/data/tables/row12Column1";
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
  const labelStyle = "font-bold text-base text-mainBlack min-w-[100px]";
  const dropDownOptions1 = [
    { key: "option1", label: "카테고리" },
    { key: "option2", label: "카테고리" },
    { key: "option3", label: "카테고리" },
  ];
  const defaultDropDown1 = dropDownOptions1[0].key;
  const dropDownOptions2 = [
    { key: "option1", label: "카테고리" },
    { key: "option2", label: "카테고리" },
    { key: "option3", label: "카테고리" },
  ];
  const defaultDropDown2 = dropDownOptions2[0].key;
  const dropDownOptions3 = [
    { key: "option1", label: "최신순" },
    { key: "option2", label: "최신순" },
    { key: "option3", label: "최신순" },
  ];
  const defaultDropDown3 = dropDownOptions3[0].key;
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

  const pages = Math.ceil(row12Column1.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row12Column1.slice(start, end));
    return row12Column1.slice(start, end);
  }, [page, row12Column1, viewValue, rowsPerPage]);
  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);
  return (
    <section>
      <CommonHeader title="오퍼월 관리 " />
      <header className="bg-white py-7 px-10 rounded-[20px] ">
        <div className="flex items-center gap-7 w-full">
          <p className="min-w-[80px] font-normal text-base">광고제목</p>
          <div className="flex items-center gap-7 w-full">
            <div className="w-full">
              {" "}
              <InputNoLabel placeholder="상품명" />
            </div>

            <Button className="py-3 px-5 bg-mainBlack text-white rounded-md">
              검색
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-6 mt-5">
          <DropDownWithLabel
            options={dropDownOptions1}
            defaultSelectedKeys={defaultDropDown1}
            title="그룹"
            titleStyles={labelStyle}
            selectStyles="w-[360px]"
          />
          <DropDownWithLabel
            options={dropDownOptions2}
            defaultSelectedKeys={defaultDropDown2}
            title="하하위 그룹"
            titleStyles={labelStyle}
            selectStyles="w-[360px]"
          />
        </div>
      </header>
      <header className=" bg-white py-10 px-10 rounded-[20px] mt-5">
        <div className="flex items-center justify-between">
          <p className="font-bold text-mainBlack">총 00건</p>
          <div className="flex items-center gap-3">
            <div className="w-[150px]">
              <DropDown
                options={dropDownOptions3}
                defaultSelectedKeys={defaultDropDown3}
                selectStyles="w-full"
              />
            </div>
            <div>
              <HeaderDropDown
                options={viewOptions}
                defaultSelectedKey={viewOptionsDefault}
                value={viewValue}
                setNewValue={setViewValue}
                styles="w-[100px] "
                mainStyles="bg-transparent border border-grayBorder rounded-[5px]"
              />
            </div>
            <Button className="py-3 px-5 rounded-md bg-mainBlack text-white">
              삭제
            </Button>
            <Button className="py-3 px-5 rounded-md bg-grayLight text-white">
              등록
            </Button>
          </div>
        </div>
        <article className="mt-10">
          <Table
            aria-label="Data Table"
            shadow="none"
            classNames={{
              th: [
                "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[48px] text-center truncate",
              ],
              td: [
                " text-center font-normal text-base text-[#363941] truncate",
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
              <TableColumn className="flex justify-center items-center">
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
                ></Checkbox>
              </TableColumn>
              <TableColumn>번호</TableColumn>
              <TableColumn>썸네일</TableColumn>
              <TableColumn>광고 제목</TableColumn>
              <TableColumn>하위 그룹</TableColumn>
              <TableColumn>포인트</TableColumn>
              <TableColumn>상세보기</TableColumn>
            </TableHeader>
            <TableBody>
              {items.map((row) => (
                <TableRow key={row.number} className="border-b-1">
                  <TableCell>
                    <Checkbox
                      className="text-center size-[14px] rounded-[2px]"
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
                  <TableCell className="truncate max-w-[100px] overflow-hidden  whitespace-nowrap">
                    {row.number}
                  </TableCell>
                  <TableCell className="max-w-[100px]">
                    <div className="w-[49px] h-[49px] bg-[#FFE8E8]"></div>
                  </TableCell>
                  <TableCell className="truncate max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.advertisement}
                  </TableCell>
                  <TableCell>{row.subGroup}</TableCell>
                  <TableCell>{row.point}</TableCell>
                  <TableCell className="truncate max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                    <Link
                      className="text-[#4A3AFF] underline underline-offset-1"
                      href="/admin/Administrator/offer-wall-management/1"
                    >
                      {row.viewDetails}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>
      </header>
    </section>
  );
};

export default Page;
