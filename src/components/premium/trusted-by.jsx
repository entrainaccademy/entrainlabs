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

  // Duplicate items for smooth infinite scroll
  const marqueeItems = [...tools, ...tools, ...tools, ...tools];

  return (
    <section className={`relative py-0 md:py-5 overflow-hidden bg-red-000 border-zinc-100 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-6">
          <h4 className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 font-satoshi">
            Our Tools
          </h4>
        </div>
        <div className="relative w-full overflow-hidden bg-red-000 [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] py-4">
          <div
            className="flex items-center gap-4 bg-red-000 md:gap-2 min-w-max animate-marquee hover:[animation-play-state:paused]"
            style={{ animationDuration: "55s" }}
          >
            {marqueeItems.map((tool, idx) => (
              <div
                key={idx}
                className="w-22 bg-red-000 md:w-44 bg-red-000 h-6 md:h-20 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  draggable={false}
                  className="max-h-12 md:max-h-16 h-22 bg-red-000 w-auto object-contain select-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
