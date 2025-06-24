"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

export default function RandomSplit({ tl }: { tl: GSAPTimeline }) {
  useGSAP(() => {
    const splitIntroText = SplitText.create(".intro-text", {
      type: "words, lines",
    });

    tl.from(splitIntroText.words, {
      y: -100,
      opacity: 0,
      rotation: "random(-80, 80)",
      duration: 0.7,
      ease: "back",
      stagger: 0.3,
    });
  });

  return (
    <h1 className="intro-text font-bold text-cake font-creamcakebold text-6xl lg:text-8xl w-[90%] lg:w-[80%]  text-center tracking-widest ">
      Discover joy Of Baking With PureCrust
    </h1>
  );
}
