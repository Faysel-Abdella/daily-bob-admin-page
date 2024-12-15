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

  const labelStyle = "font-bold text-base text-mainBlack min-w-[90px]";
  return (
    <section>
      <CommonHeader title="회원 포인트 및 응모권 관리 " />

      <header className="bg-white py-5 px-10 rounded-[20px] flex items-center justify-between gap-8">
        <div className="flex flex-col gap-6 flex-1">
          <div className="flex flex-wrap -mx-2">
            <div className="w-1/2 px-2 mb-4">
              <InputWithLabel
                label="아이디"
                labelStyles={`${labelStyle}`}
                inputStyles="w-full"
              />
            </div>
            <div className="w-1/2 px-2 mb-4 ">
              <InputWithLabel
                label="휴대폰번호"
                labelStyles={`${labelStyle}`}
                inputStyles="w-full"
                placeholder="01000000000"
              />
            </div>
          </div>
          <div className="w-1/2 px-2">
            <InputWithLabel label="이름" labelStyles={`${labelStyle}`} />
          </div>
        </div>
        <div>
          <Button className="bg-mainBlack py-3 px-20 text-white rounded-md">
            검색
          </Button>
        </div>
      </header>

      <div className="bg-white py-5 px-10 rounded-[20px] mt-9">
        <header className="flex mt-5 items-center justify-between">
          <p className="font-bold text-mainBlack">총 00건</p>
          <div className="flex items-center gap-2">
            <Button className="py-3 px-8 rounded-md bg-mainBlack text-white">
              포인트 지급
            </Button>
            <Button className="py-3 px-8 rounded-md bg-mainBlack text-white">
              엑셀 다운로드
            </Button>
          </div>
        </header>

        <article className="mt-5">
          <Table
            aria-label="Data Table"
            shadow="none"
            classNames={{
              th: [
                "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[48px]  text-center !rounded-none",
              ],
              td: [" text-center font-normal text-base text-[#363941] "],
              wrapper: ["p-0 !rounded-none overflow-hidden"],
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
                    <Link href="/admin/entry-ticket-management/entry-Ticket-Member-Management/1">
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
