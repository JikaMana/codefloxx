import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RxChevronRight } from "react-icons/rx";

const tabHeaders = [
  {
    value: "tab-one",
    label: "Scalability",
  },
  {
    value: "tab-two",
    label: "Performance",
  },
  {
    value: "tab-three",
    label: "Innovation",
  },
];

const tabContentData = [
  {
    value: "tab-one",
    tagline: "Reliability",
    title: "Scalable Architecture",
    description:
      "We design systems that grow with your business, ensuring long-term performance and adaptability.",
    imageSrc:
      "https://res.cloudinary.com/deid1vy94/image/upload/v1759105730/scalable-architecture_mmifg1.avif",
    imageAlt: "Illustration representing Scalability",
    primaryCta: { title: "Details", variant: "outline" },
    secondaryCta: { title: "Learn more", variant: "link" },
  },
  {
    value: "tab-two",
    tagline: "Speed & Efficiency",
    title: "Optimized Performance",
    description:
      "Our focus on modern frameworks, clean code, and cloud optimization delivers lightning-fast, high-performing applications with minimal latency and superior user experience.",
    imageSrc:
      "https://res.cloudinary.com/deid1vy94/image/upload/v1759105727/photo-1717444308827-d0f206a4de1e_mcx1k3.avif",
    imageAlt: "Illustration representing Performance",
    primaryCta: { title: "Details", variant: "outline" },
    secondaryCta: { title: "Learn more", variant: "link" },
  },
  {
    value: "tab-three",
    tagline: "Future-Proofing",
    title: "Continuous Innovation",
    description:
      "We integrate the latest technologies, AI/ML tools, and design patterns to ensure your platform remains cutting-edge, keeping your business ahead of the competition.",
    imageSrc:
      "https://res.cloudinary.com/deid1vy94/image/upload/v1759145004/codefloxx-innovation_fzix9a.webp",
    imageAlt: "Illustration representing Innovation",
    primaryCta: { title: "Details", variant: "outline" },
    secondaryCta: { title: "Learn more", variant: "link" },
  },
];

export const ReasonsTabHeader = () => {
  return (
    <TabsList className="relative mb-12 flex w-screen flex-nowrap items-center gap-x-6 overflow-hidden overflow-x-auto bg-transparent px-[5vw] md:mb-16 md:w-auto md:max-w-full md:px-0">
      {tabHeaders.map((header) => (
        <TabsTrigger
          key={header.value}
          value={header.value}
          className="text-muted-foreground data-[state=active]:text-foreground data-[state=active]:border-brand-shade-dark w-full rounded-none border-0 border-t-4 bg-transparent px-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=inactive]:border-transparent md:py-2"
        >
          {header.label}
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

export const ReasonsTabContent = () => {
  return (
    <>
      {tabContentData.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className="data-[state=active]:animate-tabs mt-0 w-full"
        >
          <Card className="grid grid-cols-1 md:grid-cols-2 md:items-center">
            <div className="p-6 md:p-8 lg:p-12">
              <p className="mb-3 text-lg font-medium md:mb-4">{tab.tagline}</p>
              <h2 className="mb-5 text-5xl font-semibold md:mb-6">
                {tab.title}
              </h2>
              <p className="text-lg font-medium">{tab.description}</p>

              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                <Button
                  title={tab.primaryCta.title}
                  variant={tab.primaryCta.variant}
                  className="rounded-full px-3 py-1.5 shadow-none"
                >
                  {tab.primaryCta.title}
                </Button>
                <Button
                  title={tab.secondaryCta.title}
                  variant={tab.secondaryCta.variant}
                  size="link"
                  className="flex items-center gap-1.5 px-3 py-1.5"
                >
                  {tab.secondaryCta.title}
                  <RxChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="aspect-square">
              <img
                loading="lazy"
                src={tab.imageSrc}
                className="h-full w-full rounded-r-lg object-cover"
                alt={tab.imageAlt}
              />
            </div>
          </Card>
        </TabsContent>
      ))}
    </>
  );
};
