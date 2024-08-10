// import React from 'react'
import { useGSAP } from "@gsap/react";
import { ReactNode } from "react";
import gsap from "gsap";
import scribble from "../assets/scribble.png";

const Name = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".i", {
      duration: 1,
      x: 100,
      ease: "power3.out",
      stagger: 0.05,
      delay: 0.5,
      opacity: 0,
    });
    tl.to(".i", {
      duration: 0.5,
      y: -100,
    });
    tl.from(".af", {
      duration: 1,
      y: 100,
      x: 100,
      ease: "power3.out",
      delay: -0.5,
      opacity: 0,
    });
  });

  const breakword = (text: string): ReactNode => {
    let splilted = text.split("");
    console.log(splilted);
    splilted = splilted.map((letter, index): any => {
      return (
        <span key={index} className="i">
          {letter}
        </span>
      );
    });
    return splilted;
  };

  return (
    <>
      <div className="absolute my-0 h-[100vh] w-full overflow-hidden">
        <div className="w-ful text-valenica underline-white l absolute flex h-[100vh] w-[100vw] items-center justify-center text-[14rem] font-light italic text-white underline decoration-1 underline-offset-0">
          {breakword("Jay Sharma")}
        </div>
        <div className="af relative ml-10 flex h-[100vh] items-center justify-center pt-6 text-center text-[2rem] font-light italic text-white">
          FRONTEND DEVELOPER
        </div>
        </div>
    </>
  );
};

export default Name;
