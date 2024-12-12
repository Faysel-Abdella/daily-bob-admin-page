"use client";

import { usePathname } from "next/navigation";

import sideBarContents from "../data/sideBar";

import Navigation from "@/components/Navigation";
import Image from "next/image";
import logo from "@/assets/logo.svg";

const SideBar = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <section className="flex bg-[#F3F3F3]">
      <article className="min-h-screen min-w-[330px] bg-white rounded-tr-[30px]  ">
        <div className="flex justify-center items-center pt-[55px]">
          <div className=" flex justify-center items-center w-[210px] h-[55px] ">
            <Image src={logo} alt="Our logo - Great Meat" />
          </div>
        </div>

        <section className="pt-16 pl-10  flex justify-start items-center ">
          <section>
            {sideBarContents.map((item) => (
              <Navigation
                key={item.order}
                icon={item.icon}
                activeIcon={item.activeIcon}
                init={item.init}
                firstRoute={item.firstRoute}
                route={item.firstRoute}
                mainTitle={item.mainTitle}
                subTitles={item.subTitles}
                order={item.order}
              />
            ))}
          </section>
        </section>
      </article>

      {/* <section className="w-full pl-9 py-12 pr-6">{children}</section> */}

      <section className="max-w-[1350px] w-[1350px]  pl-9 py-12 pr-6">
        {children}
      </section>
    </section>
  );
};

export default SideBar;
