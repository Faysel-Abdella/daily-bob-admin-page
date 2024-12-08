"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDown from "@/components/DropDown";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import HeaderDropDown from "@/components/HeaderDropDown";
import InputNoLabel from "@/components/InputNoLable";
import InputWithLabel from "@/components/InputWithLabel";
import row5Column1 from "@/data/tables/row5Column1";
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
import React, { useState } from "react";

const page = () => {
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

  const pages = Math.ceil(row5Column1.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row5Column1.slice(start, end));
    return row5Column1.slice(start, end);
  }, [page, row5Column1, viewValue, rowsPerPage]);
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
      <CommonHeader title="영수증 관리" />
      <header className="bg-white py-7 px-10 rounded-[20px]">
        <div className="flex items-center gap-14 w-full">
          <div className="w-full">
            <InputWithLabel label="가게명" labelStyles={labelStyle} />
          </div>
          <div className="flex items-center gap-3 w-full">
            <div className="w-full">
              <DropDownWithLabel
                options={dropDownOptions}
                defaultSelectedKeys={defaultSelectedKey}
                title="아이디"
                titleStyles={labelStyle}
                selectStyles="w-[355px] "
              />
            </div>

            <Button className="py-2 px-5  bg-mainBlack text-white">검색</Button>
          </div>
        </div>
        <div className="flex items-center gap-16 mt-5 w-full">
          <div className="w-full">
            <InputWithLabel label="상품명" labelStyles={labelStyle} />
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
      </header>
      <div className="bg-white py-10 px-10 rounded-[20px] mt-9">
        <header className="flex items-center justify-between">
          <p className="font-bold text-mainBlack">총 00건</p>
          <div className="flex items-center gap-3">
            <DropDown
              options={dropDownOptions}
              defaultSelectedKeys={defaultSelectedKey}
            />
            <HeaderDropDown
              options={viewOptions}
              defaultSelectedKey={viewOptionsDefault}
              value={viewValue}
              setNewValue={setViewValue}
              styles="w-[100px] "
              mainStyles="bg-transparent border border-grayBorder rounded-[5px]"
            />
            <Button className="py-3 px-4 rounded-md bg-grayLight text-white">
              삭제
            </Button>
            <Button className="py-3 px-4 rounded-md bg-mainBlack text-white">
              등록
            </Button>
            <Button className="py-3 px-10 rounded-md bg-mainBlack text-white">
              변경사항 확정
            </Button>
          </div>
        </header>
        <article className="mt-10">
          <Table
            aria-label="Data Table"
            shadow="none"
            classNames={{
              th: [
                "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[48px]  text-center",
              ],
              td: ["px-6  text-center font-normal text-base text-[#363941] "],
            }}
            bottomContent={
              <div className="flex w-full justify-center  mt-8">
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
              {/* <TableColumn>번호</TableColumn> */}
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
                  className={`size-[14px] rounded-[2px] bg-transparent`}
                  isSelected={allListCheckedPageNumbers.includes(page)}
                ></Checkbox>
              </TableColumn>
              <TableColumn className="w-[5%] truncate">번호</TableColumn>
              <TableColumn className="w-[10%] truncate">가게명</TableColumn>
              <TableColumn className="w-[5%] truncate">포인트</TableColumn>
              <TableColumn className="w-[25%] truncate">업종</TableColumn>
              <TableColumn className="w-[10%] truncate">등록일</TableColumn>
              <TableColumn className="w-[25%] truncate">아이디</TableColumn>
              <TableColumn className="w-[25%] truncate">분류</TableColumn>
            </TableHeader>
            <TableBody>
              {items.map((row) => (
                <TableRow key={row.number} className="border-b-1">
                  <TableCell>
                    <Checkbox
                      className={`text-center size-[14px] rounded-[2px]`}
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
                  <TableCell className="truncate max-w-[100px] overflow-hidden  whitespace-nowrap">
                    {row.storeName}
                  </TableCell>
                  <TableCell className="truncate max-w-[100px] overflow-hidden  whitespace-nowrap">
                    {row.point}
                  </TableCell>
                  <TableCell>
                    <DropDown
                      options={dropDownOptions}
                      defaultSelectedKeys={defaultSelectedKey}
                      selectStyles="w-[120px]"
                    />
                  </TableCell>
                  <TableCell className="truncate max-w-[100px] overflow-hidden  whitespace-nowrap">
                    {row.registrationDate}
                  </TableCell>
                  <TableCell className="truncate max-w-[100px] overflow-hidden  whitespace-nowrap">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-4">
                      <DropDownWithLabel
                        title="그룹"
                        options={dropDownOptions}
                        defaultSelectedKeys={defaultSelectedKey}
                        titleStyles=" text-base text-mainBlack min-w-[40px]"
                         selectStyles="w-[120px]"
                      />
                      <DropDownWithLabel
                        title="하위 그룹"
                        options={dropDownOptions}
                        defaultSelectedKeys={defaultSelectedKey}
                        titleStyles=" text-base text-mainBlack min-w-[40px]"
                         selectStyles="w-[120px]"
                      />
                    </div>
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
