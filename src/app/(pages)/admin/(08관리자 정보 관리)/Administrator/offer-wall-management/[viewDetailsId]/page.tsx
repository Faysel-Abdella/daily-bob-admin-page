"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDown from "@/components/DropDown";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import InputNoLabel from "@/components/InputNoLable";
import InputWithLabel from "@/components/InputWithLabel";
import { Button, Dropdown } from "@nextui-org/react";
import assets from "@/assets";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRef } from "react";
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
  const dropDownOptions = [
    { key: "option1", label: "카테고리" },
    { key: "option2", label: "카테고리" },
    { key: "option3", label: "카테고리" },
  ];
  const defaultDropDown = dropDownOptions[0].key;
  const labelStyle = "font-bold text-base text-mainBlack min-w-[90px]";
  return (
    <section>
      <CommonHeader title="오퍼월 등록하기 " />
      <header className=" bg-white py-10 px-10 rounded-[20px] ">
        <div className="flex items center gap-[348px]">
          <div className="flex items-center ">
            <p className={labelStyle}>썸네일</p>
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
          <div className="flex items-center gap-7">
            <div className="flex flex-col items-center">
              <p className="min-w-[82px] font-bold text-mainBlack text-wrap">
                메인페이지
              </p>
              <p className="min-w-[82px] font-bold text-mainBlack text-wrap">
                배너
              </p>
            </div>

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
        </div>

        <div className="mt-7 w-full">
          <InputWithLabel
            label="광고 제목"
            labelStyles={labelStyle}
            inputStyles="w-full"
          />
        </div>
        <div className="mt-7 w-full">
          <InputWithLabel
            label="제공 문구"
            labelStyles={labelStyle}
            inputStyles="w-full"
          />
        </div>

        <div className="w-full flex items-center gap-16 mt-7">
          <div className="w-full flex items-center gap-8">
            <div className="w-1/2">
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
        </div>

        <div className="flex items-center gap-16 mt-7">
          <div className="w-1/2">
            <InputWithLabel
              label="적립 포인트"
              labelStyles={labelStyle}
              inputStyles="w-full"
            />
          </div>
          <div className="w-1/2">
            <InputWithLabel
              label="참여 링크"
              labelStyles={labelStyle}
              inputStyles="w-full"
            />
          </div>
        </div>
        <div className="w-full min-h-[400px] p-[8px] mt-8">
          <p className="font-bold text-base text-mainBlack">
            유의사항 및 상세 안내
          </p>
          <div className="w-full mt-4">
            <JoditEditor
              ref={editor}
              config={config}
              value=""
              onChange={(newContent) => console.log(newContent)}
            />
          </div>
        </div>
      </header>
      <div className="flex items-center justify-center mt-8">
        <Button className="py-3 px-8 bg-mainBlack text-white">등록</Button>
      </div>
    </section>
  );
};

export default Page;
