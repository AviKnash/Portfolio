"use client";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Lenis from "lenis";
import dynamic from "next/dynamic";
import { useEffect, useMemo } from "react";

const Grid = dynamic(() => import("@/components/Grid"),{ssr});
const Hero = dynamic(() => import("@/components/Hero"));
const TimelineFull = dynamic(() => import("@/components/TimelineFull"));
const FloatingNav = dynamic(() =>
  import("@/components/ui/FloatingNavBar").then((mod) => mod.FloatingNav)
);
const MainLogo = dynamic(() => import("@/components/ui/MainLogo"));
const SparklesCore = dynamic(() =>
  import("@/components/ui/Sparkles").then((mod) => mod.SparklesCore)
);



export default function Home() {

  const navItems = useMemo(
    () => [
      {
        name: "Home",
        link: "/",
        icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: "About",
        link: "/about",
        icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: "Contact",
        link: "/contact",
        icon: (
          <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
      },
    ],
    []
  );

  useEffect(() => {
    const lenis = new Lenis();
    let ticking = false;

    function onScroll(event: any) {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          ticking = false;
        });
        ticking = true;
      }
    }

    lenis.on("scroll", onScroll);

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.off("scroll", onScroll);
    };
  }, []);

  return (
    <main className="relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <MainLogo />
      <div className="max-w-7xl w-full">
        <div className="w-full absolute inset-0 h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.4}
            maxSize={1.6}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#373531"
          />
        </div>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <TimelineFull />
      </div>
    </main>
  );
}
