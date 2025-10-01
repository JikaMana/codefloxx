import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { BiCheck, BiRocket, BiStar, BiTrendingUp } from "react-icons/bi"; // Added BiRocket, BiStar, BiTrendingUp

export function PricingPackages() {
  const PlanCard = ({ plan, monthly, isRecommended = false }) => {
    const priceText = monthly ? `$${plan.monthly}/mo` : `$${plan.yearly}/yr`;
    const priceColor = isRecommended
      ? "text-brand-shade-dark"
      : "text-gray-900";
    const buttonClass = isRecommended
      ? "bg-brand-shade-dark text-white font-bold shadow-lg hover:text-brand-main transition-transform hover:bg-brand-secondary hover:scale-[1.01]"
      : "bg-brand-secondary text-brand-main shadow-lg transition-colors hover:text-white hover:bg-brand-shade-dark";
    const cardClass = isRecommended
      ? "relative flex h-full flex-col justify-between p-8 ring-4 ring-brand-shade-dark/30 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-indigo-300/60"
      : "flex h-full flex-col justify-between p-8 rounded-2xl shadow-xl transition-shadow hover:shadow-2xl";

    return (
      <Card className={cardClass}>
        {isRecommended && (
          <div className="bg-brand-shade-dark absolute top-0 right-0 -mt-3 mr-6 rounded-full px-3 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-md">
            Recommended
          </div>
        )}

        <div>
          <div className="mb-6 flex flex-col items-start"></div>
          <h3 className="mb-1 text-2xl font-bold">{plan.name}</h3>
          <p className="text-sm text-gray-500">{plan.tagline}</p>

          <div className="my-6">
            <span className={`text-5xl font-extrabold ${priceColor}`}>
              {priceText}
            </span>
            <div className="mt-2 flex h-4 items-center">
              {!monthly && plan.savings && (
                <p className="text-brand-shade-dark text-sm font-semibold">
                  {plan.savings}
                </p>
              )}
            </div>
          </div>

          <div className="my-8 h-px w-full shrink-0 bg-gray-200" />

          <p className="mb-4 text-lg font-semibold text-gray-800">
            Key Features:
          </p>
          <div className="grid grid-cols-1 gap-y-3">
            {plan.features.map((feature, index) => (
              <div key={index} className="flex items-start self-start">
                <div className="mt-1 mr-3 flex-none self-start">
                  <BiCheck className="text-brand-main size-6" />
                </div>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Button
            title="Start now"
            className={`h-12 w-full rounded-xl ${buttonClass}`}
          >
            Choose Plan
          </Button>
        </div>
      </Card>
    );
  };

  const monthlyPlans = [
    {
      name: "Starter",
      tagline: "For basic projects and prototypes.",
      monthly: 19,
      features: [
        "Basic website development",
        "Standard UI design",
        "Initial consultation",
      ],
    },
    {
      name: "Standard",
      tagline: "Ideal for growing web applications.",
      monthly: 29,
      features: [
        "Advanced web application",
        "Custom UI/UX design",
        "Monthly support",
        "Performance optimization",
      ],
    },
    {
      name: "Premium",
      tagline: "Full-scale development and dedicated support.",
      monthly: 49,
      features: [
        "Full stack development",
        "Complex system integration",
        "Dedicated support team",
        "Advanced security protocols",
        "Priority updates",
      ],
    },
  ];

  const yearlyPlans = [
    {
      name: "Starter",
      tagline: "For basic projects and prototypes.",
      yearly: 180,
      savings: "Save $48 (20%)",
      features: [
        "Basic website development",
        "Standard UI design",
        "Initial consultation",
      ],
    },
    {
      name: "Standard",
      tagline: "Ideal for growing web applications.",
      yearly: 280,
      savings: "Save $68 (20%)",
      features: [
        "Advanced web application",
        "Custom UI/UX design",
        "Monthly support",
        "Performance optimization",
      ],
    },
    {
      name: "Premium",
      tagline: "Full-scale development and dedicated support.",
      yearly: 480,
      savings: "Save $108 (20%)",
      features: [
        "Full stack development",
        "Complex system integration",
        "Dedicated support team",
        "Advanced security protocols",
        "Priority updates",
      ],
    },
  ];

  return (
    <section className="flex-center bg-gray-50 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* HEADER */}
        <div className="mx-auto mb-12 max-w-lg text-center">
          <p className="text-brand-shade-dark mb-3 font-semibold tracking-widest uppercase md:mb-4">
            Invest in quality
          </p>
          <h1 className="mb-6 text-5xl font-extrabold md:text-6xl">
            Flexible Pricing
          </h1>
          <p className="text-lg text-gray-600">
            Flexible packages designed to match your project complexity and
            budget
          </p>
        </div>

        <Tabs defaultValue="monthly" className="w-full">
          {/* TABS LIST (Toggle) */}
          <TabsList className="mx-auto mb-16 w-fit items-center justify-center rounded-full border border-gray-200 bg-white p-1 shadow-lg">
            <TabsTrigger
              value="monthly"
              className="data-[state=active]:bg-brand-shade-dark rounded-full px-6 py-2 font-medium text-gray-700 transition-colors data-[state=active]:font-semibold data-[state=active]:text-white data-[state=active]:shadow-md"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="yearly"
              className="data-[state=active]:bg-brand-shade-dark rounded-full px-6 py-2 font-medium text-gray-700 transition-colors data-[state=active]:font-semibold data-[state=active]:text-white data-[state=active]:shadow-md"
            >
              Yearly{" "}
              <span className="bg-brand-shade-dark ml-2 hidden rounded-full border-2 px-2 py-0.5 text-xs font-bold text-white sm:inline">
                Save 20%
              </span>
            </TabsTrigger>
          </TabsList>

          {/* MONTHLY CONTENT */}
          <TabsContent
            value="monthly"
            className="data-[state=active]:animate-in data-[state=active]:fade-in-5 data-[state=active]:slide-in-from-bottom-2 grid grid-cols-1 gap-8 lg:grid-cols-3"
          >
            <PlanCard plan={monthlyPlans[0]} monthly={true} />
            <PlanCard
              plan={monthlyPlans[1]}
              monthly={true}
              isRecommended={true}
            />
            <PlanCard plan={monthlyPlans[2]} monthly={true} />
          </TabsContent>

          {/* YEARLY CONTENT */}
          <TabsContent
            value="yearly"
            className="data-[state=active]:animate-in data-[state=active]:fade-in-5 data-[state=active]:slide-in-from-bottom-2 grid grid-cols-1 gap-8 lg:grid-cols-3"
          >
            <PlanCard plan={yearlyPlans[0]} monthly={false} />
            <PlanCard
              plan={yearlyPlans[1]}
              monthly={false}
              isRecommended={true}
            />
            <PlanCard plan={yearlyPlans[2]} monthly={false} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
