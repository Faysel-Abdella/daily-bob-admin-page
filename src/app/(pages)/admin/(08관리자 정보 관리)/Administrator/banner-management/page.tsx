"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDown from "@/components/DropDown";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import HeaderDropDown from "@/components/HeaderDropDown";
import InputNoLabel from "@/components/InputNoLable";
import InputWithLabel from "@/components/InputWithLabel";
import row13Column1 from "@/data/tables/row13Column1";
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
  const dropDownOptions1 = [
    { key: "option1", label: "사용" },
    { key: "option2", label: "사용" },
    { key: "option3", label: "사용" },
  ];
  const defaultDropDown1 = dropDownOptions1[0].key;
  const dropDownOptions2 = [
    { key: "option1", label: "최신순" },
    { key: "option2", label: "최신순" },
    { key: "option3", label: "최신순" },
  ];
  const defaultDropDown2 = dropDownOptions2[0].key;
  const dropDownOptions3 = [
    { key: "option1", label: "사용" },
    { key: "option2", label: "사용" },
    { key: "option3", label: "사용" },
  ];
  const defaultDropDown3 = dropDownOptions3[0].key;
  const dropDownOptions4 = [
    { key: "option1", label: "1" },
    { key: "option2", label: "1" },
    { key: "option3", label: "1" },
  ];
  const defaultDropDown4 = dropDownOptions4[0].key;
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

  const pages = Math.ceil(row13Column1.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row13Column1.slice(start, end));
    return row13Column1.slice(start, end);
  }, [page, row13Column1, viewValue, rowsPerPage]);
  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);

  const labelStyle = "font-bold text-base text-mainBlack min-w-[80px]";
  return (
    <section>
      <CommonHeader title="배너 관리  " />
      <header className=" bg-white py-10 px-10 rounded-[20px] ">
        <div className="flex items-center gap-8">
          <div className="w-1/2">
            <InputWithLabel
              label="배너 제목"
              labelStyles={labelStyle}
              placeholder="상품명"
              inputStyles="w-full"
            />
          </div>
          <div className="w-1/2">
            <DropDownWithLabel
              title="상태"
              titleStyles={labelStyle}
              options={dropDownOptions1}
              defaultSelectedKeys={defaultDropDown1}
              selectStyles="w-full"
            />
          </div>
          <Button className="rounded-md py-3 px-5 bg-mainBlack text-white">
            검색
          </Button>
        </div>

        <div className="w-[90%] flex items-center gap-4 mt-5">
          <div className="w-1/2">
            <InputWithLabel
              label="등록일"
              labelStyles={labelStyle}
              type="date"
            />
          </div>
          <p>~</p>
          <div className="w-1/2">
            <InputNoLabel inputStyles="w-full" type="date" />
          </div>
        </div>
      </header>
      <div className="bg-white py-10 px-10 rounded-[20px] mt-9">
        <header className="flex items-center justify-between">
          <p className="font-bold text-mainBlack">총 00건</p>
          <div className="flex items-center gap-3">
            <DropDown
              options={dropDownOptions2}
              defaultSelectedKeys={defaultDropDown2}
              selectStyles="w-[120px]"
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
            <Button className="py-3 px-10 rounded-md bg-mainBlack text-white">
              배너 순서 확정
            </Button>
          </div>
        </header>
        <article className="mt-5">
          <Table
            aria-label="Data Table"
            shadow="none"
            classNames={{
              th: [
                "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[48px] text-center truncate !rounded-none",
              ],
              td: [
                "px-6 text-center font-normal text-base text-[#363941] truncate",
              ],
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
              <TableColumn>이미지</TableColumn>
              <TableColumn>배너 이름</TableColumn>
              <TableColumn>링크</TableColumn>
              <TableColumn>사용여부</TableColumn>
              <TableColumn>노출 순서</TableColumn>
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
                  <TableCell>
                    <div className="w-[49px] h-[49px] bg-[#FFE8E8]"></div>
                  </TableCell>
                  <TableCell className="truncate max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.bannerName}
                  </TableCell>
                  <TableCell className="truncate max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.link}
                  </TableCell>
                  <TableCell>
                    <div className="w-[110px]">
                      <DropDown
                        options={dropDownOptions3}
                        defaultSelectedKeys={defaultDropDown3}
                        selectStyles="w-full"
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="w-[81px]">
                      <DropDown
                        options={dropDownOptions4}
                        defaultSelectedKeys={defaultDropDown4}
                        selectStyles="w-full"
                      />
                    </div>
                  </TableCell>
                  <TableCell className="truncate max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                    <Link
                      className="text-[#0F77F0] underline underline-offset-1"
                      href="/admin/Administrator/banner-management/1"
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
