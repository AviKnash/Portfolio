"use client";
import React, { useEffect, useRef } from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let rafId: number | null = null;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animateSpotlight = () => {
      currentX = lerp(currentX, targetX, 0.1);
      currentY = lerp(currentY, targetY, 0.1);

      hero.style.setProperty("--x", `${currentX}px`);
      hero.style.setProperty("--y", `${currentY}px`);

      rafId = requestAnimationFrame(animateSpotlight);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    document.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(animateSpotlight);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={heroRef} className="pb-20 pt-36 h-screen spotlight-hero">
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-lightup text-[40px] md:text-5xl lg:text-6xl"
            words="It's all about light's!"
          />
          {/* <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Avinash
          </p> */}
          {/* <TextHoverEffect  text="AVINASH"/> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
