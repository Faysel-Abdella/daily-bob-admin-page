"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import InputWithLabel from "@/components/InputWithLabel";
import { Button } from "@nextui-org/react";

const Page = () => {
  const labelStyle = "font-bold text-base text-mainBlack min-w-[130px]";
  // Dummy data for the dropdown
  const dropDownOptions = [
    { key: "option1", label: "전체 회원" },
    { key: "option2", label: "전체 회원" },
    { key: "option3", label: "전체 회원" },
  ];

  return (
    <section>
      <CommonHeader title="포인트 지급" />
      <div className="bg-white py-5 px-10 rounded-[20px]">
        <div className="flex items-center justify-between w-full">
          <div className="w-full">
            <DropDownWithLabel
              title="대상 회원"
              options={dropDownOptions}
              defaultSelectedKeys="option1"
              titleStyles={labelStyle}
              selectStyles="w-96" // Default selected key
            />
          </div>

          <div className="flex items-center justify-center gap-4 w-full">
            <div className="w-full">
              <InputWithLabel label="대상 회원" labelStyles={labelStyle} />
            </div>

            <Button className="bg-mainBlack text-white px-5 py-3">검색</Button>
          </div>
        </div>
        <div className="flex items-center justify-between w-full mt-6">
          <div className="w-full">
            <DropDownWithLabel
              title="지급 구분"
              options={dropDownOptions}
              defaultSelectedKeys="option1"
              titleStyles={labelStyle}
              selectStyles="w-96"
              // Default selected key
            />
          </div>
          <div className="w-full">
            <DropDownWithLabel
              title="지급 명목"
              options={dropDownOptions}
              defaultSelectedKeys="option1"
              titleStyles={labelStyle}
              selectStyles="w-96"
              // Default selected key
            />
          </div>
        </div>
        <div className="flex items-center w-  w-1/2 mt-6">
          <div className="w-1/2">
            <InputWithLabel label="지급 내용" labelStyles={labelStyle} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        <Button className="px-7 py-3 bg-mainBlack text-white">확인</Button>
      </div>
    </section>
  );
};

export default Page;
