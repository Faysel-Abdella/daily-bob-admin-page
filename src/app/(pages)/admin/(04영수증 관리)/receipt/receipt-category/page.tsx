"use client";
import CommonHeader from "@/components/CommonHeader";
import InputNoLabel from "@/components/InputNoLable";
import InputWithLabel from "@/components/InputWithLabel";
import { Button, Checkbox, Modal, ModalBody, ModalContent, ModalFooter, useDisclosure } from "@nextui-org/react";
import { group } from "console";
import { div } from "framer-motion/client";
import React, { useState } from "react";

const page = () => {
    const {
        isOpen: isRegisterBtn,
        onOpen: onRegisterBtn,
        onOpenChange: onRegisterBtnChange,
      } = useDisclosure();
    
      
  const [isGroup, setGroup] = useState(true);
  const groupNameData = [
    {
      kitchenWare: "주방용품",
      bathroomSupplies: "욕실 청소용품",
    },
  ];
  const accesData = [
    {
      food: "식품",
      dailyNecessities: "생필품",
      clothes: "의류",
      dwelling: "주거",
      medicalExpenses: "의료비",
      educationExpenses: "교육비",
      officeSupplies: "사무용품",
      shopping: "쇼핑",
      restaurant: "식당",
      electronics: "전자제품",
      travel: "여행",
      gasStation: "주유소",
    },
  ];
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<{
    [key: string]: boolean;
  }>(Object.fromEntries(Object.keys(accesData[0]).map((key) => [key, false])));

  const handleCheckboxChange = (key: string, checked: boolean) => {
    setSelectedCheckboxes((prev) => ({
      ...prev,
      [key]: checked,
    }));
  };
  return (
    <section>
      <CommonHeader title="상품 관리 " />

      <div className="mt-10 bg-white px-5 py-5">
       

        <div className="flex items-center">
          <Button
            onClick={() => setGroup(!isGroup)}
            className={`rounded-none py-3 px-8 ${
              isGroup ? "bg-mainBlack text-white" : "bg-white text-mainBlack"
            } `}
          >
            그룹
          </Button>
          <Button
            onClick={() => setGroup(!isGroup)}
            className={`rounded-none py-3 px-8 ${
              !isGroup ? "bg-mainBlack text-white" : "bg-white text-mainBlack"
            } `}
          >
            업종
          </Button>
        </div>

     

        <div className="flex items-center justify-center gap-10">
          <div>
            {" "}
            <div className="py-10 px-10  w-[392px] h-[756px] rounded-[20px]">
              <div className="border-t-1 border-b-1 border-[#42A8FD] bo px-32 py-3 bg-[#E0F1FF]">
                <p className=" text-base font-normal text-[#42A8FD] whitespace-nowrap">
                  접근 허용
                </p>
              </div>
              {accesData.map((access, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-full"
                >
                  {Object.entries(access).map(([key, value], idx) => (
                    <div
                      key={key}
                      className={` flex gap-6 px-32 py-3 ${
                        idx % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F3F4F6]"
                      } w-full`}
                    >
                      <p className="text-mainBlack whitespace-nowrap">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-end mt-14"></div>
          </div>
          <div>
            <div
              className="flex flex-col items-center py-10 px-10
     w-[392px] h-[756px] rounded-[20px]"
            >
              <div className="border-t-1 border-b-1 border-[#42A8FD] bo px-32 py-3 bg-[#E0F1FF]">
                <p className=" text-base font-normal text-[#42A8FD] whitespace-nowrap">
                  권한 그룹명
                </p>
              </div>
              {groupNameData.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex flex-col items-center justify-center"
                >
                  {Object.entries(group).map(([key, value], entryIndex) => (
                    <div
                      key={key}
                      className={`border-t-1 border-b-1 border-[#CFD4DA] px-32 py-3 ${
                        entryIndex % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F3F4F6]"
                      }`}
                    >
                      <p className="text-mainBlack whitespace-nowrap">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-end mt-5">
              <Button onClick={onRegisterBtn} className="py-3 px-5 bg-[#353A46] text-white">
                추가
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isRegisterBtn}
        placement="center"
        onOpenChange={onRegisterBtnChange}
        hideCloseButton
        classNames={{
          base: ["flex justify-center items-center"],
          body: ["p-6 flex justify-center items-center"],
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <h3 className="mt-3 text-secondaryBlack font-bold text-xl text-center">
                  회원 제재
                </h3>
                <div className="mt-8">
                  <div className=" flex items-center  gap-3 w-full ">
                    <p className=" min-w-[70px] font-bold text-sm text-secondWhiteGray">
                    하위 그룹명
                    </p>
                   <div className="w-full"><InputNoLabel/></div>
                    
                  </div>
                  <div className=" flex items-center  gap-3 w-full mt-5 ">
                    <p className=" min-w-[70px] font-bold text-sm text-secondWhiteGray">
                    지급 포인트
                    </p>
                   <div className="w-full">  <InputNoLabel/></div>
                  
                  </div>
                  
                </div>

                <div className="mt-7 flex justify-center items-center gap-3">
                  <Button
                    className="  py-3 px-5 rounded-md bg-whiteGray font-bold text-base text-[#868F9A]"
                    onClick={() => {
                      onRegisterBtnChange();
                    }}
                  ><p>취소</p></Button>
                  <Button
                    className=" py-3 px-8 rounded-md bg-whiteGray font-bold text-base text-[#ED3D2E]"
                    onClick={() => {
                      onRegisterBtnChange();
                    }}
                  ><p>글쓰기</p></Button>
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default page;
