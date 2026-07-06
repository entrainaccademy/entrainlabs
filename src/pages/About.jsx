import React from "react";
import WhyChooseUs from "@/components/premium/why-us";
import MentorsSection from "@/components/premium/mentors";
import NumbersSection from "@/components/premium/numbers";

export default function About() {
  return (
    <div className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 font-display">
          About <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Entrain Labs</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
          Entrain Labs is Kerala's premium digital marketing academy, dedicated to bridging the gap between academic learning and industry demands. Our hands-on training, industry mentors, and guaranteed placement assistance make us the preferred partner for aspiring digital marketers.
        </p>
      </div>

      <WhyChooseUs />
      <NumbersSection />
      <MentorsSection />
    </div>
  );
}
