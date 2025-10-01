import React from "react";
import { ContactHeader } from "./components/ContactHeader";
import { Contact } from "./components/Contact";
import { PricingPackages } from "./components/PricingPackages";
import { FAQs } from "./components/FAQs";

export default function Page() {
  return (
    <div>
      <ContactHeader />
      <Contact />
      <PricingPackages />
      <FAQs />
    </div>
  );
}
