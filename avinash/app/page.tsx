import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import TimelineFull from "@/components/TimelineFull";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import MainLogo from "@/components/ui/MainLogo";
import { SparklesCore } from "@/components/ui/Sparkles";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

const navItems = [
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
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
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
