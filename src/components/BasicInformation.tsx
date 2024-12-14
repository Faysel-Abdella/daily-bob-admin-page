'use client';
// just tets

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
  Button,
} from '@nextui-org/react';

import InputWithLabel from './InputWithLabel';

const BasicInformation = () => {
  const {
    isOpen: isDeleteBtn,
    onOpen: onDeleteBtn,
    onOpenChange: onDeleteBtnChange,
  } = useDisclosure();
  return (
    <section className='mt-8'>
      <main className='bg-mainWhite p-10 rounded-[20px]'>
        <div className='flex items-center gap-[60px]'>
          <InputWithLabel
            label='닉네임'
            defaultValue='닉네임'
            labelStyles='font-bold font-base w-[120px]'
            inputStyles='w-[310px]'
          />
          <div className='flex items-center'>
            <h3 className='font-bold text-mainBlack text-base w-[120px]'>
              로그인 유형
            </h3>
            <p className='font-medium text-[14px] text-mainGray'>로그인 유형</p>
          </div>
        </div>

        <div className='mt-6 flex items-center gap-[60px]'>
          <div className='flex items-center'>
            <h3 className='font-bold text-mainBlack text-base w-[120px]'>
              가입일
            </h3>
            <p className='w-[310px] font-medium text-[14px] text-mainGray'>
              YYYY-MM-DD{' '}
            </p>
          </div>

          <InputWithLabel
            label='포인트'
            defaultValue='1000'
            labelStyles='font-bold font-base w-[120px]'
            inputStyles='w-[310px]'
          />
        </div>

        <div className='my-8 w-full h-[1px] bg-grayBorder'></div>

        <div className='flex items-center gap-[60px]'>
          <div className='flex items-center'>
            <h3 className='font-bold text-mainBlack text-base w-[120px]'>
              관심 발달영역
            </h3>
            <p className='w-[310px] font-medium text-[14px] text-mainGray'>
              사회성, 언어
            </p>
          </div>
          <div className='flex items-center'>
            <h3 className='font-bold text-mainBlack text-base w-[120px]'>
              관심 연령
            </h3>
            <p className='w-[310px] font-medium text-[14px] text-mainGray'>
              2세, 4세
            </p>
          </div>
        </div>

        <div className='mt-8 flex'>
          <h3 className='font-bold text-mainBlack text-base w-[120px]'>
            로그인 유형
          </h3>
          <div>
            <table>
              <tbody>
                <tr className='flex items-center gap-6'>
                  <td className='font-medium text-mainGray text-base'>아이1</td>
                  <td className='font-medium text-mainGray text-base'>
                    2020.01.01
                  </td>
                  <td className='font-medium text-mainGray text-base'>여아</td>
                </tr>
                <tr className='flex items-center gap-6 pt-6'>
                  <td className='font-medium text-mainGray text-base'>아이2</td>
                  <td className='font-medium text-mainGray text-base'>
                    2023.01.01
                  </td>
                  <td className='font-medium text-mainGray text-base'>남아</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <div className='mt-10 flex justify-center items-center gap-5'>
        <Button className='py-[10px] px-[40px] bg-mainBlack rounded-[5px] text-mainWhite'>
          수정
        </Button>
        <Button
          className='py-[10px] px-[40px] bg-mainGray rounded-[5px] text-mainWhite'
          onClick={onDeleteBtn}
        >
          삭제
        </Button>
      </div>

      <Modal
        isOpen={isDeleteBtn}
        placement='center'
        onOpenChange={onDeleteBtnChange}
        hideCloseButton
        classNames={{
          base: [
            'w-[350px] p-0 flex justify-center items-center border-t-[28px] border-[#F05858]',
          ],
          body: ['p-0 flex justify-center items-center'],
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className='flex flex-col justify-center items-center'>
                  <h2 className='mt-5 font-bold text-[20px] text-mainBlack text-center'>
                    삭제할까요?
                  </h2>
                  <p className='mt-5 text-center font-normal text-[14px] text-mainGray'>
                    삭제하면 되돌릴 수 없어요
                  </p>
                </div>

                <div className='mt-7 flex justify-center items-center gap-4'>
                  <Button
                    className='py-[12px] px-[50px] rounded-[10px] bg-[#F5F6F8] font-bold text-base'
                    onClick={() => {
                      onDeleteBtnChange();
                    }}
                  >
                    취소
                  </Button>
                  <Button
                    className='py-[12px] px-[50px] rounded-[10px] bg-[#F5F6F8] font-bold text-base'
                    onClick={() => {
                      onDeleteBtnChange();
                    }}
                  >
                    삭제
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

export default BasicInformation;
