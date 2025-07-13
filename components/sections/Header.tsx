"use client";

import Image from "next/image";

import IconBtn from "../Button/IconBtn";

export default function Header() {
  return (
    <div className="w-full lg:fixed top-2 left-0 right-0 z-30 flex flex-row justify-between items-center">
      <section className="lg:pl-10">
        <Image
          src={"/PureCrustLogo.png"}
          width={200}
          height={150}
          alt="pure crust logo"
          className="w-32 h-16"
        />
      </section>
      <section className="flex flex-row justify-center items-center gap-2 pr-2">
        {/* <button className="border-cake border-2 px-3 py-2 ">en</button> */}
        <IconBtn>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
          </svg>
        </IconBtn>
      </section>
    </div>
  );
}
