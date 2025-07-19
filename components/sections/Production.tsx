"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import { Inter } from "next/font/google";

const InterFont = Inter({
  weight: "600",
});

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);

export default function Production() {
  // const container = useRef(null);

  useGSAP(() => {
    const SplitedText = new SplitText(".prodText", {
      type: "lines",
      mask:"lines",
    });

    const productionTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".prod-container",
        start: "top 80%",
        end: "bottom bottom",
        scrub : 3,
        markers: true,
      },
    });
    
    productionTl.from(SplitedText.lines, {
      duration:5,
      yPercent: 100,
      opacity: 0,
        stagger: 2,
        ease: "expo.inOut",
    });
  });
  return (
    <section className="prod-container relative w-full  justify-around items-center overflow-hidden">
      <article className="pt-24 px-5 bg-pinky ">
        {/* <Image
        className="prod-img md:float-left  rounded-2xl w-full"
        id="prod-img"
        src={"/img/mae-mu.jpg"}
        width={200}
        height={200}
        alt="bakery image"
      /> */}
      <p className={`${InterFont.className} text-cake prodText text-4xl/tight lg:text-9xl/tight pt-5 text-center`}>Pure Crust is a charming bakery shop that delights customers with its artisanal approach to baking. Nestled in a cozy corner of the neighborhood, it offers a wide array of freshly baked goods, from crusty sourdough loaves to delicate pastries and mouthwatering cakes. </p>
      </article>
      </section>
  );
}
