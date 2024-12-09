import CommonHeader from "@/components/CommonHeader";
import { Button, Textarea } from "@nextui-org/react";
import React from "react";

const Page = () => {
  return (
    <section>
      <CommonHeader title="FAQ 수정하기 " />
      <header className="bg-white py-10 px-10 rounded-[20px] ">
        <div className="flex gap-8">
          {" "}
          <p className="font-bold min-w-[40px]">질문</p>
          <div className="flex min-w-[1118px] min-h-[150px] py-2 px-3 border  border-[#DCDCDC] rounded-[5px]">
            <p className="text-sm text-grayLight">Q. 질문 텍스트 영역입니다.</p>
          </div>
        </div>

        <div className="flex gap-8 mt-10">
          <p className="font-bold min-w-[40px]">답변</p>
          <Textarea
          minRows={8}
            className="max-w-6xl bg-white "
            placeholder="A. 답변 텍스트 영역입니다.."
          />
        </div>
      </header>
      <div className="flex items-center justify-center mt-10">
        <Button className="py-3 px-8 bg-mainBlack text-white">확인</Button>
      </div>
    </section>
  );
};

export default Page;
