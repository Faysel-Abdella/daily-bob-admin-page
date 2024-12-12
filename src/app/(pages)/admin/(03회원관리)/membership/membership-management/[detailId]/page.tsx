"use client";

import CommonHeader from "@/components/CommonHeader";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Checkbox,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";

const Page = () => {
  const {
    isOpen: isDetailBtn,
    onOpen: onDetailBtn,
    onOpenChange: onDetailBtnChange,
  } = useDisclosure();

  // Selection Logic
  const [isChecked, setIsChecked] = useState(false);

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
        <div className="flex items-center gap-7">
          <div>
            <p className="font-bold text-base text-mainBlack min-w-[72px]">
              포인트
            </p>
          </div>
          <div className="flex items-center gap-7">
            <div>
              <p className="text-sm text-grayLight">1,000 P</p>
            </div>
            <div className="flex items-center gap-2">
              <Button className="py-1 px-3 bg-mainBlack text-white rounded-md">
                수정
              </Button>
              <Button
                className="py-1 px-5 bg-grayLight text-white rounded-md"
                onClick={onDetailBtn}
              >
                내역 상세보기
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-5 px-10 rounded-[20px] mt-10">
        <div className="flex items-center justify-start">
          <p className="font-bold text-mainBlack">구매한 상품</p>
        </div>

        <Table
          aria-label="Data Table"
          shadow="none"
          classNames={{
            th: [
              "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[48px]  text-center",
            ],
            td: ["  text-center font-normal text-base text-[#363941] "],
          }}
        >
          <TableHeader>
            <TableColumn className="flex justify-center items-center">
              <Checkbox
                className={`size-[14px] rounded-[2px] bg-transparent`}
                onClick={() => setIsChecked(!isChecked)}
                isSelected={isChecked}
              ></Checkbox>
            </TableColumn>
            <TableColumn>번호</TableColumn>
            <TableColumn>상품명</TableColumn>
            <TableColumn>구매 가격</TableColumn>
            <TableColumn>구매일</TableColumn>
            <TableColumn>사용 여부</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow className="border-b-1">
              <TableCell>
                <Checkbox
                  className={`text-center size-[14px] rounded-[2px]`}
                  onClick={() => setIsChecked(!isChecked)}
                  isSelected={isChecked}
                ></Checkbox>
              </TableCell>
              <TableCell>1</TableCell>
              <TableCell>구매한 상품이 들어갑니다.</TableCell>
              <TableCell>3,000</TableCell>
              <TableCell>2025-05-26</TableCell>
              <TableCell>사용</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <Modal
        isOpen={isDetailBtn}
        placement="center"
        onOpenChange={onDetailBtnChange}
        classNames={{
          base: ["pb-24"],
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <h3 className="mt-3 text-secondaryBlack font-bold text-3xl   ">
                  포인트 내역
                </h3>
                <section className="mt-12 space-y-2">
                  <div className=" flex items-center justify-between w-full border-b-2 border-thirdGray pb-3">
                    <div>
                      <h5 className="text-[#404040]">포인트 적립 내역</h5>
                      <p className="text-grayLight">2024.08.03</p>
                    </div>
                    <p className="font-bold text-lg text-mainBlue">+ 500 P</p>
                  </div>
                  <div className=" flex items-center justify-between w-full border-b-2 border-thirdGray pb-3">
                    <div>
                      <h5 className="text-[#404040]">상품 구매</h5>
                      <p className="text-grayLight">2024.08.02</p>
                    </div>
                    <p className="font-bold text-lg text-mainRed">- 500 P</p>
                  </div>
                  <div className=" flex items-center justify-between w-full  pb-3">
                    <div>
                      <h5 className="text-[#404040]">회원가입</h5>
                      <p className="text-grayLight">2024.08.01</p>
                    </div>
                    <p className="font-bold text-lg text-mainBlue">+ 1,000 P</p>
                  </div>
                </section>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default Page;
