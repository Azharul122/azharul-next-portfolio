"use client";

import Tech from "@/components/teck/Tech";
import Hero from "../components/Hero/Hero";
import ProjectTwo from "@/components/Projects/ProjectTwo";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/contact/Contact";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Education from "@/components/education/Education";
import DemoOne from "@/components/sliders/DemoOne";

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
     {/* <DemoOne />  */}
      <Hero />
      <Experience />
      <Tech />
      <ProjectTwo />
      <Education />
      <Contact />


      
    </div>
  );
}



// ─────────────────────────────────────────────────────────────────────────────
// Usage Examples — All Motion Components
// Drop any block into your page as-is.
// ─────────────────────────────────────────────────────────────────────────────

// "use client";

// import {
//   FadeIn,
//   SlideIn,
//   StaggerList,
//   SplitText,
//   TypewriterText,
//   CountUp,
//   ScaleIn,
//   BlurReveal,
//   RotateIn,
//   TextHighlight,
//   HoverCard,
//   Marquee,
//   Parallax,
//   RevealOnScroll,
//   MagneticButton,
//   SectionSlider,
//   TabSlider,
//   AccordionItem,
// } from "@/utils/motion/index";

// // ─────────────────────────────────────────────
// // 1. FadeIn
// // ─────────────────────────────────────────────
// export function FadeInExample() {
//   return (
//     <FadeIn delay={0.2} duration={0.8}>
//       <p>This paragraph fades in when it enters the viewport.</p>
//     </FadeIn>
//   );
// }

// // ─────────────────────────────────────────────
// // 2. SlideIn
// // ─────────────────────────────────────────────
// export function SlideInExample() {
//   return (
//     <>
//       <SlideIn direction="up">
//         <h2>Slides up from below</h2>
//       </SlideIn>

//       <SlideIn direction="left" distance={80} delay={0.2}>
//         <p>Slides in from the right side with extra distance.</p>
//       </SlideIn>

//       <SlideIn direction="right" delay={0.4} once={false}>
//         <p>Re-animates every time you scroll past it.</p>
//       </SlideIn>
//     </>
//   );
// }

// // ─────────────────────────────────────────────
// // 3. StaggerList — drop effect, delay 0.3 → 0.4 → 0.5 …
// // ─────────────────────────────────────────────
// export function StaggerListExample() {
//   const items = ["Dashboard", "Analytics", "Settings", "Profile", "Billing"];

//   return (
//     // as="ul" renders the wrapper as <ul>, each child gets its own drop delay
//     <StaggerList
//       as="ul"
//       baseDelay={0.3}
//       delayStep={0.1}
//       dropDistance={60}
//       style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}
//     >
//       {items.map((item) => (
//         <li
//           key={item}
//           style={{ padding: "14px 20px", background: "#f8fafc", borderRadius: 10, fontWeight: 500 }}
//         >
//           {item}
//         </li>
//       ))}
//     </StaggerList>
//   );
// }

// // ─────────────────────────────────────────────
// // 4. SplitText
// // ─────────────────────────────────────────────
// export function SplitTextExample() {
//   return (
//     <>
//       {/* Animate word by word */}
//       <SplitText
//         text="Build beautiful interfaces faster."
//         by="word"
//         stagger={0.06}
//         as="h1"
//         style={{ fontSize: 36, fontWeight: 700 }}
//       />

//       {/* Animate character by character */}
//       <SplitText
//         text="LOADING"
//         by="char"
//         stagger={0.04}
//         delay={0.5}
//         style={{ fontSize: 48, fontWeight: 800, letterSpacing: "0.1em" }}
//       />
//     </>
//   );
// }

// // ─────────────────────────────────────────────
// // 5. TypewriterText
// // ─────────────────────────────────────────────
// export function TypewriterTextExample() {
//   return (
//     <>
//       {/* Inline span inside a heading */}
//       <h2 style={{ fontSize: 28, fontWeight: 700 }}>
//         Hello,{" "}
//         <TypewriterText
//           text="I am Claude."
//           speed={60}
//           cursor={true}
//           as="span"
//         />
//       </h2>

