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
  Link,
} from "@nextui-org/react";
import row1Column2 from "@/data/tables/row1Column2";
import React, { useState } from "react";
import { div } from "framer-motion/client";

const Page = () => {
  const viewOptions = [
    { key: "10", label: "10개씩 보기" },
    { key: "20", label: "20개씩 보기" },
    { key: "50", label: "50개씩 보기" },
    { key: "100", label: "100개씩 보기" },
  ];

  const viewOptionsDefault = viewOptions[0].key;
  const [viewValue, setViewValue] = useState(viewOptionsDefault);
  const [page, setPage] = useState(1);

  const rowsPerPage = parseInt(viewValue);
  const pages = Math.ceil(row1Column2.length / rowsPerPage);

  // Memoized items
  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return row1Column2.slice(start, start + rowsPerPage);
  }, [page, rowsPerPage]);

  const labelStyle = "font-bold text-base text-mainBlack min-w-[130px]";

  return (
    <section>
      <CommonHeader title="포인트 상세정보" />

      <div className="bg-white py-5 px-10 rounded-[20px] ">
        <div className="flex items-center gap-4 flex-1">
          <div className="flex-1 ">
            <InputWithLabel
              label="이름"
              labelStyles={labelStyle}
              inputStyles="w-full"
            />
          </div>
          <div className="flex-1 ">
            <InputWithLabel
              label="아이디"
              labelStyles={labelStyle}
              inputStyles="w-full"
            />
          </div>
        </div>
        <div className="mt-6 w-full">
          <InputWithLabel label="CI" labelStyles={labelStyle} inputStyles="" />
        </div>
        <div className="mt-6  flex items-center gap-14 w-full">
          <div className="flex-1 ">
            {" "}
            <InputWithLabel
              label="총 지급 포인트"
              labelStyles={labelStyle}
              inputStyles="w-[px]"
            />
          </div>
          <div className="flex-1 ">
            <InputWithLabel
              label="총 사용 포인트"
              labelStyles={labelStyle}
              inputStyles="w-[px]"
            />{" "}
          </div>
          <div className="flex-1 ">
            {" "}
            <InputWithLabel
              label="포인트 잔액"
              labelStyles={labelStyle}
              inputStyles="w-[px]"
            />
          </div>
        </div>
      </div>

      <article className="mt-8">
        <Table
          aria-label="Data Table"
          shadow="none"
          classNames={{
            th: "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[48px] text-center !rounded-none",
            td: " text-center font-normal text-base text-[#363941]",
            wrapper: ["p-0 !rounded-none overflow-hidden"],
          }}
          bottomContent={
            <div className=" flex gap-2 flex-col">
              <div className="flex w-full justify-center pb-4 mt-8">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="secondary"
                  page={page}
                  total={pages}
                  onChange={setPage}
                />
              </div>
              <div className="flex py-4 bg-white justify-center items-center">
                <Button className="bg-mainBlack py-3 px-10 text-white rounded-md">
                  확인
                </Button>
              </div>
            </div>
          }
        >
          <TableHeader>
            <TableColumn>번호</TableColumn>
            <TableColumn>변경일시</TableColumn>
            <TableColumn>지급/사용처 내역</TableColumn>
            <TableColumn>상품명</TableColumn>
            <TableColumn>변경 D포인트 금액</TableColumn>
            <TableColumn>포인트 잔액</TableColumn>
          </TableHeader>
          <TableBody>
            {items.map((row) => (
              <TableRow key={row.id} className="border-b-1">
                <TableCell>{row.number}</TableCell>
                <TableCell>{row.DateChange}</TableCell>
                <TableCell>{row.Payment}</TableCell>
                <TableCell>{row.ProductName}</TableCell>
                <TableCell>{row.ChangeDAmount}</TableCell>
                <TableCell>{row.PointsBalance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </article>
    </section>
  );
};

export default Page;
