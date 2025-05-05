import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { MainInfo } from "@/components/MainInfo";
import { Collab } from "@/components/Collab";
import { NumbersGrid } from "@/components/NumbersGrid";
import { TechStack } from "@/components/TechStack";
import { WorkProcess } from "@/components/WorkProcess";
import { Testimonials } from "@/components/Testimonials";

import { scan } from "react-scan";
import { useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";

// Check for prod version to disable react-scan
if (typeof window !== "undefined" && import.meta.env.DEV) scan();

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const workRef = useRef<HTMLDivElement>(null);
  const testimRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const workDiv = workRef.current;
    const testimDiv = testimRef.current;
    if (!workDiv || !testimDiv) return;

    testimDiv.style.height = `${workDiv.offsetHeight}px`;
  }, []);

  return (
    <>
      {/* Add the **:rounded-lg class to check the rounded option */}
      <div className="flex flex-col min-h-screen items-center p-4 bg-background text-text-primary">
        <div className="grid gap-4 grid-cols-1 max-w-[2300px] md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <MainInfo />
            <Services />
            <NumbersGrid />
          </div>

          <div className="flex flex-col gap-4">
            <Projects />
            <TechStack />
            <Collab />
          </div>

          <div className="w-full flex gap-4 flex-col col-span-1 md:col-span-2 md:flex-row md:*:w-full lg:flex-col lg:col-span-1">
            <WorkProcess ref={workRef} />
            <Testimonials ref={testimRef} />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
