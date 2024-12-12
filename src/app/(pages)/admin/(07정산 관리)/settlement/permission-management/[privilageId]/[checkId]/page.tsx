"use client";
import CommonHeader from "@/components/CommonHeader";
import { Button, Checkbox } from "@nextui-org/react";
import { group } from "console";
import React, { useState } from "react";

const Page = () => {
  const groupNameData = [
    {
      id: "1",
      label: "최고 관리자",
    },
    {
      id: "2",
      label: "교보생명팀",
    },
    {
      id: "3",
      label: "운영 관리자",
    },
  ];
  const accesData = [
    {
      id: "1",
      label: "관리자 메인",
    },
    {
      id: "2",
      label: "포인트/응모권 관리",
    },
    {
      id: "3",
      label: "회원 관리",
    },
    {
      id: "4",
      label: "영수증 관리",
    },
    {
      id: "5",
      label: "상품 관리",
    },
    {
      id: "6",
      label: "보험 관리",
    },
    {
      id: "7",
      label: "정산 및 권한 관리",
    },
    {
      id: "8",
      label: "광고 관리",
    },
    {
      id: "9",
      label: "게임 관리",
    },
    {
      id: "10",
      label: "게시판/알림 관리",
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

  const [selectedSubGroups, setSelectedSubGroups] = useState<string[]>([]);

  return (
    <section>
      <CommonHeader title="관리자 권한 관리" />
      <div className="flex items-center mt-10 gap-10">
        <div>
          <div
            className="flex flex-col items-center py-10 px-6
     bg-white w-[392px] h-[756px] rounded-[20px]"
          >
            <div className="border-t-1 border-b-1 border-[#42A8FD]  w-full py-3 bg-[#E0F1FF]">
              <p className=" text-base text-center font-normal text-[#42A8FD] whitespace-nowrap">
                권한 그룹명
              </p>
            </div>

            {groupNameData.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="w-full flex flex-col items-center justify-center"
              >
                <button
                  key={groupIndex}
                  onClick={() =>
                    setSelectedSubGroups((prev) =>
                      prev.includes(group.id)
                        ? prev.filter((id) => id !== group.id)
                        : [...prev, group.id]
                    )
                  }
                  className={`border-b  border-[#CFD4DA] w-full py-3 hover:bg-[#F3F4F6] ${
                    selectedSubGroups.includes(group.id)
                      ? "bg-[#F3F4F6]"
                      : "bg-[#FFFFFF]"
                  }`}
                >
                  <p className="text-mainBlack whitespace-nowrap">
                    {group.label}
                  </p>
                </button>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end mt-5">
            <Button className="py-3 px-5 bg-[#353A46] text-white">추가</Button>
          </div>
        </div>
        <div>
          {" "}
          <div className="py-10 px-6 bg-white w-[392px] h-[756px] rounded-[20px]">
            <div className="w-full border-t-1 border-b-1 border-[#42A8FD] py-3 bg-[#E0F1FF]">
              <p className=" text-base text-center font-normal text-[#42A8FD] whitespace-nowrap">
                접근 허용
              </p>
            </div>
            {accesData.map((access, index) => (
              <div
                key={index}
                className="w-full flex flex-col items-center justify-center "
              >
                <div
                  key={index}
                  className={`border-b flex gap-6 pl-8 py-3  w-full`}
                >
                  <Checkbox color="secondary" radius="none"></Checkbox>
                  <p className="text-mainBlack whitespace-nowrap">
                    {access.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end mt-5">
            <Button className="py-3 px-5 bg-[#353A46] text-white">설정</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
