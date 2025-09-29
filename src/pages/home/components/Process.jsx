"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Process() {
  const processStepsData = [
    {
      step: "1",
      src: "https://res.cloudinary.com/deid1vy94/image/upload/v1759146304/codefloxx-consultation_xh6lyo.webp",
      description:
        "Initial consultation to understand your business goals and technical requirements.",
      imageAlt: "Placeholder image 1",
    },
    {
      step: "2",
      src: "https://res.cloudinary.com/deid1vy94/image/upload/v1759105728/istockphoto-2169040419-612x612_cjkr4m.webp",
      description:
        "Detailed project planning and design phase with comprehensive technical specifications.",
      imageAlt: "Placeholder image 2",
    },
    {
      step: "3",
      src: "https://res.cloudinary.com/deid1vy94/image/upload/v1759147074/codefloxx-development-process_neizqu.webp",
      description:
        "Development and iterative testing to ensure high-quality, robust software solutions.",
      imageAlt: "Placeholder image 3",
    },
    {
      step: "4",
      src: "https://res.cloudinary.com/deid1vy94/image/upload/v1759146697/codefloxx-deployment-integration_vbcko2.webp",
      description:
        "Deployment and integration of your custom digital product into your existing infrastructure.",
      imageAlt: "Placeholder image 4",
    },
    {
      step: "5",
      src: "https://res.cloudinary.com/deid1vy94/image/upload/v1759105728/codefloxx-support-maintenance_z09ezp.avif",
      description:
        "Ongoing support and maintenance to optimize performance and address future needs.",
      imageAlt: "Placeholder image 5",
    },
  ];

  return (
    <section className="flex-center overflow-hidden bg-[#CCEAEC] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <SectionHeader
            tagline="Process"
            title="Our software development journey"
            description="A transparent and collaborative approach from initial consultation
              to final delivery."
            showCta={true}
            className="max-w-[768px]"
          />
        </div>
        <div className="relative grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-12 overflow-hidden sm:grid-cols-2 lg:flex">
          {processStepsData.map((item) => (
            <div
              key={item.step}
              className={`relative flex flex-col items-center text-center md:flex-1 md:px-4`}
            >
              <div className="mb-4 aspect-video overflow-hidden rounded-xl md:mb-8 md:w-full md:rounded-2xl lg:mb-6">
                <img
                  src={item.src}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="z-10 mt-4 hidden flex-col items-center self-stretch md:w-full md:flex-row md:justify-center md:self-auto lg:flex">
                <div className="absolute inset-x-0 -left-10 hidden h-1.5 w-[150%] bg-black md:block" />

                <div className="absolute size-5 flex-none rounded-full border-8 border-[#CCEAEC] bg-black p-2 md:absolute" />
              </div>

              <div className="md:text-center lg:mt-10">
                <h3 className="mb-2 text-3xl font-bold">{item.step}</h3>
                <p className="text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
