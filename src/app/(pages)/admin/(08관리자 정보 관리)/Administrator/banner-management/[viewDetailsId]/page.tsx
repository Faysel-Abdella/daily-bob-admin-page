"use client";
import assets from "@/assets";
import CommonHeader from "@/components/CommonHeader";
import DropDown from "@/components/DropDown";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import InputNoLabel from "@/components/InputNoLable";
import InputWithLabel from "@/components/InputWithLabel";
import { Button, Dropdown } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const page = () => {
  const dropDownOptions = [
    { key: "option1", label: "카테고리" },
    { key: "option2", label: "카테고리" },
    { key: "option3", label: "카테고리" },
  ];
  const defaultDropDown = dropDownOptions[0].key;
  const labelStyle = "font-bold text-base text-mainBlack min-w-[80px]";
  return (
    <section>
      <CommonHeader title="배너 등록하기 " />
      <header className=" bg-white py-10 px-10 rounded-[20px] ">
        <div className="flex items-center gap-7">
          <p className="min-w-[39px] font-bold text-mainBlack">배너 이미지</p>
          <button className="py-3 px-4 flex flex-col gap-2 rounded-[10px] border-1 border-lightBorder"><Image
                  src={assets.importImage}
                  alt="An example image"
                  width={15}
                  height={10}
                  priority
                />
                 <p className="text-sm font-semibold text-grayLight">추가</p></button>
        </div>
        <div className="flex items-center gap-16 w-full mt-7">
          <p className="min-w-[39px] font-bold text-mainBlack">배너명</p>
          <div className="w-full">
            <InputNoLabel />
          </div>
        </div>
        <div className="flex items-center gap-16 mt-7">
          <p className="min-w-[39px] font-bold text-mainBlack">그룹</p>
          <div className="flex items-center gap-8">
            <DropDown
              options={dropDownOptions}
              defaultSelectedKeys={defaultDropDown}
              selectStyles="w-[443px]"
            />
            <DropDownWithLabel
              title="하위 그룹"
              options={dropDownOptions}
              defaultSelectedKeys={defaultDropDown}
              selectStyles="w-[443px]"
              titleStyles={labelStyle}
            />
          </div>
        </div>
        <div className="flex items-center gap-16 mt-7">
          <p className="min-w-[39px] font-bold text-mainBlack">그룹</p>
          <div className="flex items-center gap-8 w-full">
            <div className="w-5/6">
              <InputNoLabel />
            </div>
            <div className="flex items-center gap-8 w-full">
              <div className="w-full">
                <InputWithLabel
                  label="기간"
                  type="date"
                  labelStyles="font-bold text-base text-mainBlack min-w-[65px]"
                />
              </div>
              <div className="w-full">
                <InputNoLabel type="date" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex items-center justify-center mt-8">
        <Button className="py-3 px-8 bg-mainBlack text-white">등록</Button>
      </div>
    </section>
  );
};

export default page;
