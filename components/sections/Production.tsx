"use client";
import gsap from "gsap";
import { ContextSafeFunc, useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import { Inter } from "next/font/google";

const InterFont = Inter({
  weight: "600",
});

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);

export default function Production() {
  // const container = useRef(null);

  const { contextSafe } = useGSAP(() => {
    const SplitedText = new SplitText(".prodText", {
      type: "lines",
      mask: "lines",
    });
    gsap.set(".popup", {
      opacity: 0,
      autoAlpha: 0,
    });

    const productionTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".prod-container",
        start: "top 80%",
        end: "center 60%",
        scrub: 3,
        markers: true,
      },
    });

    productionTl.from(SplitedText.lines, {
      duration: 5,
      yPercent: 100,
      opacity: 0,
      stagger: 2,
      ease: "expo.inOut",
    });
  });

  const popUpAnimation = contextSafe(() => {
    gsap.to(".popup", {
      opacity: 1,
      autoAlpha: 1,
    });
  });
  const inversePopupAnimation = contextSafe(() => {
    gsap.to(".popup", {
      opacity: 0,
    });
  });
  return (
    <section className="prod-container relative w-full  justify-around items-center overflow-hidden">
      <article className="py-24 px-5 bg-pinky ">
        {/* <Image
        className="prod-img md:float-left  rounded-2xl w-full"
        id="prod-img"
        src={"/img/mae-mu.jpg"}
        width={200}
        height={200}
        alt="bakery image"
      /> */}
        <Image
          className="popup absolute left-1/6 top-0 opacity-0 z-50"
          src={"/img/heather-barnes.jpg"}
          alt="bakery"
          width={300}
          height={600}
        />
        <div
          className={`${InterFont.className} text-cake prodText text-4xl/tight lg:text-5xl/tight py-5 text-center flex flex-col gap-20`}
        >
          <div
            onMouseEnter={popUpAnimation}
            onMouseLeave={inversePopupAnimation}
          >
            Bake-Off Bonanza
          </div>
          <div>Sweet Sensations</div>
          <div>Taste of the Oven</div>
          <div>Baked Bliss</div>
          <div>Cookie Connoisseur Challenge</div>
        </div>
      </article>
    </section>
  );
}
