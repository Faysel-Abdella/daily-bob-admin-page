"use client";
import CommonHeader from "@/components/CommonHeader";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section>
      <CommonHeader title="FAQ 상세보기 " />
      <header className="bg-white py-10 px-10 rounded-[20px] ">
        <div className="flex items-center gap-8">
          <p className="font-bold min-w-[40px]">질문</p>
          <p className="text-sm text-grayLight">Q. 질문 텍스트 영역입니다.</p>
        </div>
        <div className="flex items-center gap-8 mt-8">
          <p className="font-bold min-w-[40px]">답변</p>
          <p className="text-sm text-grayLight">A. 답변 텍스트 영역입니다.</p>
        </div>
        <div></div>
      </header>
      <div className="flex items-center justify-center mt-10">
        <Button className="py-3 px-8 bg-mainBlack text-white ">
          {" "}
          <Link href="/admin/notification/notification-management/faq/1/1">
            수정
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Page;
