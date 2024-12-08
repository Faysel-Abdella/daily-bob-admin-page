"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDown from "@/components/DropDown";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import InputNoLabel from "@/components/InputNoLable";
import InputWithLabel from "@/components/InputWithLabel";
import React from "react";

const page = () => {
  const dropDownOptions = [
    { key: "option1", label: "전체 회원" },
    { key: "option2", label: "전체 회원" },
    { key: "option3", label: "전체 회원" },
  ];
  const defaultDropDown = dropDownOptions[0].key;
  return (
    <section>
      <CommonHeader title="데일리 퀴즈 관리 " />
      <header className="py-10 px-10 bg-white rounded-[20px] mt-10 ">
        <div className="flex items-center gap-8 ">
          <div className="flex items-center gap-8 w-full">
            <p className="min-w-[85px] font-bold text-base">질문</p>
            <div>
              <InputNoLabel
                placeholder="퀴즈를 입력하세요"
                inputStyles="w-[750px]"
              />
            </div>
          </div>
          <div>
            <InputWithLabel
              label="회차"
              placeholder="1"
              inputStyles="w-[140px]"
              labelStyles="font-bold text-base text-mainBlack min-w-[60px]"
            />
          </div>
        </div>

        <div className="flex items-center gap-8 mt-7">
          <p className="min-w-[85px] font-bold text-base">질문</p>
          <DropDown
            options={dropDownOptions}
            defaultSelectedKeys={defaultDropDown}
         selectStyles="w-[124px]"
          />
          <DropDownWithLabel
            title="퀴즈 유형"
            options={dropDownOptions}
            defaultSelectedKeys={defaultDropDown}
            selectStyles="w-[124px]"
            titleStyles="font-bold text-base text-mainBlack min-w-[72px]"
          />
          <InputWithLabel
            label="정답"
            labelStyles="font-bold text-base text-mainBlack min-w-[60px]"
            placeholder="홍길동"
            inputStyles="text-center"
          />
          <InputWithLabel
            label="오답"
            labelStyles="font-bold text-base text-mainBlack min-w-[60px]"
            placeholder="홍홍길길"
            inputStyles="text-center"
          />
          <InputWithLabel
            label="오답"
            labelStyles="font-bold text-base text-mainBlack min-w-[60px]"
            placeholder="홍홍길동"
            inputStyles="text-center"
          />
          <InputWithLabel
            label="오답"
            labelStyles="font-bold text-base text-mainBlack min-w-[60px]"
            placeholder="홍길동동"
            inputStyles="text-center"
          />
        </div>
        <div></div>
      </header>
    </section>
  );
};

export default page;
