import React from "react";
import { AboutUsHeader } from "./components/AboutUsHeader";
import { AboutUsStorySection } from "./components/AboutUsStorySection";
import { CodefloxxTeam } from "./components/CodefloxxTeam";
import { OurTimeline } from "./components/OurTimeline";
import { Testimonials } from "./components/Testimonials";
import { AwardAndIndustryRecogition } from "./components/AwardAndIndustryRecogition";
import { CallToAction } from "./components/CallToAction";
import { TrustedBusinesses } from "./components/TrustedBusinesses";

export default function AboutUs() {
  return (
    <div>
      <AboutUsHeader />
      <AboutUsStorySection />
      <CodefloxxTeam />
      <OurTimeline />
      <Testimonials />
      <AwardAndIndustryRecogition />
      <TrustedBusinesses />
      <CallToAction />
    </div>
  );
}
