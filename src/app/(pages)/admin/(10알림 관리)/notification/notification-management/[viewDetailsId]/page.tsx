"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import InputNoLabel from "@/components/InputNoLable";
import InputWithLabel from "@/components/InputWithLabel";
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
        <div className="flex items-center gap-7 ">
          <div className="w-full">
            <InputWithLabel
              label="제목"
              labelStyles="min-w-[50px] font-bold text-base"
              placeholder="Q. 질문 텍스트 영역입니다."
            />
          </div>
        </div>
        <div className="flex items-center gap-7 w-full mt-8">
          <div className="w-full">
            <InputWithLabel
              label="내용"
              labelStyles="min-w-[50px] font-bold text-base"
              placeholder="A. 답변 텍스트 영역입니다."
            />
          </div>
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
    </section>
  );
};

export default Page;
