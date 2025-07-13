"use client";
import { FadeToUpRef } from "@/components/types/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { forwardRef, useImperativeHandle } from "react";

gsap.registerPlugin(useGSAP, SplitText);

const FadeToUp = forwardRef<FadeToUpRef>((props, ref) => {
  useGSAP(() => {
    // Register SplitText plugin
    gsap.registerPlugin(SplitText);
  }, []);

  useImperativeHandle(ref, () => ({
    animate: () => {
      const splitIntroText = SplitText.create(".text", {
        type: "words, lines",
        mask: "lines",
      });
      const tl = gsap.timeline();
      tl.from(splitIntroText.lines, {
        duration: 1,
        yPercent: 100,
        opacity: 0,
        stagger: 0,
        ease: "expo.out",
      });

      return tl; // Return the timeline for sequencing
    },
  }));

  return (
    <h2 className="text text-center px-8 text-cake lg:w-[50%]">
      Our handcrafted breads, pastries, and desserts are made with organic,
      locally sourced ingredients, bringing warmth and flavor to every bite.
    </h2>
  );
});

FadeToUp.displayName = "FadeToUp";
export default FadeToUp;
