import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { faqData } from "@/constants/faq_data";
import React from "react";

export function Faq() {
  return (
    <section className="flex-center px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-3xl">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <SectionHeader
            tagline=""
            title="FAQs"
            description="Common questions about our software development services and process."
            showCta={false}
            className="max-w-[768px]"
          />
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          {faqData.map((item) => (
            <div key={item.id} className="border-b-3 border-black px-4 pb-4">
              <h2 className="text-medium mb-3 text-xl font-bold md:mb-4">
                {item.question}
              </h2>
              <p className="text-medium">{item.answer}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-32 space-y-5 text-center">
          <h1 className="text-5xl font-semibold md:mb-6">
            Need more information?
          </h1>
          <p className="text-xl tracking-wide">
            We're happy to discuss your project in detail and answer any
            additional questions.
          </p>
          <Button
            title="Contact"
            size="lg"
            className="hover:bg-brand-main h-auto w-max rounded-full bg-transparent px-5 py-2.5 text-lg font-medium text-black shadow-none outline-2 outline-gray-600 hover:text-white"
          >
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}
