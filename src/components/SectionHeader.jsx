import React from "react";
import { Button } from "@/components/ui/button";
import { RxChevronRight } from "react-icons/rx";

/**
 * Reusable component for displaying centered section headings and an optional CTA block.
 * @param {string} tagline - The small text above the main title (e.g., "Excellence").
 * @param {string} title - The main heading (e.g., "Why choose Codefloxx").
 * @param {string} description - The descriptive paragraph below the title.
 * @param {boolean} [showCta=false] - If true, displays the two CTA buttons.
 */

export const SectionHeaderCta = () => (
  <div className="flex-center mt-6 gap-x-4 md:mt-8">
    <Button
      title="Contact"
      size="lg"
      className="hover:bg-brand-main h-auto w-max cursor-pointer rounded-full bg-transparent px-5 py-2.5 text-lg font-medium text-black shadow-none outline-2 outline-gray-600 hover:text-white"
    >
      Learn more
    </Button>

    <Button
      title="Explore"
      size="lg"
      variant="outline"
      className="hover:bg-brand-main flex h-auto w-max cursor-pointer items-center gap-1.5 rounded-full bg-transparent px-5 py-2.5 text-lg font-medium shadow-none hover:text-white"
    >
      <span>Explore</span>
      <RxChevronRight className="h-4 w-4" />
    </Button>
  </div>
);
export function SectionHeader({
  tagline,
  title,
  description,
  showCta = false,
  className,
}) {
  return (
    <div className={`mx-auto text-center ${className}`}>
      <p className="mb-3 text-xl font-medium md:mb-4">{tagline}</p>

      <h1 className="mb-5 text-3xl font-semibold sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
        {title}
      </h1>

      <p className="text-xl tracking-wide">{description}</p>

      {showCta && <SectionHeaderCta />}
    </div>
  );
}
