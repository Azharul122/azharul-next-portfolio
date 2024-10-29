import Tech from "@/components/teck/Tech";
import Hero from "../components/Hero/Hero";
import ProjectTwo from "@/components/Projects/ProjectTwo";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/contact/Contact";


export default function Home() {
  return (
    
    <div className="container mx-auto">
        <Hero />
        <Tech/>
        <ProjectTwo/>
        <Experience/>
        <Contact/>
    </div>
   
  );
}
