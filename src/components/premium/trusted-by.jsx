import React from "react";
import ga4Logo from "@/assets/tools/GA4.png";
import canvaLogo from "@/assets/tools/canva.png";
import googleAdsLogo from "@/assets/tools/googleads.png";
import gptLogo from "@/assets/tools/gpt.png";
import metaLogo from "@/assets/tools/meta.webp";
import semrushLogo from "@/assets/tools/semrush.png";
import shopifyLogo from "@/assets/tools/shopify.png";
import wordpressLogo from "@/assets/tools/wordpress.png";

export default function TrustedBy() {
  const tools = [
    { name: "Google Analytics 4", logo: ga4Logo },
    { name: "Canva", logo: canvaLogo },
    { name: "Google Ads", logo: googleAdsLogo },
    { name: "ChatGPT", logo: gptLogo },
    { name: "Meta", logo: metaLogo },
    { name: "SEMrush", logo: semrushLogo },
    { name: "Shopify", logo: shopifyLogo },
    { name: "WordPress", logo: wordpressLogo }
  ];

  // Repeat the list to ensure seamless marquee sliding animation
  const marqueeItems = [...tools, ...tools, ...tools, ...tools];

  return (
    <section className="relative py-2  bg-gradient-to-tr from-[#F8FAFC] via-white to-[#F0F7F6] dark:from-zinc-950 dark:via-zinc-950/80 dark:to-zinc-900/30 border-b border-zinc-50 dark:border-zinc-900 overflow-hidden font-sans">
      <div className="mx-auto max-w-7xl px-6 md:px-8 flex flex-col items-center gap-6">
        
        {/* Infinite Auto-Scrolling Marquee - Flat Logos */}
        <div className="w-full relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] py-6 z-10">
          <div 
            className="flex gap-8 w-max animate-marquee py-2 hover:[animation-play-state:paused] items-center"
            style={{ animationDuration: "55s" }}
          >
            {marqueeItems.map((tool, idx) => {
              return (
                <div
                  key={idx}
                  className="flex items-center justify-center transition-all duration-300 hover:scale-105 hover:opacity-90 shrink-0"
                >
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="h-22 w-auto object-contain select-none dark:brightness-200 dark:contrast-100"
                  />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

