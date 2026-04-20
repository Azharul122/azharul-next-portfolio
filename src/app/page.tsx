import dynamic from "next/dynamic";
import Contact from "@/components/contact/Contact";
import ScrollHandler from "@/components/ScrollHandler";

const Hero = dynamic(() => import("@/components/Hero/Hero"), {
  ssr: true,
});

const Experience = dynamic(() => import("@/components/Experience/Experience"), {
  ssr: false,
});

const Tech = dynamic(() => import("@/components/teck/Tech"), {
  ssr: false,
});

const ProjectTwo = dynamic(() => import("@/components/Projects/ProjectTwo"), {
  ssr: false,
});

const Education = dynamic(() => import("@/components/education/Education"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="container mx-auto ">
      <ScrollHandler />
      <Hero />
      <Experience />
      <Tech />
      <ProjectTwo />
      <Education />
      <Contact />
    </div>
  );
}