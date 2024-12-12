"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDown from "@/components/DropDown";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import InputNoLabel from "@/components/InputNoLable";
import InputWithLabel from "@/components/InputWithLabel";
import {
  Button,
  Dropdown,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import assets from "@/assets";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRef } from "react";
const Page = () => {
  const {
    isOpen: isCheckBtn,
    onOpen: onCheckBtn,
    onOpenChange: onCheckBtnChange,
  } = useDisclosure();

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
    { key: "option1", label: "총 참여인원" },
    { key: "option2", label: "총 참여인원" },
    { key: "option3", label: "총 참여인원" },
  ];

  const dropDownOptions1 = [
    { key: "option1", label: "10회차" },
    { key: "option2", label: "20회차" },
    { key: "option3", label: "30회차" },
  ];

  const defaultDropDown = dropDownOptions[0].key;
  const defaultDropDown1 = dropDownOptions1[0].key;
  const labelStyle = "font-bold text-base text-mainBlack min-w-[80px]";
  return (
    <section>
      <CommonHeader title="눈치게임 등록하기 " />
      <header className=" bg-white py-10 px-10 rounded-[20px] ">
        <div className="flex items center gap-8">
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
          <div className="w-[120px] h-[85px] bg-[#FFEDED] rounded-[10px]"></div>
          <div className="w-[120px] h-[85px] bg-[#FFEDED] rounded-[10px]"></div>
          <div className="w-[120px] h-[85px] bg-[#FFEDED] rounded-[10px]"></div>
        </div>

        <div className="flex items-center gap-16 mt-7">
          <div className="w-[30%]">
            <DropDownWithLabel
              title="회차"
              titleStyles={labelStyle}
              options={dropDownOptions1}
              defaultSelectedKeys={defaultDropDown1}
              selectStyles="w-full"
            />
          </div>

          <div className="w-[70%] flex items-center">
            <div className="w-1/2">
              <InputWithLabel
                labelStyles={labelStyle}
                label="진행 기간"
                type="date"
                inputStyles="w-full"
              />
            </div>
            <p className="px-3">~</p>

            <div className="w-1/2">
              <InputNoLabel type="date" inputStyles="w-full" />
            </div>
          </div>
        </div>

        <div className="w-full flex items-center  gap-6  mt-7">
          <div className="w-[40%]">
            <InputWithLabel label="상품명" labelStyles={labelStyle} />
          </div>

          <div className="w-[60%] flex items-center gap-6">
            <div className="w-1/2">
              <InputWithLabel
                label="정상 가격"
                labelStyles={labelStyle}
                inputStyles="w-full"
              />
            </div>

            <div className="w-1/2 flex items-center">
              <p className={labelStyle}>진행 가격</p>
              <div className="w-full">
                <InputNoLabel inputStyles="w-full" />
              </div>
              <p className="px-3">~</p>
              <div className="w-full">
                <InputNoLabel inputStyles="w-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center gap-3 mt-7">
          <div className="w-1/6">
            <InputWithLabel
              label="조회수"
              labelStyles={labelStyle}
              inputStyles="w-full"
            />
          </div>
          <div className="w-1/6">
            <InputWithLabel
              label="총 참여인원"
              labelStyles={`font-bold text-base text-mainBlack min-w-[90px]`}
              inputStyles="w-full"
            />
          </div>
          <div className="w-1/6">
            <DropDownWithLabel
              title="앱 내 노출"
              options={dropDownOptions}
              defaultSelectedKeys={defaultDropDown}
              titleStyles={labelStyle}
              selectStyles="w-full"
            />
          </div>

          <div className="w-1/6">
            <button onClick={onCheckBtn}>
              <InputWithLabel
                label="당첨자"
                labelStyles="font-bold text-base text-mainBlack min-w-[60px]"
                inputStyles="w-full"
              />
            </button>
          </div>

          <div className="w-1/6">
            <InputWithLabel
              label="당첨 가격"
              labelStyles={labelStyle}
              inputStyles="w-full"
            />
          </div>
          <div className="w-1/6">
            <InputWithLabel
              label="응모권 회수"
              labelStyles={labelStyle}
              inputStyles="w-full"
            />
          </div>
        </div>

        <div className="w-full min-h-[400px] p-[8px] mt-8">
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
      <Modal
        isOpen={isCheckBtn}
        placement="center"
        onOpenChange={onCheckBtnChange}
        hideCloseButton
        classNames={{
          base: ["min-w-[500px]"],
          body: ["p-6 px-8"],
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <h3 className="mt-3 text-mainBlack font-bold text-3xl text-center">
                  당첨자 정보 확인
                </h3>
                <div className="space-y-5">
                  <div className="flex items-center  mt-2">
                    <p className="min-w-[90px] text-[#868F9A] font-bold">
                      이름
                    </p>
                    <p className="text-[#868F9A] text-sm">홍길동</p>
                  </div>
                  <div className="flex items-center ">
                    <p className="min-w-[90px] text-[#868F9A] font-bold">
                      전화번호
                    </p>
                    <p className="text-[#868F9A] text-sm">010-1111-1111</p>
                  </div>
                  <div className="flex items-center ">
                    <p className="min-w-[90px] text-[#868F9A] font-bold">
                      주소
                    </p>
                    <p className="text-[#FF5E18] text-sm">미 입력 상태</p>
                  </div>
                </div>

                <div className="mt-7 flex justify-center items-center gap-3">
                  <Button
                    className="  py-3 px-8 rounded-md bg-[#ECEDF1] font-bold text-base text-[#868F9A]"
                    onClick={() => {
                      onCheckBtnChange();
                    }}
                  >
                    취소
                  </Button>
                  <Button
                    className=" py-3 px-8 rounded-md bg-[#ECEDF1] font-bold text-base text-[#ED3D2E]"
                    onClick={() => {
                      onCheckBtnChange();
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
