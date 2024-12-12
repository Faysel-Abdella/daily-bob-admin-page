"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import InputNoLabel from "@/components/InputNoLable";
import InputWithLabel from "@/components/InputWithLabel";
import { Button } from "@nextui-org/react";
import React from "react";

const Page = () => {
  const dropDownOptions1 = [
    { key: "option1", label: "선택" },
    { key: "option2", label: "선택" },
    { key: "option3", label: "선택" },
  ];
  const defaultDropDown1 = dropDownOptions1[0].key;
  const dropDownOptions2 = [
    { key: "option1", label: "18시" },
    { key: "option2", label: "18시" },
    { key: "option3", label: "18시" },
  ];
  const defaultDropDown2 = dropDownOptions2[0].key;
  const dropDownOptions3 = [
    { key: "option1", label: "30분" },
    { key: "option2", label: "30분" },
    { key: "option3", label: "30분" },
  ];
  const defaultDropDown3 = dropDownOptions3[0].key;
  const labelStyle = "font-bold text-base text-mainBlack min-w-[50px]";
  return (
    <section>
      <CommonHeader title="알림 작성 / 상세보기" />
      <header className="bg-white py-7 px-10 rounded-[20px] ">
        <div className="w-full">
          <InputWithLabel
            label="제목"
            labelStyles={labelStyle}
            placeholder="Q. 질문 텍스트 영역입니다."
            inputStyles="w-full"
          />
        </div>

        <div className="w-full mt-7">
          <InputWithLabel
            label="내용"
            labelStyles={labelStyle}
            placeholder="A. 답변 텍스트 영역입니다."
            inputStyles="w-full"
          />
        </div>

        <div className="flex items-center gap-10 mt-8">
          <DropDownWithLabel
            options={dropDownOptions1}
            defaultSelectedKeys={defaultDropDown1}
            title="날짜"
            titleStyles={labelStyle}
            selectStyles="w-[200px]"
          />
          <DropDownWithLabel
            options={dropDownOptions2}
            defaultSelectedKeys={defaultDropDown2}
            title="시"
            titleStyles={labelStyle}
            selectStyles="w-[200px]"
          />
          <DropDownWithLabel
            options={dropDownOptions3}
            defaultSelectedKeys={defaultDropDown3}
            title="분"
            titleStyles={labelStyle}
            selectStyles="w-[200px]"
          />
        </div>
      </header>

      <div className="mt-10 flex items-center justify-center gap-3">
        <Button className="rounded-md bg-mainBlack text-center text-white text-base px-6">
          확인
        </Button>
        <Button
          className="rounded-md bg-mainGray text-center text-white text-base
 px-6"
        >
          취소
        </Button>
      </div>
    </section>
  );
};

export default Page;
