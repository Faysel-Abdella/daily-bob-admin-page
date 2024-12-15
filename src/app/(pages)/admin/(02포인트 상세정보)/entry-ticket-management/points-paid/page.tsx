'use client';
import CommonHeader from '@/components/CommonHeader';
import DropDownWithLabel from '@/components/DropDownWithLabel';
import InputWithLabel from '@/components/InputWithLabel';
import { Button } from '@nextui-org/react';

const Page = () => {
  const labelStyle = 'font-bold text-base text-mainBlack min-w-[90px]';
  // Dummy data for the dropdown
  const dropDownOptions1 = [
    { key: 'option1', label: '전체 회원' },
    { key: 'option2', label: '전체 회원' },
    { key: 'option3', label: '전체 회원' },
  ];
  const dropDownOptions2 = [
    { key: 'option1', label: '포인트' },
    { key: 'option2', label: '포인트' },
    { key: 'option3', label: '포인트' },
  ];
  const dropDownOptions3 = [
    { key: 'option1', label: '눈치 게임 참여' },
    { key: 'option2', label: '눈치 게임 참여' },
    { key: 'option3', label: '눈치 게임 참여' },
  ];

  return (
    <section>
      <CommonHeader title='포인트 지급' />
      <div className='bg-white py-5 px-10 rounded-[20px] w-full'>
        <div className='flex items-center justify-between w-full'>
          <div className='w-[45%]'>
            <DropDownWithLabel
              title='대상 회원'
              options={dropDownOptions1}
              defaultSelectedKeys='option1'
              titleStyles={labelStyle}
              selectStyles='w-full'
              insideStyles='w-full'
            />
          </div>

          <div className='flex items-center justify-center gap-4 w-[45%]'>
            <div className='w-full'>
              <InputWithLabel label='대상 회원' labelStyles={labelStyle} />
            </div>

            <Button className='bg-mainBlack text-white px-5 py-3 rounded-md'>
              검색
            </Button>
          </div>
        </div>
        <div className='flex items-center justify-between w-full mt-6'>
          <div className='w-[45%]'>
            <DropDownWithLabel
              title='지급 구분'
              options={dropDownOptions2}
              defaultSelectedKeys='option1'
              titleStyles={labelStyle}
              selectStyles='w-full'
              insideStyles='w-full'
            />
          </div>
          <div className='w-[45%]'>
            <DropDownWithLabel
              title='지급 명목'
              options={dropDownOptions3}
              defaultSelectedKeys='option1'
              titleStyles={labelStyle}
              selectStyles='w-full'
              insideStyles='w-full'
            />
          </div>
        </div>
        <div className='flex items-center mt-10'>
          <div className='w-1/3'>
            <InputWithLabel label='지급 내용' labelStyles={labelStyle} />
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center mt-8'>
        <Button className='bg-mainBlack text-white px-5 py-3 rounded-md'>
          확인
        </Button>
      </div>
    </section>
  );
};

export default Page;
