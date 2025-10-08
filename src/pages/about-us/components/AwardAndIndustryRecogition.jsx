import React from "react";
import { Button } from "@/components/ui/button";

const mockAchievements = [
  { name: "Built Recycling App" },
  { name: "Open Source Contributor" },

  { name: "Best Web Agency" },
];

const getMockLogo = (index) => {
  // Simple SVG to create professional, generic "logo" marks using initials
  const initials = mockAchievements[index].name
    .split(" ")
    .map((n) => n[0])
    .join("");
  // Using a consistent color palette that complements the 'sky' blue typical of professional design
  const colors = [
    "#2563EB",
    "#059669",
    "#7C3AED",
    "#DC2626",
    "#F59E0B",
    "#14B8A6",
    "#4F46E5",
    "#06B6D4",
  ];
  const color = colors[index % colors.length];

  return (
    <svg
      className="h-10 w-10"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" rx="15" fill={color} opacity="0.15" />
      <text
        x="50%"
        y="55%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="30"
        fontWeight="bold"
        fill={color}
      >
        {initials.length > 2 ? initials.substring(0, 2) : initials}
      </text>
    </svg>
  );
};

// Inline SVG component for the right arrow (replacing RxChevronRight)
const ChevronRight = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export function AwardAndIndustryRecogition() {
  return (
    <section className="bg-brand-shade-light px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="text-4xl leading-tight font-bold tracking-tighter md:text-5xl lg:text-6xl">
              Awards and Industry Recognition{" "}
            </h1>
            <p className="mt-6 text-xl text-gray-700 lg:text-2xl lg:tracking-wide">
              Celebrating our commitment to excellence in software development.
              This recognition underscores our dedication to innovation and
              quality.
            </p>

            <div className="mt-8 flex gap-x-3">
              <Button
                size="lg"
                title="Explore our awards"
                className="hover:bg-brand-shade-dark h-auto w-max cursor-pointer rounded-full bg-white px-5 py-2.5 text-lg font-medium text-gray-900 shadow-md transition-colors hover:text-white"
              >
                Explore
              </Button>
              <Button
                size="lg"
                variant="outline"
                title="View Details"
                className="hover:bg-brand-main hover:border-brand-main group flex h-auto w-max cursor-pointer items-center gap-1.5 rounded-full border-2 border-white bg-transparent px-5 py-2.5 text-lg font-medium text-black shadow-none transition-colors hover:text-white"
              >
                <span>Details</span>
                {/* Using the inline SVG component to replace RxChevronRight */}
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-8 md:grid-cols-2 md:gap-x-4 md:gap-y-8 lg:grid-cols-4">
            {/* Map over the mockAwards data to display professional-looking placeholders */}
            {mockAchievements.map((award, index) => (
              <div
                key={index}
                className="flex h-40 transform flex-col items-center justify-center space-y-2 rounded-xl bg-white p-4 transition duration-300 hover:scale-[1.01]"
                title={`${award.name}`}
              >
                <div className="flex h-1/2 items-center justify-center">
                  {getMockLogo(index)}
                </div>
                <div className="flex h-1/2 flex-col justify-center text-center">
                  <p className="text-sm leading-tight font-bold text-gray-800">
                    {award.name}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">{award.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
