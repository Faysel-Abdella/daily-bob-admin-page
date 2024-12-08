'use client'
import CommonHeader from '@/components/CommonHeader'
import DropDownWithLabel from '@/components/DropDownWithLabel'
import InputWithLabel from '@/components/InputWithLabel'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const page = () => {
    const labelStyle = "font-bold text-base text-mainBlack min-w-[90px]";
  const dropDownOptions = [
    { key: "option1", label: "전체 회원" },
    { key: "option2", label: "전체 회원" },
    { key: "option3", label: "전체 회원" },
  ];
  const defaultDropDown=dropDownOptions[0].key
  return (
    <section>
    <CommonHeader title='관리자 권한 관리'/>
    <header className= " bg-white py-10 px-10 rounded-[20px] ">
    <div className="flex items-center gap-16 w-full">
          <div className="w-full">
          <InputWithLabel label="이름" placeholder='전체 회원' labelStyles={labelStyle} />
          </div>
          
          <div className="flex items-center justify-center gap-4 w-full">
            <div className="w-full">
            <InputWithLabel label="ID" labelStyles={labelStyle} />
            </div>
            
            <Button className="bg-mainBlack text-white px-5 py-3">검색</Button>
          </div>
        </div>
        <div className="flex items-center gap-16 w-full mt-6">
          <div className="w-full">
          <InputWithLabel label="휴대폰 번호" placeholder='01011111111' labelStyles={labelStyle} />
          </div>
          <div className="w-full">
          <DropDownWithLabel
            title="권한"
            options={dropDownOptions}
            defaultSelectedKeys="option1"
           titleStyles={labelStyle}
           selectStyles="w-[370px]"
           // Default selected key
          />
          </div>
          </div>
          <div className="flex items-center gap-16 w-full mt-6">
          <div className="w-full">
          <InputWithLabel label="가입 일시" placeholder='2024-10-08 19:16:09' labelStyles={labelStyle} />
          </div>
          <div className="w-full flex items-center gap-4">
            <div className='w-full'>
            <InputWithLabel label="승인일시" placeholder='2024-10-08 19:16:09' labelStyles={labelStyle} />
            </div>
            <div className='py- px-10'></div>
          
          </div>
          </div>
      </header>
      <div className='flex items-center justify-center mt-11'>
        <Button className='py-3 px-7 bg-mainBlack text-white'>
            <Link href='/admin/Administrator/Administrator-information-management/1/1'>n확인</Link></Button>
      </div>
      </section>
  )
}

export default page