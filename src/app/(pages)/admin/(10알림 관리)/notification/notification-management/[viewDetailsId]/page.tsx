'use client'
import CommonHeader from "@/components/CommonHeader";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import InputNoLabel from "@/components/InputNoLable";
import React from "react";

const page = () => {
  const dropDownOptions = [
    { key: "option1", label: "전체 회원" },
    { key: "option2", label: "전체 회원" },
    { key: "option3", label: "전체 회원" },
  ];
  const defaultDropDown = dropDownOptions[0].key;
  const labelStyle = "font-bold text-base text-mainBlack min-w-[98px]";
  return (
    <section>
      <CommonHeader title="알림 작성 / 상세보기" />
      <header className="bg-white py-7 px-10 rounded-[20px] ">
        <div className="flex items-center gap-7 w-[1150px]">
          <p className="min-w-[72px] font-bold text-base">제목</p>
          <div className="w-full">
            <InputNoLabel placeholder="Q. 질문 텍스트 영역입니다." />
          </div>
        </div>
        <div className="flex items-center gap-7 w-full mt-8">
          <p className="min-w-[72px] font-bold text-base">내용</p>
          <div className="w-3/4">
            <InputNoLabel placeholder="A. 답변 텍스트 영역입니다." />
          </div>
        </div>
        <div className="flex items-center gap-10 mt-8">
          <DropDownWithLabel
            options={dropDownOptions}
            defaultSelectedKeys={defaultDropDown}
            title="날짜"
            titleStyles={labelStyle}
            selectStyles="w-[259px]"
          />
          <DropDownWithLabel
            options={dropDownOptions}
            defaultSelectedKeys={defaultDropDown}
            title="시"
            titleStyles={labelStyle}
            selectStyles="w-[259px]"
          />
          <DropDownWithLabel
            options={dropDownOptions}
            defaultSelectedKeys={defaultDropDown}
            title="분"
            titleStyles={labelStyle}
            selectStyles="w-[259px]"
          />
        </div>
      </header>
    </section>
  );
};

export default page;
