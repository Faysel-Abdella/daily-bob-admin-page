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

const Page = () => {
  const dropDownOptions = [
    { key: "option1", label: "카테고리" },
    { key: "option2", label: "카테고리" },
    { key: "option3", label: "카테고리" },
  ];
  const defaultDropDown = dropDownOptions[0].key;
  const labelStyle = "font-bold text-base text-mainBlack min-w-[100px]";
  return (
    <section>
      <CommonHeader title="배너 등록하기 " />
      <header className=" bg-white py-10 px-10 rounded-[20px] ">
        <div className="flex items-center ">
          <p className={labelStyle}>배너 이미지</p>
          <button className="py-3 px-6 flex flex-col items-center justify-center gap-2 rounded-[10px] border-1 border-lightBorder">
            <Image
              src={assets.importImage}
              alt="An example image"
              width={15}
              height={10}
              priority
            />
            <p className="text-sm font-semibold text-grayLight">추가</p>
          </button>
        </div>
        <div className="mt-7 w-full">
          <InputWithLabel label="배너명" labelStyles={labelStyle} />
        </div>

        <div className="w-full flex items-center gap-16 mt-7">
          <div className="w-1/2 ">
            <DropDownWithLabel
              title="그룹"
              titleStyles={labelStyle}
              options={dropDownOptions}
              defaultSelectedKeys={defaultDropDown}
              selectStyles="w-full"
            />
          </div>
          <div className="w-1/2">
            <DropDownWithLabel
              title="하위 그룹"
              options={dropDownOptions}
              defaultSelectedKeys={defaultDropDown}
              titleStyles={labelStyle}
              selectStyles="w-full"
            />
          </div>
        </div>

        <div className="w-full flex items-center gap-8 mt-7">
          <div className="w-1/2">
            <InputWithLabel label="링크" labelStyles={labelStyle} />
          </div>

          <div className="w-1/2 flex items-center gap-3 ">
            <div className="w-full">
              <InputWithLabel
                label="기간"
                type="date"
                labelStyles={labelStyle}
              />
            </div>
            <p>~</p>
            <div className="w-full">
              <InputNoLabel type="date" />
            </div>
          </div>
        </div>
      </header>
      <div className="flex items-center justify-center mt-8">
        <Button className="py-3 px-8 bg-mainBlack text-white rounded-md">
          등록
        </Button>
      </div>
    </section>
  );
};

export default Page;
