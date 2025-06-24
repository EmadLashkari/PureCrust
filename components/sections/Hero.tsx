"use client";

import gsap from "gsap";
import RandomSplit from "./elements/text/RandomSplite";
import FadeToUp from "./elements/text/FadeToUp";
import { useGSAP } from "@gsap/react";
import IntroImage from "./elements/image/IntroImg";
import { useMediaQuery } from "react-responsive";

export default function Hero() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const timeline = gsap.timeline();

  useGSAP(() => {
    if (isDesktopOrLaptop) {
      timeline.from(
        "#center-text",
        {
          xPercent: 50,
          // duration: 1,
          stagger: 2,
        },
        "-=1.5"
      );
    }
  }, {});

  return (
    <section className="flex flex-col lg:flex-row justify-between lg:justify-center items-center h-screen overflow-hidden">
      <div
        id="center-text"
        className="w-full flex flex-col h-full justify-around lg:justify-around  items-center"
      >
        <RandomSplit tl={timeline} />
        <FadeToUp tl={timeline} />
      </div>
      <IntroImage tl={timeline} />
    </section>
  );
}
