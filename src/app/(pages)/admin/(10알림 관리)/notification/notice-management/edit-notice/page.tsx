"use client";
import CommonHeader from "@/components/CommonHeader";
import InputNoLabel from "@/components/InputNoLable";
import { Button } from "@nextui-org/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useRef } from "react";

const Page = () => {
  const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
  const editor = useRef(null);
  const config = {
    readonly: false,
    uploader: {
      insertImageAsBase64URI: true, // Upload images as base64 URI
      url: "your_upload_endpoint_here", // Endpoint to handle image uploads
    },
    minHeight: "500px",
  };
  return (
    <section>
      <CommonHeader title="공지사항 수정하기" />
      <header className="bg-white py-7 px-10 rounded-[20px] ">
        <div className="flex items-center gap-8">
          <p className="font-bold text-mainBlack min-w-[41px]">작성일</p>
          <p className="text-sm text-grayLight">YYYY-MM-DD</p>
        </div>
        <div className="flex items-center w-full gap-8 mt-8">
          <p className="font-bold text-mainBlack min-w-[41px]">제목</p>
          <div className="w-full">
            <InputNoLabel placeholder="공지사항 제목 영역입니다." />
          </div>
        </div>
        <div className="w-full min-h-[400px]   mt-8">
          <p className="font-bold text-base text-mainBlack">내용</p>
          <div className="w-full mt-8">
            <JoditEditor
              ref={editor}
              config={config}
              value=""
              onChange={(newContent) => console.log(newContent)}
            />
          </div>
        </div>
      </header>
      <div className="flex items-center justify-center mt-10">
        <Button className="py-3 px-8 bg-mainBlack text-white">수정</Button>
      </div>
    </section>
  );
};

export default Page;
