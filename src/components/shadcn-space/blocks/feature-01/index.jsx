"use client";
import Feature from "@/components/shadcn-space/blocks/feature-01/feature";
import { Award, BookOpen, Briefcase, HeartHandshake, TrendingUp } from "lucide-react";
const featureData = [
    {
        icon: Award,
        content: "Learn from experienced professionals with real industry expertise and proven track records.",
    },
    {
        icon: Briefcase,
        content: "Get hands-on experience with real-time project exposure that prepares you for actual job roles.",
    },
    {
        icon: BookOpen,
        content: "Start your journey with our beginner-friendly approach designed for all skill levels.",
    },
    {
        icon: HeartHandshake,
        content: "Receive personalized career guidance and support to help you achieve your professional goals.",
    },
    {
        icon: TrendingUp,
        content: "Stay ahead with our updated industry curriculum that reflects current market demands.",
    },
];
const Feature01 = () => {
    return (<>
      <Feature featureData={featureData}/>
    </>);
};
export default Feature01;
