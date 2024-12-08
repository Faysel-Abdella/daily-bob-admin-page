import CommonHeader from "@/components/CommonHeader";
import { Button, Checkbox } from "@nextui-org/react";
import React from "react";

const page = () => {
  return (
    <section>
      <CommonHeader title="회원 정보 상세보기" />
      <header className="bg-white py-5 px-10 rounded-[20px] ">
        <div className=" flex items-center justify-between w-3/4 ">
          <div className="flex items-center gap-7">
            <p className="font-bold text-base text-thirdBlack min-w-[72px]">
              아이디
            </p>
            <p className="text-base text-mainBlack">abc@naver.com</p>
          </div>
          <div className="flex items-center gap-7">
            <p className="font-bold text-base text-thirdBlack min-w-[72px]">
              휴대폰번호
            </p>
            <p className="text-sm text-grayLight ">01000000000</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-7 mt-5">
          <p className="font-bold text-base text-thirdBlack min-w-[72px]">
            이름
          </p>
          <p className="text-sm text-mainBlack">홍길동</p>
        </div>
        <div className=" flex items-center justify-between w-3/4 mt-5 ">
          <div className="flex items-center gap-7">
            <p className="font-bold text-base text-thirdBlack min-w-[72px]">
              로그인 정보
            </p>
            <p className="text-sm text-grayLight"> 자체/카카오</p>
          </div>
          <div className="flex items-center gap-7">
            <p className="font-bold text-base text-thirdBlack min-w-[72px]">
              가입일
            </p>
            <p className="text-sm text-grayLight">YYYY-MM-DD </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8">
          <Button className="py-3 px-7 bg-mainBlack text-white rounded-md">
            수정
          </Button>
        </div>
      </header>
      <div className="bg-white py-5 px-10 rounded-[20px] mt-10">
        <div className="flex items-center justify-between w-1/3">
          <div>
            <p className="font-bold text-base text-mainBlack">포인트</p>
          </div>
          <div className="flex items-center gap-7">
            <div>
              <p className="text-sm text-grayLight">1,000 P</p>
            </div>
            <div className="flex items-center gap-2">
              <Button className="py-1 px-3 bg-mainBlack text-white">
                수정
              </Button>
              <Button className="py-1 px-5 bg-grayLight text-white">
                내역 상세보기
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-5 px-10 rounded-[20px] mt-10">
        <div className="flex items-center justify-start">
          <p>구매한 상품</p>
        </div>
        <div className="flex flex-col mt-5">
          {/* Header Row */}
          <div className="flex items-center justify-between bg-lightestGray py-4 px-14 rounded-[20px]">
            <div className="w-[5%] flex justify-center">
              <Checkbox size="sm" />
            </div>
            <p className="text-base text-fontGray w-[10%] text-center">번호</p>
            <p className="text-base text-fontGray w-[30%] text-center">
              상품명
            </p>
            <p className="text-base text-fontGray w-[20%] text-center">
              구매 가격
            </p>
            <p className="text-base text-fontGray w-[20%] text-center">
              구매일
            </p>
            <p className="text-base text-fontGray w-[15%] text-center">
              사용 여부
            </p>
          </div>

          <div className="flex items-center justify-between mt-5 py-4 px-14 rounded-[20px] border border-lightestGray">
            <div className="w-[5%] flex justify-center">
              <Checkbox size="sm" />
            </div>
            <p className="text-base text-mainBlack w-[10%] text-center">1</p>
            <p className="text-base text-mainBlack w-[30%] text-center">
              구매한 상품이 들어갑니다.
            </p>
            <p className="text-base text-mainBlack w-[20%] text-center">
              3,000
            </p>
            <p className="text-base text-mainBlack w-[20%] text-center">
              2025-05-26
            </p>
            <p className="text-base text-mainBlack w-[15%] text-center">사용</p>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default page;
