"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import DropDown from "@/components/DropDown";
import HeaderDropDown from "@/components/HeaderDropDown";
import InputWithLabel from "@/components/InputWithLabel";
import InputNoLabel from "@/components/InputNoLable";
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
import row10Column1 from "@/data/tables/row10Column1";

const page = () => {
  const labelStyle = "font-normal text-base text-mainBlack min-w-[90px]";
  const dropDownOptions1 = [
    { key: "option1", label: "성공" },
    { key: "option2", label: "성공" },
    { key: "option3", label: "성공" },
  ];
  const defaultDropDown1 = dropDownOptions1[0].key;
  const dropDownOptions2 = [
    { key: "option1", label: "최신순" },
    { key: "option2", label: "최신순" },
    { key: "option3", label: "최신순" },
  ];
  const defaultDropDown2 = dropDownOptions2[0].key;
  const viewOptions = [
    { key: "10", label: "10개씩 보기" },
    { key: "20", label: "20개씩 보기" },
    { key: "50", label: "50개씩 보기" },
    { key: "100", label: "100개씩 보기" },
  ];
  const [currentData, setCurrentData] = useState<any>();
  const viewOptionsDefault = viewOptions[0].key;
  const [viewValue, setViewValue] = useState(viewOptionsDefault);
  const [page, setPage] = useState(1);

  const rowsPerPage = parseInt(viewValue);
  const pages = Math.ceil(row10Column1.length / rowsPerPage);

  // Memoized items
  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return row10Column1.slice(start, start + rowsPerPage);
  }, [page, rowsPerPage]);
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);
  return (
    <section>
      <CommonHeader title="포인트 전환 내역 " />
      <header className=" bg-white py-10 px-10 rounded-[20px] ">
        <div className="flex items-center gap-16 w-full">
          <div className="w-full">
            <InputWithLabel
              label="사용자 ID"
              placeholder="사용자 ID"
              labelStyles={labelStyle}
            />
          </div>
          <div className="flex items-center gap-8 w-full">
            <div className="w-full">
              <InputWithLabel label="이름" labelStyles={labelStyle} />
            </div>
            <Button className="py-3 px-5 bg-mainBlack text-white">검색</Button>
          </div>
        </div>
        <div className="mt-5">
          <DropDownWithLabel
            options={dropDownOptions1}
            defaultSelectedKeys={defaultDropDown1}
            title="상태"
            titleStyles={labelStyle}
            selectStyles="w-[470px]"
          />
        </div>
      </header>
      <header className=" bg-white py-10 px-10 rounded-[20px] mt-5">
        <div className="flex items-center justify-between">
          <p className="font-bold text-mainBlack">총 00건</p>
          <div className="flex items-center gap-3">
            <DropDown
              options={dropDownOptions2}
              defaultSelectedKeys={defaultDropDown2}
              selectStyles="w-[124px]"
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
          </div>
        </div>
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
              <TableColumn className="w-[10%]">번호</TableColumn>
              <TableColumn className="w-[10%]">사용자 ID</TableColumn>
              <TableColumn className="w-[10%]">이름</TableColumn>
              <TableColumn className="w-[10%]">전환 포인트</TableColumn>
              <TableColumn className="w-[20%]">네이버 포인트</TableColumn>
              <TableColumn className="w-[10%]">전환 결과</TableColumn>
              <TableColumn className="w-[10%]">상세보기</TableColumn>
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
                    />
                  </TableCell>
                  <TableCell className="truncate">{row.number}</TableCell>
                  <TableCell className="truncate">{row.userId}</TableCell>
                  <TableCell className="truncate">{row.name}</TableCell>
                  <TableCell className="truncate">
                    {row.turningPoints}
                  </TableCell>
                  <TableCell className="truncate">{row.naverPoints}</TableCell>
                  <TableCell className="truncate text-[#248DEE]">
                    {row.conversionResults}
                  </TableCell>
                  <TableCell className="truncate">
                    {" "}
                    <Link href="" className="underline underline-offset-1">
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

export default page;
