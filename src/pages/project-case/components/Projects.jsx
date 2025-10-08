import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProjectGrid } from "@/pages/home/components/ProjectGrid";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

const projectsData = [
  {
    id: 1,
    title: "E-commerce platform rebuild",
    description: "Streamlined online shopping experience for retail business",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "E-commerce website dashboard",
    tags: ["E-commerce", "Responsive design", "Performance"],
    link: "#project-1",
  },
  {
    id: 2,
    title: "Healthcare mobile app",
    description:
      "Secure patient management system with real-time consultation features",
    image:
      "https://images.unsplash.com/photo-1518386180376-b6ab2518e110?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Mobile phone showing healthcare application",
    tags: ["Healthcare", "Mobile app", "Telemedicine"],
    link: "#project-2",
  },
  {
    id: 3,
    title: "Financial tracking dashboard",
    description:
      "Advanced analytics platform for small business financial management",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b1ff8587?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Financial charts and graphs on a screen",
    tags: ["Fintech", "Dashboard", "Analytics"],
    link: "#project-3",
  },
];

export function Projects() {
  return (
    <section className="flex-center bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 text-center md:mb-18 lg:mb-20">
          <SectionHeader
            tagline="Projects"
            title="Our digital craftsmanship in action"
            description="Innovative solutions that drive business growth and user engagement"
            className="max-w-[768px]"
          />
        </div>

        <ProjectGrid />

        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Button
            title="View all"
            size="lg"
            className="hover:bg-brand-main h-auto w-max cursor-pointer rounded-full bg-transparent px-5 py-2.5 text-lg font-medium text-black shadow-none outline-2 outline-gray-600 hover:text-white"
          >
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
