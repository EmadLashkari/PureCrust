"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import { Inter } from "next/font/google";

const InterFont = Inter({
  weight: "600",
  subsets: ["latin"],
});

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);

const Products: { id: number; title: string; imgSrc: string }[] = [
  { id: 0, title: "Bake-Off Bonanza", imgSrc: "/img/mae-mu.jpg" },
  { id: 2, title: "Sweet Sensations", imgSrc: "/img/bake.png" },
  { id: 3, title: "Taste of the Oven", imgSrc: "/img/mae-mu.jpg" },
  { id: 4, title: "Baked Bliss", imgSrc: "/img/bake.png" },
  { id: 5, title: "Cookie Connoisseur Challenge", imgSrc: "/img/mae-mu.jpg" },
];

export default function Production() {
  // const container = useRef(null);

  const { contextSafe } = useGSAP(() => {
    const SplitedText = new SplitText(".prodText", {
      type: "lines",
      mask: "lines",
    });
    gsap.set(".img-init", {
      scale: 0,
      autoAlpha: 0,
      position: "fixed",
      top: 0,
      left: 0,
    });

    const productionTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".prod-container",
        start: "top 80%",
        end: "center 60%",
        scrub: 3,
        markers: false,
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

  const popUpAnimation = contextSafe(
    (index: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      console.log("animation played ", index, e);

      const setX = gsap.quickSetter(`.popup-${index}`, "x", "px");
      const setY = gsap.quickSetter(`.popup-${index}`, "y", "px");

      setX(e.pageX - 100);
      setY(e.pageY - 100);

      gsap.to(`.popup-${index}`, {
        autoAlpha: 1,
        scale: 1,
        opacity: 1,
        visibility: "visible",
      });
    }
  );
  const inversePopupAnimation = contextSafe((index: number) => {
    gsap.to(`.popup-${index}`, {
      opacity: 0,
      autoAlpha: 0,
      scale: 0,
    });
  });
  return (
    <section className="prod-container relative w-full  justify-around items-center overflow-hidden">
      <article className="py-24 px-5 bg-pinky ">
        {Products.map((item, index) => (
          <Image
            key={item.title}
            className={`img-init rounded-lg pointer-events-none popup-${index} z-50`}
            src={item.imgSrc}
            width={200}
            height={200}
            alt="bakery image"
          />
        ))}
        <div
          className={`${InterFont.className} text-cake prodText text-4xl/tight lg:text-5xl/tight py-5 text-center flex flex-col gap-10`}
        >
          {Products.map((item, index) => (
            <div
              className={`p-4`}
              key={item.title}
              onMouseEnter={(e) => popUpAnimation(index, e)}
              onMouseLeave={() => inversePopupAnimation(index)}
              onMouseMove={(e) => {
                gsap.to(`.popup-${index}`, {
                  x: e.pageX - 100,
                  y: e.pageY - 100,
                  duration: 2, // shorter duration makes it more responsive
                  ease: "power2.out",
                });
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
