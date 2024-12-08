'use client'
import CommonHeader from '@/components/CommonHeader'
import { Button, Checkbox } from '@nextui-org/react'
import { group } from 'console'
import React, { useState } from 'react'

const page = () => {
    const groupNameData=[
        {
            superAdministrator:"최고 관리자",
            insuranceTean:"교보생명팀",
            operationManager:"운영 관리자"

        }
    ]
    const accesData=[
        {
            adminMain:"관리자 메인",
            entryTicketManagement:"포인트/응모권 관리",
            membershipManagement:"회원 관리",
            receiptManagement:"영수증 관리",
            productManagement:"상품 관리",
            insuranceManagement:"보험 관리",
            settlementManagement:"정산 및 권한 관리",
            adManagement:"광고 관리",
            gameManagement:"게임 관리",
            notifactionManagement:"게시판/알림 관리"
        }
    ]
    const [selectedCheckboxes, setSelectedCheckboxes] = useState<{ [key: string]: boolean }>(
        Object.fromEntries(
          Object.keys(accesData[0]).map(key => [key, false]) 
        )
      );
    
      const handleCheckboxChange = (key: string, checked: boolean) => {
        setSelectedCheckboxes((prev) => ({
          ...prev,
          [key]: checked, 
        }));
      };
  return (
    <section>
    <CommonHeader title='상품 관리 '/>
    <div className="flex items-center mt-10 gap-10">
        <div>
        <div
    className="flex flex-col items-center py-10 px-10
     bg-white w-[392px] h-[756px] rounded-[20px]"
  >
    <div className="border-t-1 border-b-1 border-[#42A8FD] bo px-32 py-3 bg-[#E0F1FF]">
      <p className=" text-base font-normal text-[#42A8FD] whitespace-nowrap">권한 그룹명</p>
    </div>
    {groupNameData.map((group, groupIndex) => (
      <div key={groupIndex} className="flex flex-col items-center justify-center">
        {Object.entries(group).map(([key, value], entryIndex) => (
          <div
            key={key}
            className={`border-t-1 border-b-1 border-[#CFD4DA] px-32 py-3 ${
              entryIndex % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F3F4F6]"
            }` }
          >
            <p className="text-mainBlack whitespace-nowrap">{value}</p>
          </div>
        ))}
      </div>
    ))}
  </div>
  <div className='flex items-center justify-end mt-5'>
    <Button className='py-3 px-5 bg-[#353A46] text-white'>추가</Button>
  </div>
        </div>
 <div> <div className="py-10 px-10 bg-white w-[392px] h-[756px] rounded-[20px]">
  <div className="border-t-1 border-b-1 border-[#42A8FD] bo px-32 py-3 bg-[#E0F1FF]">
      <p className=" text-base font-normal text-[#42A8FD] whitespace-nowrap">접근 허용</p>
    </div>
    {accesData.map((access, index) => (
      <div key={index} className="flex flex-col items-center justify-center w-full">
        {Object.entries(access).map(([key, value], idx) => (
          <div
            key={key}
            className={` flex gap-6 px-32 py-3 ${
              idx % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F3F4F6]'
            } w-full`}
          >
             <Checkbox
             
                isSelected={selectedCheckboxes[key] || false} 
                onChange={(e) => handleCheckboxChange(key, e.target.checked)} 
                color="success"
              >
              </Checkbox>
            <p className="text-mainBlack whitespace-nowrap">{value}</p>
          </div>
        ))}
      </div>
    ))}

  </div>
  <div className='flex items-center justify-end mt-5'>
    <Button className='py-3 px-5 bg-[#353A46] text-white'>설정</Button>
  </div>
  </div>
 
</div>

    </section>
  )
}

export default page