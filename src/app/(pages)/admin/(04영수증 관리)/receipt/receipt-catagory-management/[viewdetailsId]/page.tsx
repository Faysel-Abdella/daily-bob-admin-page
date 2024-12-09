"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDown from "@/components/DropDown";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import InputWithLabel from "@/components/InputWithLabel";
import { Button } from "@nextui-org/react";

const Page = () => {
  const dropDownOptions1 = [
    { key: "option1", label: "식당" },
    { key: "option2", label: "식당" },
    { key: "option3", label: "식당" },
  ];
  const defaultSelectedKey1 = dropDownOptions1[0].key;
  const dropDownOptions2 = [
    { key: "option1", label: "식품" },
    { key: "option2", label: "식품" },
    { key: "option3", label: "식품" },
  ];
  const defaultSelectedKey2 = dropDownOptions2[0].key;
  const dropDownOptions3 = [
    { key: "option1", label: "-" },
    { key: "option2", label: "-" },
    { key: "option3", label: "-" },
  ];
  const defaultSelectedKey3 = dropDownOptions3[0].key;
  const dropDownOptions4 = [
    { key: "option1", label: "-" },
    { key: "option2", label: "-" },
    { key: "option3", label: "-" },
  ];
  const defaultSelectedKey4 = dropDownOptions4[0].key;
  const labelStyle = "font-bold text-base text-mainBlack min-w-[90px]";
  return (
    <section>
      <CommonHeader title="영수증 상세보기" />
      <header className="bg-white py-7 px-10 rounded-[20px]">
        <div className="flex items-center gap-7 ">
          <p className="min-w-[71px] text-base font-bold text-mainBlack">
            작성자
          </p>
          <p className="text-sm font-normal text-grayLight">abc@naver.com</p>
        </div>
        <div className="flex items-center gap-7 mt-5">
          <p className="min-w-[71px] text-base font-bold text-mainBlack">
            작성자
          </p>
          <p className="text-sm font-normal text-grayLight">YYYY-MM-DD </p>
        </div>
        <div className="flex items-center gap-8">
        <div className="flex items-center gap-7 mt-3">
          <p className="min-w-[71px] text-base font-bold text-mainBlack">
            업종
          </p>
          <DropDown
            options={dropDownOptions1}
            defaultSelectedKeys={defaultSelectedKey1}
            selectStyles="w-[124px]"
          />
        </div>
        <div className="flex items-center gap-7 mt-3">
          <p className="min-w-[71px] text-base font-bold text-mainBlack">
          하위 업종
          </p>
          <DropDown
            options={dropDownOptions1}
            defaultSelectedKeys={defaultSelectedKey1}
            selectStyles="w-[124px]"
          />
        </div>
        </div>
        <div className="flex items-center gap-7 mt-3">
          <p className="min-w-[71px] text-base font-bold text-mainBlack">
            업종
          </p>
          <DropDown
            options={dropDownOptions1}
            defaultSelectedKeys={defaultSelectedKey1}
            selectStyles="w-[124px]"
          />
        </div>
        <div className="flex items-center gap-7 mt-5">
          <p className="min-w-[71px] text-base font-bold text-mainBlack">
            그룹
          </p>
          <DropDown
            options={dropDownOptions2}
            defaultSelectedKeys={defaultSelectedKey2}
            selectStyles="w-[124px]"
          />
        </div>
        <div className="flex items-center gap-6 mt-4">
          <div className="flex items-center gap-7">
            <p className="min-w-[71px] text-base font-bold text-mainBlack">
              하위그룹
            </p>
            <DropDown
              options={dropDownOptions4}
              defaultSelectedKeys={defaultSelectedKey4}
              selectStyles="w-[124px]"
            />
          </div>
          <div>
            <InputWithLabel
              label="지급 포인트"
              labelStyles={labelStyle}
              inputStyles="w-[124px]"
              placeholder="100"
            />
          </div>
        </div>
        <div className="flex items-center gap-6 mt-7">
          <div className="flex  gap-7">
            <p className="min-w-[71px] text-base font-bold text-mainBlack">
              하위그룹
            </p>
            <div className="h-[530px] w-[363px] bg-whiteRed"></div>
          </div>
          <div className="flex  gap-7">
            <p className="min-w-[71px] text-base font-bold text-mainBlack">
              하위그룹
            </p>
            <div className="flex items-center justify-center h-[530px] w-[363px] bg-whiteRed">
              텍스트가 들어갑니다.
            </div>
          </div>
        </div>
      </header>
      <div className="flex items-center justify-center mt-20">
        <Button className="py-3 px-5 bg-mainBlack text-white">삭제</Button>
      </div>
    </section>
  );
};

export default Page;
