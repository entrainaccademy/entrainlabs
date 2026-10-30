import React from "react";
import ga4Logo from "@/assets/tools/GA4.png";
import canvaLogo from "@/assets/tools/canva.png";
import googleAdsLogo from "@/assets/tools/googleads.png";
import gptLogo from "@/assets/tools/gpt.png";
import metaLogo from "@/assets/tools/meta.webp";
import semrushLogo from "@/assets/tools/semrush.png";
import shopifyLogo from "@/assets/tools/shopify.png";
import wordpressLogo from "@/assets/tools/wordpress.png";

export default function TrustedBy({ className = "" }) {
  const tools = [
    { name: "Google Analytics 4", logo: ga4Logo },
    { name: "Canva", logo: canvaLogo },
    { name: "Google Ads", logo: googleAdsLogo },
    { name: "ChatGPT", logo: gptLogo },
    { name: "Meta", logo: metaLogo },
    { name: "SEMrush", logo: semrushLogo },
    { name: "Shopify", logo: shopifyLogo },
    { name: "WordPress", logo: wordpressLogo },
  ];

  return (
    <section
      id="tools-you-will-learn"
      aria-label="Master the Tools Used in Digital Marketing"
      className={`relative py-12 sm:py-16 md:py-20 font-sans transition-colors duration-300 ${className}`}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-outfit tracking-tight text-zinc-950 dark:text-white leading-[1.15]">
            Master the Tools Used in{" "}
            <span className="text-[#0A756A] dark:text-emerald-400">Digital Marketing</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-satoshi leading-relaxed max-w-2xl mx-auto">
            Get hands-on experience with industry-leading tools and platforms through practical training.
          </p>
        </div>

        {/* Clean Tool Icons Only - Zero background colors, pure icons */}
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-5 sm:gap-8 lg:gap-8 items-center justify-items-center">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="w-full flex items-center justify-center p-2 transition-transform duration-300 hover:scale-110 cursor-default select-none"
              title={tool.name}
            >
              <img
                src={tool.logo.src || tool.logo}
                alt={tool.name}
                draggable={false}
                className="h-9 sm:h-11 md:h-12 lg:h-14 w-auto max-w-[95px] sm:max-w-[115px] lg:max-w-[125px] object-contain select-none transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
