"use client";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Production from "@/components/sections/Production";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  useGSAP(() => {
    ScrollSmoother.create({
      content: "#smooth-content",
      wrapper: "#smooth-wrapper",
      smooth: 3,
      effects: true,
    });
  });
  return (
    <main id="smooth-wrapper" className="overflow-hidden">
      <section id="smooth-content">
        <Header />
        <Hero />
        <Production />
      </section>
    </main>
  );
}
