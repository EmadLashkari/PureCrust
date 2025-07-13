"use client";

import { TransitionRef } from "@/components/types/types";
import { useGSAP } from "@gsap/react";
import { forwardRef, useImperativeHandle } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { Alfa_Slab_One } from "next/font/google";

const alphafont = Alfa_Slab_One({
  weight: "400",
});

const TransitionAnim = forwardRef<TransitionRef>((props, ref) => {
  useGSAP(() => {
    // Register SplitText plugin
    gsap.registerPlugin(SplitText);
  }, []);

  useImperativeHandle(ref, () => ({
    animate: () => {
      const firstMaskText = SplitText.create(".test", {
        type: "words, lines",
        mask: "lines",
      });
      console.log(firstMaskText);
      const tl = gsap.timeline({
        defaults: {
          delay: 0.5,
          stagger: 0,
          ease: "power1.in",
        },
      });
      tl.from(firstMaskText.lines[0], {
        delay: 0.1,
        xPercent: 100,
        opacity: 0,
        stagger: 0,
      });
      tl.from("#first-mask", {
        height: "100%",
      });
      tl.from(firstMaskText.lines[1], {
        delay: 0.1,
        yPercent: 100,
        opacity: 0,
        stagger: 0,
      });
      tl.from("#sec-mask", {
        height: "100%",
      });
      tl.from(firstMaskText.lines[2], {
        delay: 0.1,
        xPercent: -100,
        opacity: 0,
        stagger: 0,
      });
      tl.from("#third-mask", {
        height: "100%",
      });

      return tl;
    },
  }));

  return (
    <section
      className={`w-full h-screen absolute inset-0 ${alphafont.className}`}
    >
      <div
        id="first-mask"
        className="absolute z-50 w-full left-0 right-0 top-0  bg-yello"
      >
        <h2
          id="first-text"
          className="test text-4xl lg:text-9xl text-white absolute z-50 left-0 lg:left-10 bottom-10"
        >
          UNFORGATBLE
        </h2>
      </div>
      <div
        id="sec-mask"
        className="absolute z-40 w-full left-0 right-0 top-0  bg-cake"
      >
        <h2
          id="sec-text"
          className="test text-4xl lg:text-9xl text-white absolute z-50 left-0 lg:left-10 bottom-10"
        >
          DELISIOS
        </h2>
      </div>
      <div
        id="third-mask"
        className="absolute z-30 w-full left-0 right-0 top-0  bg-pinky"
      >
        <h2
          id="third-text"
          className=" test text-4xl lg:text-9xl text-white absolute z-50 left-0 lg:left-10 bottom-10"
        >
          AMAZING
        </h2>
      </div>
    </section>
  );
});

TransitionAnim.displayName = "TransitionAnim";
export default TransitionAnim;
