"use client";

import InputNoLabel from "@/components/InputNoLable";
import InputWithLabel from "@/components/InputWithLabel";
import Image from "next/image";
import React, { useRef } from "react";

import dynamic from "next/dynamic";
import { Button } from "@nextui-org/react";
import DropDown from "@/components/DropDown";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import assets from "@/assets";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const Page = () => {
  const labelStyle = "font-bold text-base !text-grayLight min-w-[95px]";
  const dropDownOptions1 = [
    { key: "option1", label: "카테고리" },
    { key: "option2", label: "카테고리" },
    { key: "option3", label: "카테고리" },
  ];
  const defaultDropDown1 = dropDownOptions1[0].key;
  
  const dropDownOptions2 = [
    { key: "option1", label: "Y" },
    { key: "option2", label: "Y" },
    { key: "option3", label: "Y" },
  ];
  const defaultDropDown2 = dropDownOptions2[0].key;
  const editor = useRef(null);
  const config = {
    readonly: false,
    uploader: {
      insertImageAsBase64URI: true, // Upload images as base64 URI
      url: "your_upload_endpoint_here", // Endpoint to handle image uploads
    },
    minHeight: "500px",
  };

  return (
    <section className="overflow-x-hidden">
      <h3 className="text-3xl font-bold mt-7 mb-10">상품 상세보기</h3>
      <div className="py-8 px-10 mt-10 rounded-[5px] bg-white">
        <div className="flex items-center gap-8">
          <p className="font-bold text-base min-w-[82px] text-grayLight">
            썸네일
          </p>
          <div className="flex items-center gap-8">
            <button className="py-3 px-4 flex flex-col gap-2 rounded-[10px] border-1 border-lightBorder">
              <Image
                src={assets.importImage}
                alt="An example image"
                width={20}
                height={15}
                priority
              />
              <p className="text-sm font-semibold text-grayLight">추가</p>
            </button>
            <div className="w-[203px] h-[143px] bg-whiteRed rounded-[10px]"></div>
          </div>
        </div>
        <div className="flex items-center gap-8 mt-8">
          <p className=" font-bold text-base min-w-[82px]  text-grayLight">
            상세 이미지
          </p>
          <div className="flex items-center gap-8">
            <div className="py-3 px-4 flex flex-col gap-2 rounded-[10px] border-1 border-lightBorder">
              <Image
                src={assets.importImage}
                alt="An example image"
                width={20}
                height={15}
                priority
              />
              <p className="text-sm font-semibold text-grayLight">추가</p>
            </div>
            <div className="w-[203px] h-[143px] bg-whiteRed rounded-[10px]"></div>
          </div>
        </div>
        <div className="flex items-center gap-8 mt-8">
          <p className=" font-bold text-base min-w-[82px]  text-grayLight">
            상세 이미지
          </p>
          <div className="flex items-center gap-8 ">
            <div className="w-[400px]">
              <InputNoLabel placeholder="상품명 텍스트" />
            </div>
            <div className="flex items-center gap-8 ">
              <div className="w-[240px]">
                <InputWithLabel label="상품 원가" labelStyles={labelStyle} />
              </div>
              <div className="flex items-center gap-5">
                <div className="w-[240px]">
                  <InputWithLabel
                    label="상품 아이디"
                    placeholder="11111111"
                    labelStyles={labelStyle}
                  />
                </div>
                <Button className=" bg-mainBlack text-white">변경</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8 mt-8">
          <p className=" font-bold text-base min-w-[82px]  text-grayLight">
            상세 이미지
          </p>
          <div className="flex items-center gap-8 ">
            <div>
              <DropDown
                options={dropDownOptions1}
                defaultSelectedKeys={defaultDropDown1}
                selectStyles="w-[138px]"
              />
            </div>
            <div>
              <DropDownWithLabel
                title="그룹"
                options={dropDownOptions1}
                defaultSelectedKeys={defaultDropDown2}
                selectStyles="w-[138px]"
                titleStyles={labelStyle}
              />
            </div>
            <div>
              <DropDownWithLabel
                title="하위 그룹"
                options={dropDownOptions1}
                defaultSelectedKeys={defaultDropDown1}
                selectStyles="w-[138px]"
                titleStyles={labelStyle}
              />
            </div>
            <div className="flex items-center gap-7">
              <div>
                <DropDownWithLabel
                  title="판매 여부"
                  options={dropDownOptions2}
                  defaultSelectedKeys={defaultDropDown2}
                  selectStyles="w-[65px]"
                  titleStyles={labelStyle}
                />
              </div>
              <div>
                <DropDownWithLabel
                  title="보험 가입 필"
                  options={dropDownOptions2}
                  defaultSelectedKeys={defaultDropDown2}
                  selectStyles="w-[65px]"
                  titleStyles={labelStyle}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8 mt-8">
          <p className=" font-bold text-base min-w-[82px]  text-grayLight">
            상세 이미지
          </p>
          <div className="flex items-center gap-8  ">
            <div className="w-[140px]">
              <InputNoLabel />
            </div>
            
              <div className=" w-[170px]">
                <InputWithLabel
                  label="1인 판매 제한"
                  labelStyles="font-bold text-base !text-grayLight min-w-[102px]"
                />
              </div>
              <div className="w-[170px]">
                <InputWithLabel
                  label="판매 개수"
                  labelStyles="font-bold text-base !text-grayLight min-w-[102px]"
                />
              </div>
              <div className="w-[200px]">
                <InputWithLabel
                  label="최대 사용 포인트"
                  labelStyles="font-bold text-base !text-grayLight min-w-[140px]"
                  placeholder="50%"
                />
              </div>
          

            <div className="w-[240px]">
              <InputWithLabel
                label="유효 기간"
                labelStyles="font-bold text-base !text-grayLight min-w-[102px]"
              />
            </div>
          </div>
        </div>
        <div className=" min-h-[400px] p-[8px] mt-8">
          <p className="font-bold text-base text-grayLight">상품 상세 정보</p>
          <div className="w-[1150px] mt-4">
            <JoditEditor
              ref={editor}
              config={config}
              value=""
              onChange={(newContent) => console.log(newContent)}
            />
          </div>
        </div>
        <div className=" min-h-[400px] p-[8px] mt-8">
          <p className="font-bold text-base text-grayLight">
            반품 및 교환 안내
          </p>
          <div className="w-[1150px] mt-4">
            <JoditEditor
              ref={editor}
              config={config}
              value=""
              onChange={(newContent) => console.log(newContent)}
            />
          </div>
        </div>
        <div className="min-h-[400px] p-[8px] mt-8">
          <p className="font-bold text-base text-grayLight">
            반품 및 교환 기준
          </p>
          <div className="w-[1150px] mt-4">
            <JoditEditor
              ref={editor}
              config={config}
              value=""
              onChange={(newContent) => console.log(newContent)}
            />
          </div>
        </div>
        <div className="mt-52 w-full">
          <p>영수증 발행</p>
          <div className="mt-36">
            <div className="flex items-center gap-7 ">
              <p className="min-w-[240px]">발행자</p>
              <div className="w-full">
                <InputNoLabel />
              </div>
            </div>
            <div className="flex items-center gap-7  mt-6">
              <div className="min-w-[240px] flex flex-col">
                <p>유효기간, 이용조건</p>
                <p>(유효기간 경과시 보상 기준 포함)</p>
              </div>
              <div className="w-full">
                <InputNoLabel />
              </div>
            </div>
            <div className="flex items-center gap-7  mt-6">
              <p className="min-w-[240px]">이용 가능 매장</p>
              <div className="w-full">
                <InputNoLabel />
              </div>
            </div>
            <div className="flex items-center gap-7  mt-6">
              <p className="min-w-[240px]">환불 조건 및 방법</p>
              <div className="w-full">
                <InputNoLabel />
              </div>
            </div>
            <div className="flex items-center gap-7  mt-6">
              <p className="min-w-[240px]">소비자 상담 관련 전화번호</p>
              <div className="w-full">
                <InputNoLabel />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10 gap-9">
        <Button className="py-3 px-6 bg-mainBlack text-white">수정</Button>
        <Button className="py-3 px-6 bg-grayLight text-white">삭제</Button>
      </div>
    </section>
  );
};

export default Page;