//       {/* Monospace block, no cursor */}
//       <TypewriterText
//         text="npm install framer-motion"
//         speed={40}
//         cursor={false}
//         delay={0.5}
//         as="p"
//         style={{ fontFamily: "monospace", fontSize: 16 }}
//       />
//     </>
//   );
// }

// // ─────────────────────────────────────────────
// // 6. CountUp
// // ─────────────────────────────────────────────
// export function CountUpExample() {
//   return (
//     <div style={{ display: "flex", gap: 40 }}>
//       <div>
//         <CountUp to={24800} duration={2} style={{ fontSize: 40, fontWeight: 700 }} />
//         <p style={{ color: "#64748b", fontSize: 13 }}>Monthly users</p>
//       </div>

//       <div>
//         <CountUp
//           prefix="$"
//           to={1.4}
//           decimals={1}
//           suffix="M"
//           duration={1.8}
//           delay={0.2}
//           style={{ fontSize: 40, fontWeight: 700 }}
//         />
//         <p style={{ color: "#64748b", fontSize: 13 }}>Revenue</p>
//       </div>

//       <div>
//         <CountUp to={99.9} decimals={1} suffix="%" duration={2.2} delay={0.4} style={{ fontSize: 40, fontWeight: 700 }} />
//         <p style={{ color: "#64748b", fontSize: 13 }}>Uptime</p>
//       </div>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────
// // 7. ScaleIn
// // ─────────────────────────────────────────────
// export function ScaleInExample() {
//   return (
//     <ScaleIn from={0.8} delay={0.1}>
//       <div style={{ padding: 32, background: "#f8fafc", borderRadius: 16, textAlign: "center" }}>
//         <p style={{ fontSize: 20, fontWeight: 600 }}>Card pops into view</p>
//       </div>
//     </ScaleIn>
//   );
// }

// // ─────────────────────────────────────────────
// // 8. BlurReveal
// // ─────────────────────────────────────────────
// export function BlurRevealExample() {
//   return (
//     <BlurReveal blurAmount={16} duration={0.9}>
//       <img
//         src="/hero.jpg"
//         alt="Hero"
//         style={{ width: "100%", borderRadius: 16 }}
//       />
//     </BlurReveal>
//   );
// }

// // ─────────────────────────────────────────────
// // 9. RotateIn
// // ─────────────────────────────────────────────
// export function RotateInExample() {
//   const words = ["Design.", "Build.", "Ship."];

//   return (
//     <div style={{ display: "flex", gap: 12 }}>
//       {words.map((word, i) => (
//         <RotateIn key={word} angle={-20} delay={i * 0.15}>
//           <span style={{ fontSize: 32, fontWeight: 700 }}>{word}</span>
//         </RotateIn>
//       ))}
//     </div>
//   );
// }

// // ─────────────────────────────────────────────
// // 10. TextHighlight
// // ─────────────────────────────────────────────
// export function TextHighlightExample() {
//   return (
//     <h2 style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.5 }}>
//       We help teams ship{" "}
//       <TextHighlight color="#fde047" delay={0.4}>
//         10× faster
//       </TextHighlight>{" "}
//       without the burnout.
//     </h2>
//   );
// }

// // ─────────────────────────────────────────────
// // 11. HoverCard
// // ─────────────────────────────────────────────
// export function HoverCardExample() {
//   const plans = [
//     { name: "Starter", price: "$9" },
//     { name: "Pro",     price: "$29" },
//     { name: "Team",    price: "$79" },
//   ];

//   return (
//     <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
//       {plans.map(({ name, price }) => (
//         <HoverCard
//           key={name}
//           lift={8}
//           scale={1.03}
//           style={{ padding: 24, background: "#fff", borderRadius: 14, border: "1px solid #e2e8f0" }}
//         >
//           <p style={{ fontWeight: 700, fontSize: 18 }}>{name}</p>
//           <p style={{ fontSize: 28, fontWeight: 800, color: "#6366f1" }}>{price}</p>
//           <p style={{ color: "#64748b", fontSize: 13 }}>per month</p>
//         </HoverCard>
//       ))}
//     </div>
//   );
// }

// // ─────────────────────────────────────────────
// // 12. Marquee
// // ─────────────────────────────────────────────
// const logos = ["Vercel", "Linear", "Notion", "Stripe", "Figma", "Loom", "Slack"];

