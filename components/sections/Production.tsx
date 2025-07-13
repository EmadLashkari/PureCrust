"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";

import SimpleBtn from "../Button/SimpleBtn";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);

export default function Production() {
  // const container = useRef(null);

  useGSAP(() => {
    const SplitedText = new SplitText(".textTarget", {
      type: "chars, words",
    });

    const productionTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".prod-container",
        start: "top 70%",
        end: "+=2000",
        scrub: 5,
        // markers: true,
      },
    });
    productionTl.from(".prod-img", {
      yPercent: 500,
      stagger: {
        each: 1,
        from: "random",
      },
    });
    productionTl.from(SplitedText.chars, {
      duration: 3,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.05,
    });
  });
  return (
    <section className="prod-container relative w-full h-screen flex flex-col justify-around items-center overflow-hidden">
      <h2>How Bakery Should be Today</h2>
      <SimpleBtn title="About" />

      {/* <div
        id="img-content"
        className="w-full flex flex-row justify-around items-center"
      > */}
      <Image
        className="prod-img absolute top-[10%] left-[10%]"
        id="prod-img"
        src={"/img/mae-mu.jpg"}
        width={200}
        height={200}
        alt="bakery image"
      />
      <Image
        className="prod-img absolute top-[-20%] left-[40%]"
        id="prod-img"
        src={"/img/DecorativeArtisanBreads.jpeg"}
        width={200}
        height={200}
        alt="bakery image"
      />
      <Image
        className="prod-img absolute top-[-30%] left-[70%]"
        id="prod-img"
        src={"/img/heather-barnes.jpg"}
        width={200}
        height={200}
        alt="bakery image"
      />
      {/* </div> */}
    </section>
  );
}

{
  /* <div>
        <h2 className="textTarget text-3xl text-cake">
          We believe good food brings people together.
        </h2>
        <h2>
          We use organic flour, local honey, and other natural ingredients
        </h2>
        <h2>That’s why we bake with heart and keep things eco-friendly</h2>
      </div> */
}
