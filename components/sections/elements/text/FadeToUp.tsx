"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

export default function FadeToUp({ tl }: { tl: GSAPTimeline }) {
  useGSAP(() => {
    const splitIntroText = SplitText.create(".text", {
      type: "words, lines",
      mask: "lines",
    });

    tl.from(splitIntroText.lines, {
      duration: 1,
      yPercent: 100,
      opacity: 0,
      stagger: 0,
      ease: "expo.out",
    });
  });

  return (
    <h2 className="text text-center px-8 text-cake lg:w-[50%]">
      Our handcrafted breads, pastries, and desserts are made with organic,
      locally sourced ingredients, bringing warmth and flavor to every bite.
    </h2>
  );
}
