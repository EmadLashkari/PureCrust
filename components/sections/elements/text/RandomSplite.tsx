"use client";
import { RandomSplitRef } from "@/components/types/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { forwardRef, useImperativeHandle } from "react";
// import { Alfa_Slab_One } from "next/font/google";

// const alphafont = Alfa_Slab_One({
//   weight: "400",
//   subsets: ["latin"],
// });

// Use forwardRef with proper typing
const RandomSplit = forwardRef<RandomSplitRef>((props, ref) => {
  useGSAP(() => {
    // Register SplitText plugin
    gsap.registerPlugin(SplitText);
  }, []);

  useImperativeHandle(ref, () => ({
    animate: () => {
      const tl = gsap.timeline();
      const splitIntroText = new SplitText(".intro-text", {
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

      return tl; // Return the timeline for sequencing
    },
  }));

  return (
    <h1
      className={`intro-text font-bold text-cake font-creamcakebold text-6xl lg:text-8xl w-[90%] lg:w-[80%] text-center tracking-widest`}
    >
      Discover joy Of Baking With PureCrust
    </h1>
  );
});

RandomSplit.displayName = "RandomSplit"; // Set display name for better debugging
export default RandomSplit;
