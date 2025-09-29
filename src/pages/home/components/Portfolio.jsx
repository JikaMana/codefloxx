"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { ProjectGrid } from "./ProjectGrid";

export function Portfolio() {
  return (
    <section className="flex-center px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <SectionHeader
            tagline="Portfolio"
            title="Our recent digital projects"
            description="Showcasing innovative solutions that drive business transformation."
            showCta={false}
            className="max-w-[768px]"
          />
        </div>
        <ProjectGrid />

        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Button
            title="View all"
            size="lg"
            className="hover:bg-brand-main h-auto w-max rounded-full bg-transparent px-5 py-2.5 text-lg font-medium text-black shadow-none outline-2 outline-gray-600 hover:text-white"
          >
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
