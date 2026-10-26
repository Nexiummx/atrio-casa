import { useRef } from "react";
import { AtrioHero, CloseCta, MaterialsIndex, ProcessLine, ProjectsReel } from "../components/home/HomeApple";
import { SunScene } from "../components/home/SunScene";
import { useReveal } from "../hooks/useReveal";

export function HomePage() {
  const root = useRef<HTMLDivElement>(null);
  useReveal(root);

  return (
    <div ref={root}>
      <AtrioHero />
      <SunScene />
      <ProjectsReel />
      <MaterialsIndex />
      <ProcessLine />
      <CloseCta />
    </div>
  );
}
