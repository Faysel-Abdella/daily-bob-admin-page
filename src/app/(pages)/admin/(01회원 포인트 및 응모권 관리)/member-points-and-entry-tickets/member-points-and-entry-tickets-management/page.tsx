"use client";

import CommonHeader from "@/components/CommonHeader";
import InputWithLabel from "@/components/InputWithLabel";
import {
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";
import row1Column1 from "@/data/tables/row1Column1";
import { useState } from "react";
import React from "react";
import HeaderDropDown from "@/components/HeaderDropDown";
import Link from "next/link";

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

  const pages = Math.ceil(row1Column1.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row1Column1.slice(start, end));
    return row1Column1.slice(start, end);
  }, [page, row1Column1, viewValue, rowsPerPage]);

  const labelStyle = "font-bold text-base text-mainBlack min-w-[70px]";
  return (
    <section>
      <CommonHeader title="포인트 상세정보" />

      <header className="bg-white py-5 px-10 rounded-[20px] flex items-center justify-between gap-8">
        <div className="w-full">
          <div className="flex items-center gap-14 w-full">
            <div className="w-full">
              <InputWithLabel
                label="아이디"
                labelStyles={`${labelStyle}`}
                inputStyles="w-full"
              />
            </div>
            <div className="w-full">
              <InputWithLabel
                label="아이디"
                labelStyles={`${labelStyle}`}
                inputStyles="w-full"
              />
            </div>
          </div>
          <div className="mt-5 w-1/2">
            <InputWithLabel label="아이디" labelStyles={`${labelStyle}`} />
          </div>
        </div>
        <div>
          <Button className="bg-mainBlack py-3 px-20 text-white rounded-md">
            검색
          </Button>
        </div>
      </header>

      <div className="bg-white py-5 px-10 rounded-[20px] mt-9">
        <header className="flex items-center justify-between">
          <p className="font-bold text-mainBlack">총 00건</p>
          <div className="flex items-center gap-2">
            <HeaderDropDown
              options={viewOptions}
              defaultSelectedKey={viewOptionsDefault}
              value={viewValue}
              setNewValue={setViewValue}
              styles="w-[110px] "
              mainStyles="bg-transparent border border-grayBorder rounded-[5px]"
            />
            <Button className="py-3 px-10 rounded-md bg-mainBlack text-white">
              포인트 지급
            </Button>
            <Button className="py-3 px-10 rounded-md bg-mainBlack text-white">
              엑셀 다운로드
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
              <TableColumn>번호</TableColumn>
              <TableColumn>아이디</TableColumn>
              <TableColumn>이름</TableColumn>
              <TableColumn>포인트 잔액</TableColumn>
              <TableColumn>잔여 응모권 수량</TableColumn>
              <TableColumn>갱신 일시</TableColumn>
            </TableHeader>
            <TableBody>
              {items.map((row) => (
                <TableRow key={row.id} className="border-b-1">
                  <TableCell>{row.number}</TableCell>
                  <TableCell>{row.idString}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell className="text-mainBlue underline underline-offset-1">
                    <Link href="/admin/member-points-and-entry-tickets/member-points-and-entry-tickets-management/1">
                      {row.pointsBalance}
                    </Link>
                  </TableCell>
                  <TableCell className="text-mainBlue underline underline-offset-1">
                    {row.RemainingEntry}
                  </TableCell>
                  <TableCell>{row.date}</TableCell>
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
