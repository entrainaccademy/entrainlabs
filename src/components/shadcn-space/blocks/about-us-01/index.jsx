"use client";
import AboutUs from "@/components/shadcn-space/blocks/about-us-01/about-us";
import { Lightbulb, Rocket, Target, TrendingUp } from "lucide-react";
const aboutusData = [
    {
        icon: Rocket,
        title: "Real Execution",
        color: "bg-blue-500/10 text-blue-500"
    },
    {
        icon: Lightbulb,
        title: "Deep Understanding",
        color: "bg-teal-400/10 text-teal-400"
    },
    {
        icon: Target,
        title: "Tangible Portfolio",
        color: "bg-orange-400/10 text-orange-400"
    },
    {
        icon: TrendingUp,
        title: "Unstoppable Confidence",
        color: "bg-purple-400/10 text-purple-400"
    }
];
const AboutAndStats01 = () => {
    return (<>
      <AboutUs aboutusData={aboutusData}/>
    </>);
};
export default AboutAndStats01;
