import Image from "next/image";
import logo from "@/assets/logo.svg";
import { Button, Input } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import Link from "next/link";
const page = () => {
  return (
    <section className="min-h-lvh flex justify-center items-center font-noto">
      <main className="flex items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center">
          <Image src={logo} alt="Logo" />
          <h3 className="font-bold text-[24px] leading-[33px] tracking-[-2%] text-mainBlack">
            어드민 페이지
          </h3>
        </div>

        <div>
          <div>
            <label
              htmlFor="id"
              className="font-bold text-[16px] leading-[22px] tracking-[-2%] text-mainBlack "
            >
              이메일{" "}
              <span className="font-bold text-[16px] text-mainPurple">*</span>{" "}
            </label>
            <Input
              type="text"
              id="id"
              name="id"
              placeholder="아이디"
              className="mt-3 placeholder:text-mainPurple w-[413px] h-[44px] rounded-[5px]"
              classNames={{
                inputWrapper: "w-[413px] h-[44px] rounded-[5px]",
              }}
            />
          </div>
          <div className="mt-5">
            <label
              htmlFor="password"
              className="font-bold text-[16px] leading-[22px] tracking-[-2%] text-mainBlack "
            >
              비밀번호{" "}
              <span className="font-bold text-[16px] text-mainPurple">*</span>{" "}
            </label>
            <Input
              type="text"
              id="password"
              name="password"
              placeholder="비밀번호"
              className="mt-3 placeholder:text-mainPurple w-[413px]"
              classNames={{
                inputWrapper: "w-[413px] h-[44px] rounded-[5px]",
              }}
            />
          </div>

          <div className="mt-5">
            <Checkbox defaultSelected>아이디 저장</Checkbox>
          </div>

          <Link href="/admin/member-points-and-entry-tickets/member-points-and-entry-tickets-management">
            <Button className="mt-7 w-full rounded-[10px]  bg-mainPurple font-normal text-[16px] leading-[22px] text-mainWhite">
              로그인
            </Button>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default page;
