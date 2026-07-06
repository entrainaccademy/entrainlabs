import React from "react";
import Hero from "@/components/premium/hero";
import TrustedBy from "@/components/premium/trusted-by";
import WhyChooseUs from "@/components/premium/why-us";
import Courses from "@/components/premium/courses";
import LearningJourney from "@/components/premium/journey";
import SuccessStories from "@/components/premium/success";
import PlacementPartners from "@/components/premium/partners";
import MentorsSection from "@/components/premium/mentors";
import NumbersSection from "@/components/premium/numbers";
import AIToolsSection from "@/components/premium/tools";
import FAQSection from "@/components/premium/faq";
import FinalCTA from "@/components/premium/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <WhyChooseUs />
      <Courses />
      <LearningJourney />
      <SuccessStories />
      <PlacementPartners />
      <MentorsSection />
      <NumbersSection />
      <AIToolsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
