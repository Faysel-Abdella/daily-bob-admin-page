"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import HeaderDropDown from "@/components/HeaderDropDown";
import InputNoLabel from "@/components/InputNoLable";
import InputWithLabel from "@/components/InputWithLabel";
import row16Column1 from "@/data/tables/row16Column1";
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

  const pages = Math.ceil(row16Column1.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row16Column1.slice(start, end));
    return row16Column1.slice(start, end);
  }, [page, row16Column1, viewValue, rowsPerPage]);
  const labelStyle = "font-bold text-base text-mainBlack min-w-[98px]";
  const dropDownOptions = [
    { key: "option1", label: "전체 회원" },
    { key: "option2", label: "전체 회원" },
    { key: "option3", label: "전체 회원" },
  ];
  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);

  const defaultSelectedKey = dropDownOptions[0].key;
  return (
    <section>
      <CommonHeader title="눈치게임 관리" />
      <header className="bg-white py-7 px-10 rounded-[20px]">
        <div className="flex items-center gap-14 w-full">
          <div className="w-full">
            <InputWithLabel
              label="당첨 유저"
              placeholder="상품명"
              labelStyles={labelStyle}
            />
          </div>
          <div className="flex items-center gap-3 w-full">
            <div className="w-full">
              <DropDownWithLabel
                options={dropDownOptions}
                defaultSelectedKeys={defaultSelectedKey}
                title="상태"
                titleStyles={labelStyle}
                selectStyles="w-[355px] "
              />
            </div>

            <Button className="py-2 px-5  bg-mainBlack text-white">검색</Button>
          </div>
        </div>
        <div className="flex items-center gap-16 mt-5 w-full">
          <div className="w-full">
            <InputWithLabel
              label="상품명"
              placeholder="상품명"
              labelStyles={labelStyle}
            />
          </div>
          <div className=" flex items-center gap-14  w-full ">
            <div className="w-[140px">
              <InputWithLabel
                type="date"
                label="등록일"
                labelStyles={`${labelStyle}`}
              />
            </div>
            <div className="w-[140px]">
              <InputNoLabel type="date" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-16 mt-5 w-full">
          <div className="w-full">
            <InputWithLabel
              label="회차"
              placeholder="상품명"
              labelStyles={labelStyle}
            />
          </div>
          <div className=" flex items-center gap-14  w-full ">
            <div className="w-full">
              <InputWithLabel label="가격 범위" labelStyles={`${labelStyle}`} />
            </div>
            <div className="flex items-center gap-14 w-full ">
              <div className="w-full">
                <InputNoLabel />
              </div>
              <div className="py-2 px-5"></div>
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
              <TableColumn className="truncate max-w-[80px]">회차</TableColumn>
              <TableColumn className="truncate max-w-[100px]">상태</TableColumn>
              <TableColumn className="truncate max-w-[120px]">
                진행일
              </TableColumn>
              <TableColumn className="truncate max-w-[150px]">
                상품명
              </TableColumn>
              <TableColumn className="truncate max-w-[100px]">
                가격(정상가)
              </TableColumn>
              <TableColumn className="truncate max-w-[150px]">
                조회수/참여수
              </TableColumn>
              <TableColumn className="truncate max-w-[150px]">
                당첨자
              </TableColumn>
              <TableColumn className="truncate max-w-[150px]">
                당첨 가격
              </TableColumn>
            </TableHeader>
            <TableBody>
              {items.map((row) => (
                <TableRow key={row.round} className="border-b-1">
                  <TableCell>
                    {/* Row Checkbox */}
                    <Checkbox
                      className="text-center size-[14px] rounded-[2px]"
                      onClick={() => {
                        if (clickedRowIds.includes(row.round)) {
                          // Uncheck this row
                          setClickedRowIds(
                            clickedRowIds.filter((id) => id !== row.round)
                          );
                        } else {
                          // Check this row
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
                    {row.situation}
                  </TableCell>
                  <TableCell className="truncate max-w-[120px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.dateOfProgress}
                  </TableCell>
                  <TableCell className="truncate max-w-[150px]  overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.productName}
                  </TableCell>
                  <TableCell className="truncate max-w-[150px]  overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.price}
                  </TableCell>
                  <TableCell className="truncate max-w-[150px]  overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.numberOfViews}
                  </TableCell>
                  <TableCell className="truncate max-w-[150px]  overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.winner}
                  </TableCell>
                  <TableCell className="truncate max-w-[150px]  overflow-hidden text-ellipsis whitespace-nowrap">
                    {row.winningPrice}
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
