"use client";
import CommonHeader from "@/components/CommonHeader";
import InputNoLabel from "@/components/InputNoLable";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";

const Page = () => {
  const {
    isOpen: isRegisterBtn,
    onOpen: onRegisterBtn,
    onOpenChange: onRegisterBtnChange,
  } = useDisclosure();

  const {
    isOpen: isRegisterIndustryBtn,
    onOpen: onRegisterIndustryBtn,
    onOpenChange: onRegisterIndustryBtnChange,
  } = useDisclosure();

  const [isGroup, setGroup] = useState(true);

  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);

  const [selectedSubGroups, setSelectedSubGroups] = useState<string[]>([]);

  const subGroupNameData = [
    {
      id: "1",
      label: "주방용품",
      value: "100",
    },
    {
      id: "2",
      label: "욕실 청소용품",
      value: "50",
    },
  ];

  const accessData = [
    {
      id: "1",
      label: "식품",
    },
    {
      id: "2",
      label: "생필품",
    },
    {
      id: "3",
      label: "의류",
    },
    {
      id: "4",
      label: "주거",
    },
    {
      id: "5",
      label: "의료비",
    },
    {
      id: "6",
      label: "교육비",
    },
    {
      id: "7",
      label: "사무용품",
    },
    {
      id: "8",
      label: "쇼핑",
    },
    {
      id: "9",
      label: "식당",
    },
    {
      id: "10",
      label: "전자제품",
    },
    {
      id: "11",
      label: "여행",
    },
    {
      id: "12",
      label: "주유소",
    },
  ];

  return (
    <section>
      <CommonHeader title="상품 관리 " />

      <div className="mt-10 bg-white px-5 py-5">
        <div className="flex items-center border-b border-mainBlack">
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
              {accessData.map((access, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-full"
                >
                  <button
                    key={index}
                    className={` flex gap-6 px-32 py-3 border-b border-[#CFD4DA] hover:bg-[#F3F4F6] ${
                      selectedGroups.includes(access.id)
                        ? "bg-[#F3F4F6]"
                        : "bg-[#FFFFFF]"
                    } w-full`}
                    onClick={() => {
                      if (selectedGroups.includes(access.id)) {
                        setSelectedGroups(
                          selectedGroups.filter((group) => group !== access.id)
                        );
                      } else {
                        setSelectedGroups([...selectedGroups, access.id]);
                      }
                    }}
                  >
                    <p className="text-mainBlack whitespace-nowrap">
                      {access.label}
                    </p>
                  </button>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-end mt-14"></div>
          </div>

          <div>
            {" "}
            <div className="py-10 px-10  w-[392px] h-[756px] rounded-[20px]">
              <div className="border-t-1 border-b-1 border-[#42A8FD] bo px-32 py-3 bg-[#E0F1FF]">
                <p className=" text-base font-normal text-[#42A8FD] whitespace-nowrap">
                  하위그룹
                </p>
              </div>
              {subGroupNameData.map((access, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-full"
                >
                  <button
                    key={index}
                    className={`block w-full  gap-6 px-7 py-3 border-b border-[#CFD4DA] hover:bg-[#F3F4F6] ${
                      selectedSubGroups.includes(access.id)
                        ? "bg-[#F3F4F6]"
                        : "bg-[#FFFFFF]"
                    } w-full`}
                    onClick={() => {
                      if (selectedSubGroups.includes(access.id)) {
                        setSelectedSubGroups(
                          selectedSubGroups.filter(
                            (group) => group !== access.id
                          )
                        );
                      } else {
                        setSelectedSubGroups([...selectedSubGroups, access.id]);
                      }
                    }}
                  >
                    <div className="w-full flex items-center justify-between">
                      <p className="text-mainBlack whitespace-nowrap">
                        {access.label}
                      </p>
                      <p>{access.value}</p>
                    </div>
                  </button>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-end mt-14"></div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isRegisterBtn}
        placement="center"
        onOpenChange={onRegisterBtnChange}
        hideCloseButton
        classNames={{
          base: ["min-w-[500px]"],
          body: ["p-6 pb-0 "],
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <h3 className="mt-3 text-secondaryBlack font-bold text-xl text-center">
                  하위 그룹 추가
                </h3>
                <div className="mt-8">
                  <div className=" flex items-center  gap-5 w-full ">
                    <p className="text-nowrap  font-bold text-base text-secondWhiteGray">
                      하위 그룹명
                    </p>
                    <div className="w-full">
                      <InputNoLabel placeholder="입력" />
                    </div>
                  </div>
                  <div className=" flex items-center  gap-5 w-full mt-5 ">
                    <p className=" text-nowrap font-bold text-base text-secondWhiteGray">
                      지급 포인트
                    </p>
                    <div className="w-full">
                      <InputNoLabel placeholder="입력" />
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex justify-center items-center gap-3">
                  <Button
                    className="  py-3 px-5 rounded-md bg-whiteGray font-bold text-base text-[#868F9A]"
                    onClick={() => {
                      onRegisterBtnChange();
                    }}
                  >
                    취소
                  </Button>
                  <Button
                    className=" py-3 px-8 rounded-md bg-whiteGray font-bold text-base text-[#ED3D2E]"
                    onClick={() => {
                      onRegisterBtnChange();
                    }}
                  >
                    확인
                  </Button>
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isRegisterIndustryBtn}
        placement="center"
        onOpenChange={onRegisterIndustryBtnChange}
        hideCloseButton
        classNames={{
          base: ["min-w-[500px]"],
          body: ["p-6 pb-0 "],
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <h3 className="mt-3 text-secondaryBlack font-bold text-xl text-center">
                  업종 추가
                </h3>
                <div className="mt-8">
                  <div className=" flex items-center  gap-5 w-full ">
                    <p className="text-nowrap  font-bold text-base text-secondWhiteGray">
                      업종명
                    </p>
                    <div className="w-full">
                      <InputNoLabel placeholder="입력" />
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex justify-center items-center gap-3">
                  <Button
                    className="  py-3 px-5 rounded-md bg-whiteGray font-bold text-base text-[#868F9A]"
                    onClick={() => {
                      onRegisterIndustryBtnChange();
                    }}
                  >
                    취소
                  </Button>
                  <Button
                    className=" py-3 px-8 rounded-md bg-whiteGray font-bold text-base text-[#ED3D2E]"
                    onClick={() => {
                      onRegisterIndustryBtnChange();
                    }}
                  >
                    확인
                  </Button>
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

export default Page;
