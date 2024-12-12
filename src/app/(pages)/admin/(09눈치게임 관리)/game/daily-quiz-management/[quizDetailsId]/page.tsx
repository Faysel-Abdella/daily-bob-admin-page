"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDown from "@/components/DropDown";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import InputNoLabel from "@/components/InputNoLable";
import InputWithLabel from "@/components/InputWithLabel";
import { Button } from "@nextui-org/react";
import React from "react";

const Page = () => {
  const dropDownOptions = [
    { key: "option1", label: "일반" },
    { key: "option2", label: "일반" },
    { key: "option3", label: "일반" },
  ];

  const dropDownOptions2 = [
    { key: "option1", label: "4지선다" },
    { key: "option2", label: "4지선다" },
    { key: "option3", label: "4지선다" },
  ];

  const defaultDropDown = dropDownOptions[0].key;
  const defaultDropDown2 = dropDownOptions2[0].key;

  const labelStyle = "font-bold text-base text-mainBlack min-w-[80px]";
  const labelStyle2 = "font-bold text-base text-mainBlack min-w-[50px]";
  return (
    <section>
      <CommonHeader title="데일리 퀴즈 관리 " />
      <header className="py-10 px-10 bg-white rounded-[20px] mt-10 ">
        <div className="flex items-center gap-8 ">
          <div className="w-[80%]">
            <InputWithLabel
              label="질문"
              labelStyles={labelStyle}
              placeholder="퀴즈를 입력하세요"
              inputStyles="w-full"
            />
          </div>

          <div className="w-[20%]">
            <InputWithLabel
              label="회차"
              placeholder="1"
              labelStyles={labelStyle}
              inputStyles="w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-8 mt-7">
          <div className="w-1/6">
            <DropDownWithLabel
              title="분류"
              options={dropDownOptions}
              defaultSelectedKeys={defaultDropDown}
              titleStyles={labelStyle}
              selectStyles="w-[100px]"
            />
          </div>
          <div>
            <DropDownWithLabel
              title="퀴즈 유형"
              options={dropDownOptions2}
              defaultSelectedKeys={defaultDropDown2}
              selectStyles="w-[110px]"
              titleStyles="font-bold text-base text-mainBlack min-w-[70px]"
            />
          </div>
          <div className="w-1/6">
            <InputWithLabel
              label="정답"
              labelStyles={labelStyle2}
              placeholder="홍길동"
              inputStyles="w-full"
            />
          </div>
          <div className="w-1/6">
            <InputWithLabel
              label="오답"
              labelStyles={labelStyle2}
              placeholder="홍홍길길"
              inputStyles="w-full"
            />
          </div>
          <div className="w-1/6">
            <InputWithLabel
              label="오답"
              labelStyles={labelStyle2}
              placeholder="홍홍길동"
              inputStyles="w-full"
            />
          </div>

          <div className="w-1/6">
            <InputWithLabel
              label="오답"
              labelStyles={labelStyle2}
              placeholder="홍길동동"
              inputStyles="w-full"
            />
          </div>
        </div>
        <div className="mt-7">
          <InputWithLabel
            label="링크(보험)"
            labelStyles={labelStyle}
            placeholder="링크를 입력하세요"
          />
        </div>
      </header>

      <div className="flex items-center justify-center mt-10">
        <Button className="bg-mainBlack text-white rounded-md">수정</Button>
      </div>
    </section>
  );
};

export default Page;
