"use client";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import gsap from "gsap";
export default function IntroImage() {
  useGSAP(() => {
    gsap.set("#container", {
      xPercent: 100,
    });
    gsap.to("#container", {
      delay: 2,
      xPercent: 0,
    });
    gsap.from("#first-mask", {
      delay: 2.1,
      duration: 1.5,
      // borderRadius: "0% 30% 30% 0%",
      width: "100%",
      stagger: 0,
      ease: "back.inOut",
    });
    gsap.from("#sec-mask", {
      delay: 2.2,
      duration: 1.5,
      width: "100%",
      // borderRadius: "0% 20% 20% 0%",
      stagger: 0,
      ease: "back.inOut",
    });
    gsap.from("#third-mask", {
      delay: 2.3,
      duration: 1.5,
      width: "100%",
      stagger: 0,
      ease: "back.inOut",
    });
    gsap.from("#fade-img", {
      delay: 2.4,
      duration: 1,
      // scale: 0.97,
      stagger: 0,
      ease: "back.inOut",
      // filter: "blur(3px)",
    });
  }, {});

  return (
    <section id="container" className="relative w-full h-[45%] lg:h-full">
      <div
        id="first-mask"
        className="absolute z-50 h-full left-0 top-0 bottom-0  bg-yello"
      ></div>
      <div
        id="sec-mask"
        className="absolute z-40 h-full left-0 top-0 bottom-0  bg-cake"
      ></div>
      <div
        id="third-mask"
        className="absolute z-30 h-full left-0 top-0 bottom-0  bg-pinky"
      ></div>
      <div className="w-full h-auto md:w-auto md:h-full fade-img">
        <Image
          id="fade-img"
          alt="beautiful bake image"
          width={1200}
          height={1200}
          src={"/img/heather-ford.jpg"}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
