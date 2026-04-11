"use client";

import Tech from "@/components/teck/Tech";
import Hero from "../components/Hero/Hero";
import ProjectTwo from "@/components/Projects/ProjectTwo";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/contact/Contact";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Education from "@/components/education/Education";

export default function Home() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const sectionId = searchParams.get("sectionId");

    if (!sectionId) return;

    let attempts = 0;

    const tryScroll = () => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else if (attempts < 10) {
        attempts++;
        setTimeout(tryScroll, 100);
      }
    };

    setTimeout(tryScroll, 100);
  }, [searchParams]);
  return (
    <div className="container mx-auto">
      <Hero />
      <Experience />
      <Tech />
      <ProjectTwo />
      <Education />
      <Contact />
    </div>
  );
}
