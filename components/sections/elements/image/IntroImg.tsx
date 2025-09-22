"use client";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import gsap from "gsap";
export default function IntroImage() {
  useGSAP(() => {
    gsap.from(".fade-img", {
      width: "100%",
      yPercent: 100,
      height: 50,
      delay: 4.4,
      duration: 3,
      // scale: 0.97,
      stagger: 0,
      ease: "expo.out",
      // filter: "blur(3px)",
    });
  }, {});

  return (
    <section id="container" className="relative w-full h-[45%] lg:h-full">
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