// export function MarqueeExample() {
//   return (
//     <Marquee speed={30} gap={48} pauseOnHover>
//       {logos.map((name) => (
//         <span
//           key={name}
//           style={{ fontSize: 18, fontWeight: 600, color: "#94a3b8", whiteSpace: "nowrap" }}
//         >
//           {name}
//         </span>
//       ))}
//     </Marquee>
//   );
// }

// // ─────────────────────────────────────────────
// // 13. Parallax
// // ─────────────────────────────────────────────
// export function ParallaxExample() {
//   return (
//     <div style={{ position: "relative", height: 400, overflow: "hidden", borderRadius: 16 }}>
//       {/* Background moves slower than scroll */}
//       <Parallax speed={0.4} style={{ position: "absolute", inset: 0 }}>
//         <img
//           src="/background.jpg"
//           alt=""
//           style={{ width: "100%", height: "120%", objectFit: "cover" }}
//         />
//       </Parallax>

//       {/* Foreground text */}
//       <div style={{ position: "relative", zIndex: 1, padding: 40 }}>
//         <h2 style={{ color: "white", fontSize: 36, fontWeight: 700 }}>Hero Section</h2>
//       </div>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────
// // 14. RevealOnScroll
// // ─────────────────────────────────────────────
// export function RevealOnScrollExample() {
//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
//       {["Feature 1", "Feature 2", "Feature 3"].map((label) => (
//         <RevealOnScroll key={label} distance={50}>
//           <div style={{ padding: 32, background: "#f8fafc", borderRadius: 16 }}>
//             <h3 style={{ fontWeight: 600 }}>{label}</h3>
//             <p style={{ color: "#64748b" }}>Linked to scroll progress — no spring, just pure scroll tracking.</p>
//           </div>
//         </RevealOnScroll>
//       ))}
//     </div>
//   );
// }

// // ─────────────────────────────────────────────
// // 15. MagneticButton
// // ─────────────────────────────────────────────
// export function MagneticButtonExample() {
//   return (
//     <div style={{ display: "flex", gap: 16 }}>
//       <MagneticButton strength={0.4}>
//         <button
//           style={{
//             padding: "14px 32px",
//             background: "#6366f1",
//             color: "white",
//             border: "none",
//             borderRadius: 10,
//             fontSize: 16,
//             fontWeight: 600,
//             cursor: "pointer",
//           }}
//         >
//           Get started
//         </button>
//       </MagneticButton>

//       <MagneticButton strength={0.3}>
//         <button
//           style={{
//             padding: "14px 32px",
//             background: "transparent",
//             color: "#6366f1",
//             border: "1.5px solid #6366f1",
//             borderRadius: 10,
//             fontSize: 16,
//             fontWeight: 600,
//             cursor: "pointer",
//           }}
//         >
//           Learn more
//         </button>
//       </MagneticButton>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────
// // 16. SectionSlider
// // ─────────────────────────────────────────────
// function SlideContent({ bg, title, sub }: { bg: string; title: string; sub: string }) {
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         background: bg,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         color: "white",
//         gap: 8,
//         borderRadius: 12,
//       }}
//     >
//       <p style={{ fontSize: 22, fontWeight: 700 }}>{title}</p>
//       <p style={{ fontSize: 14, opacity: 0.8 }}>{sub}</p>
//     </div>
//   );
// }

// export function SectionSliderExample() {
//   return (
//     <SectionSlider
//       height={300}
//       autoplay={3000}
//       transitionType="slide"   // "slide" | "fade" | "scale"
//       showDots
//       showArrows
//       sections={[
//         <SlideContent bg="#6366f1" title="Slide One"   sub="Drag or swipe" />,
//         <SlideContent bg="#0ea5e9" title="Slide Two"   sub="Auto-advances every 3s" />,
//         <SlideContent bg="#10b981" title="Slide Three" sub="3 transition types" />,
//         <SlideContent bg="#f59e0b" title="Slide Four"  sub="Dot + arrow navigation" />,
//       ]}
//     />
//   );
// }

