import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function FAQs() {
  return (
    // Applied a light mint/teal background to the section
    <section className="flex-center bg-teal-50 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* HEADER */}
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-4xl font-extrabold md:mb-6 md:text-5xl lg:text-6xl">
            FAQs
          </h2>
          <p className="text-lg text-gray-600">
            Common questions about our software development services
          </p>
        </div>

        {/* ACCORDION (FAQs List) */}
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          {/* Loop over Accordion Items (using Card for elevation) */}
          {[
            {
              id: "0",
              question: "What services do you offer?",
              answer:
                "We provide full-stack web and mobile development, UI/UX design, and ongoing technical support. Our team specializes in creating scalable digital solutions for businesses of all sizes.",
            },
            {
              id: "1",
              question: "How long does a typical project take?",
              answer:
                "Project duration varies depending on complexity. A basic website might take 2-4 weeks, while complex web applications can range from 3-6 months.",
            },
            {
              id: "2",
              question: "Do you offer maintenance after project completion?",
              answer:
                "Yes. We provide ongoing maintenance and support packages to ensure your digital product remains secure, updated, and performs optimally.",
            },
            {
              id: "3",
              question: "Can you work with international clients?",
              answer:
                "Absolutely. We have experience working with clients globally and offer flexible communication channels to ensure smooth collaboration.",
            },
            {
              id: "4",
              question: "What is your pricing model?",
              answer:
                "We offer monthly and yearly packages with transparent pricing. Each tier includes different levels of service and support to match your specific needs.",
            },
          ].map((item) => (
            <Card
              key={item.id}
              className="rounded-xl border border-gray-100 bg-white shadow-lg"
            >
              <AccordionItem value={`item-${item.id}`} className="border-none">
                <AccordionTrigger
                  className="px-6 py-5 text-lg font-semibold text-gray-800 transition-colors hover:text-teal-600 [&[data-state=open]>svg]:rotate-180"
                  icon={
                    <RxPlus className="size-6 shrink-0 text-teal-600 transition-transform duration-300 md:size-7" />
                  }
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-base text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Card>
          ))}
        </Accordion>

        {/* CTA Section */}
        <div className="mt-16 rounded-xl border border-gray-100 bg-white p-8 shadow-xl md:mt-24 lg:mt-28">
          <h4 className="mb-3 text-3xl font-bold text-gray-800 md:mb-4">
            Need more information?
          </h4>
          <p className="text-lg text-gray-600">
            We are happy to discuss your specific requirements
          </p>
          <div className="mt-6">
            <Button
              title="Contact Us"
              className="h-12 rounded-xl bg-teal-600 px-8 font-bold text-white shadow-lg shadow-teal-500/50 hover:bg-teal-700"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
// ```eof

// I've made the following key professional improvements:

// * **Background:** Used `bg-teal-50` for a soft, professional backdrop (similar to the provided image).
// * **Accordion Items:** Each is wrapped in a `Card` with `rounded-xl` and a `shadow-lg` for that clean, elevated look.
// * **Trigger Styling:** Increased font size/weight and added a subtle `hover:text-teal-600`.
// * **Icon Accent:** The `RxPlus` icon is colored with **`text-teal-600`** to serve as the primary accent color.
// * **Content Readability:** The `AccordionContent` is styled with `text-gray-600` for excellent readability.
// * **CTA Section:** This section is also enclosed in a white, elevated card (`bg-white shadow-xl`) to clearly separate it from the main FAQ list, and the button uses a strong teal color for a confident call-to-action.
