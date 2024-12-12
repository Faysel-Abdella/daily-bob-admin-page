import CommonHeader from "@/components/CommonHeader";
import { Button, Textarea } from "@nextui-org/react";
import React from "react";

const Page = () => {
  return (
    <section>
      <CommonHeader title="1:1문의 상세보기" />
      <header className="bg-white py-7 px-10 rounded-[20px] ">
        <div className="flex items-center gap-14">
          <div className="flex items-center gap-10 w-full">
            <p className="font-bold min-w-[75px]">질문자</p>
            <div className="w-full ">
              <p className="text-sm w-full text-grayLight">닉네임</p>
            </div>
          </div>
          <div className="flex items-center gap-8 w-full">
            <p className="font-bold min-w-[75px]">질문 날짜</p>
            <div className="w-full">
              <p className="text-sm w-full text-grayLight">YYYY-MM-DD </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-10 w-full mt-8 ">
          <p className="font-bold min-w-[75px]">상태</p>
          <p className="bg-[#F0F7FF] px-3 py-1 rounded-[4px] text-[#307FDB]">
            답변완료
          </p>
        </div>
      </header>
      <header className="mt-10 bg-white py-10 px-10 rounded-[20px] ">
        <div className="flex gap-8">
          {" "}
          <p className="font-bold min-w-[40px]">질문</p>
          <div className="flex w-full  border  border-[#DCDCDC] rounded-[8px]">
            <Textarea
              disabled
              minRows={8}
              placeholder="Q. 질문 텍스트 영역입니다."
              className="text-sm text-grayLight rounded-md"
              radius="sm"
            />
          </div>
        </div>

        <div className="flex gap-8 mt-10">
          <p className="font-bold min-w-[40px]">답변</p>
          <Textarea
            minRows={8}
            className=" bg-white "
            placeholder="A. 답변 텍스트 영역입니다."
            variant="bordered"
          />
        </div>
      </header>
      <div className="flex items-center justify-center gap-5 mt-10">
        <Button className="py-3 px-10 bg-mainBlack text-white rounded-md">
          등록
        </Button>
        <Button className="py-3 px-10 bg-grayLight text-white rounded-md">
          삭제
        </Button>
      </div>
    </section>
  );
};

export default Page;
