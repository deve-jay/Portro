//import gsap and useGSAp hook
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".h-28", {
      duration: 1,
      y: -100,
      ease: "power3.out",
      stagger: 0.05,
      delay: 0.5,
      opacity: 0,
    });
    tl.to(".h-28", {
      duration: 0.5,
      y: 100,
    });
    tl.from(".h-28", {
      duration: 1,
      y: 100,
      ease: "power3.out",
      delay: -0.5,
      opacity: 0,
    });
    tl.to(".h-28", {
      duration: 2.5,
      zoom: 3,
      y: -100,
      opacity: 0,
    });
    tl.to(".h-28", {
      duration: 2,
      zoom: 12,
      y: 100,
      opacity: 0,
    });
  });

  return (
    <div className="flex h-[100vh] w-full items-center justify-center">
      <div className="h-28 w-[40vw] rounded-lg bg-white/5 backdrop-blur-lg backdrop-filter"></div>
    </div>
  );
};

export default Navbar;
