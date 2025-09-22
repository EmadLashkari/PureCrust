"use client";

import gsap from "gsap";
import RandomSplit from "./elements/text/RandomSplite";
import FadeToUp from "./elements/text/FadeToUp";
import { useGSAP } from "@gsap/react";
import IntroImage from "./elements/image/IntroImg";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { FadeToUpRef, RandomSplitRef, TransitionRef } from "../types/types";
import TransitionAnim from "./elements/transition/Transition";

export default function Hero() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const randomSplitRef = useRef<RandomSplitRef>(null);
  const fadeToUpRef = useRef<FadeToUpRef>(null);
  const transitionRef = useRef<TransitionRef>(null);
  // const introImageRef = useRef(null);

  useGSAP(() => {
    if (isDesktopOrLaptop) {
      gsap.from("#center-text", {
        xPercent: 50,
        stagger: 2,
      });
    }

    const master = gsap.timeline();
    master
      .add(transitionRef.current!.animate())
      .add(randomSplitRef.current!.animate())
      .add(fadeToUpRef.current!.animate());
  }, {});

  return (
    <section className="ralative flex flex-col lg:flex-row justify-between lg:justify-center items-center h-screen overflow-hidden">
      <TransitionAnim ref={transitionRef} />
      <div
        id="center-text"
        className="w-full flex flex-col h-full justify-around lg:justify-around  items-center"
      >
        <RandomSplit ref={randomSplitRef} />
        <FadeToUp ref={fadeToUpRef} />
      </div>
      <IntroImage />
    </section>
  );
}