// // ─────────────────────────────────────────────
// // 17. TabSlider
// // ─────────────────────────────────────────────
// export function TabSliderExample() {
//   return (
//     <TabSlider
//       defaultTab={0}
//       tabs={[
//         {
//           label: "Overview",
//           content: (
//             <p style={{ color: "#475569", lineHeight: 1.7 }}>
//               Get a bird's-eye view of your project status and recent activity.
//             </p>
//           ),
//         },
//         {
//           label: "Analytics",
//           content: (
//             <p style={{ color: "#475569", lineHeight: 1.7 }}>
//               Deep-dive into traffic, conversions and revenue trends over time.
//             </p>
//           ),
//         },
//         {
//           label: "Settings",
//           content: (
//             <p style={{ color: "#475569", lineHeight: 1.7 }}>
//               Manage your account, integrations and notification preferences.
//             </p>
//           ),
//         },
//       ]}
//     />
//   );
// }

// // ─────────────────────────────────────────────
// // 18. AccordionItem
// // ─────────────────────────────────────────────
// const faqs = [
//   {
//     q: "Do I need to install anything extra?",
//     a: "Just framer-motion. All components are self-contained — no other runtime dependency.",
//   },
//   {
//     q: "Can I customise the animation values?",
//     a: "Every prop has a sensible default but is fully overridable — delay, duration, distance, stagger and more.",
//   },
//   {
//     q: "Does it support dark mode?",
//     a: "Yes. Components use no hardcoded background colors so they inherit your theme automatically.",
//   },
// ];

// export function AccordionItemExample() {
//   return (
//     <div style={{ border: "1px solid #e2e8f0", borderRadius: 14, padding: "0 20px" }}>
//       {faqs.map(({ q, a }) => (
//         <AccordionItem key={q} title={q}>
//           {a}
//         </AccordionItem>
//       ))}
//     </div>
//   );
// }

// // ─────────────────────────────────────────────
// // All examples on one page
// // ─────────────────────────────────────────────
// function Section({ title, children }: { title: string; children: React.ReactNode }) {
//   return (
//     <section style={{ marginBottom: 64 }}>
//       <p
//         style={{
//           fontSize: 11,
//           fontWeight: 700,
//           textTransform: "uppercase",
//           letterSpacing: 1.5,
//           color: "#94a3b8",
//           marginBottom: 20,
//         }}
//       >
//         {title}
//       </p>
//       {children}
//     </section>
//   );
// }

// export default function UsagePage() {
//   return (
//     <main style={{ maxWidth: 720, margin: "0 auto", padding: "60px 24px", fontFamily: "system-ui, sans-serif" }}>
//       <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 4 }}>Motion Components — Usage</h1>
//       <p style={{ color: "#64748b", marginBottom: 56, fontSize: 15 }}>
//         All 18 components with real examples. Copy any block directly into your project.
//       </p>

//       <Section title="1. FadeIn"><FadeInExample /></Section>
//       <Section title="2. SlideIn"><SlideInExample /></Section>
//       <Section title="3. StaggerList"><StaggerListExample /></Section>
//       <Section title="4. SplitText"><SplitTextExample /></Section>
//       <Section title="5. TypewriterText"><TypewriterTextExample /></Section>
//       <Section title="6. CountUp"><CountUpExample /></Section>
//       <Section title="7. ScaleIn"><ScaleInExample /></Section>
//       <Section title="8. BlurReveal"><BlurRevealExample /></Section>
//       <Section title="9. RotateIn"><RotateInExample /></Section>
//       <Section title="10. TextHighlight"><TextHighlightExample /></Section>
//       <Section title="11. HoverCard"><HoverCardExample /></Section>
//       <Section title="12. Marquee"><MarqueeExample /></Section>
//       <Section title="13. Parallax"><ParallaxExample /></Section>
//       <Section title="14. RevealOnScroll"><RevealOnScrollExample /></Section>
//       <Section title="15. MagneticButton"><MagneticButtonExample /></Section>
//       <Section title="16. SectionSlider"><SectionSliderExample /></Section>
//       <Section title="17. TabSlider"><TabSliderExample /></Section>
//       <Section title="18. AccordionItem"><AccordionItemExample /></Section>
//     </main>
//   );
// }