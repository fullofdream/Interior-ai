import { ScrollUp } from "@/components/Common";
import {Brands, Contact, Features, Hero, Pricing, Testimonials, Video, HowItWorks, FAQs } from "@/components/LandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Virtualroom AI platform",
  description: "This is Virtualroom AI platform",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <HowItWorks />
      <Video />
      <Testimonials />
      <Pricing />
      <FAQs />
      <Contact />
    </>
  );
}
