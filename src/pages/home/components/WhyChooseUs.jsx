import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { ReasonsTabContent, ReasonsTabHeader } from "./ReasonsTab";
import { SectionHeader } from "@/components/SectionHeader";

export function WhyChooseUs() {
  return (
    <section className="flex-center flex-center bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <SectionHeader
            tagline="Excellence"
            title="Why choose Codefloxx"
            description="We deliver robust digital solutions that drive business growth and innovation. Our approach combines technical expertise with creative problem-solving."
            showCta={true}
            className="max-w-[768px]"
          />
        </div>
        <Tabs defaultValue="tab-one" className="flex flex-col items-center">
          <ReasonsTabHeader />
          <ReasonsTabContent />
        </Tabs>
      </div>
    </section>
  );
}
