"use client";
import { cn } from "@/lib/utils";
import { BookOpen, Briefcase, GraduationCap, Users, Rocket } from "lucide-react";
import { Instrument_Serif } from "next/font/google";
import { motion } from "motion/react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import Galaxy from "@/components/ui/galaxy";
const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
    style: ["italic"],
});
const journeyData = [
    {
        id: 1,
        title: "Performance Marketing",
        date: "",
        content: "Learn to run high-converting paid campaigns with proper targeting, budgeting, and tracking. With mentoring from the best digital marketing agency in Kerala, gain real experience in driving ROI.",
        category: "Learning",
        icon: BookOpen,
        relatedIds: [],
        energy: 100,
    },
    {
        id: 2,
        title: "Web Development",
        date: "",
        content: "Build responsive, high-performing websites with strong structure and user experience. Learn from the best digital marketing agency in Kerala how to create sites that convert, not just look good.",
        category: "Practice",
        icon: Briefcase,
        relatedIds: [],
        energy: 90,
    },
    {
        id: 3,
        title: "Content Creation",
        date: "",
        content: "Create engaging content for social media, ads, and brand storytelling. With guidance from the best digital marketing agency in Kerala, learn what truly connects and converts.",
        category: "Guidance",
        icon: Users,
        relatedIds: [],
        energy: 75,
    },
    {
        id: 4,
        title: "SEO",
        date: "",
        content: "Gain a deep understanding of optimizing websites to rank higher in search engine results, boosting visibility and driving organic traffic. With mentoring from the best digital marketing agency in Kerala, learn real strategies that deliver measurable results.",
        category: "Output",
        icon: GraduationCap,
        relatedIds: [],
        energy: 55,
    },
    {
        id: 5,
        title: "Social Media Marketing",
        date: "",
        content: "Learn to leverage popular platforms to create impactful campaigns, build brand presence, engage your audience, and drive conversions. Get guided by experts from the best digital marketing agency in Kerala and understand what actually works in real campaigns.",
        category: "Career",
        icon: Rocket,
        relatedIds: [],
        energy: 30,
    },
    {
        id: 6,
        title: "Email Marketing",
        date: "",
        content: "Master the art of high-converting email campaigns — from compelling content to engaging design and smart automation. With mentoring from the best digital marketing agency in Kerala, learn how to create email strategies that truly perform.",
        category: "Career",
        icon: Rocket,
        relatedIds: [],
        energy: 15,
    },
];
const AboutUs = ({ aboutusData, }) => {
    return (<>
      {/* Story Scroll Section */}
      <FlowArt aria-label="Learn by Doing">
        <FlowSection aria-label="Don't Just Learn — Start Doing" style={{ backgroundColor: '#fd5200', color: '#fff' }}>
          <p className="text-base sm:text-xs font-bold uppercase tracking-[0.2em]">Learn by Doing</p>
          <hr className="my-[2vw] border-none border-t border-white/40 opacity-100"/>
          <div className="flex-1 flex items-center justify-start text-left md:justify-start md:items-start">
            <h3 className="text-[clamp(3.5rem,12vw,10rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Don't Just<br />Learn —<br />Start Doing
            </h3>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/40 opacity-100"/>
          <p className="mt-auto max-w-[50ch] text-[clamp(1.25rem,2.5vw,2rem)] font-normal leading-relaxed">
            Learn from the Best Digital Marketing Academy in Kerala. Most courses only teach theory. We go beyond — powered by insights and strategies used by the best digital marketing academy in Kerala, helping you build real, job-ready skills.
          </p>
        </FlowSection>

        <FlowSection aria-label="Real Execution" style={{ backgroundColor: '#000', color: '#fff' }}>
          <p className="text-base sm:text-xs font-bold uppercase tracking-[0.2em]">01 — Real Execution</p>
          <hr className="my-[2vw] border-none border-t border-white/60"/>
          <div className="flex-1 flex items-center justify-start text-left md:justify-start md:items-start">
            <h3 className="text-[clamp(3.5rem,12vw,10rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Work On<br />Real<br />Tasks
            </h3>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/60"/>
          <p className="mt-auto max-w-[50ch] text-[clamp(1.25rem,2.5vw,2rem)] font-normal leading-relaxed">
            You don't just watch tutorials — you work on real tasks. Gain hands-on experience that prepares you for actual job roles from day one.
          </p>
        </FlowSection>

        <FlowSection aria-label="Deep Understanding" style={{ backgroundColor: '#F5F0E8', color: '#000' }}>
          <p className="text-base sm:text-xs font-bold uppercase tracking-[0.2em]">02 — Deep Understanding</p>
          <hr className="my-[2vw] border-none border-t border-black/60"/>
          <div className="flex-1 flex items-center justify-start text-left md:justify-start md:items-start">
            <h3 className="text-[clamp(2.75rem,9vw,10rem)] sm:text-[clamp(3.5rem,12vw,10rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Professional<br />Environment
            </h3>
          </div>
          <hr className="my-[2vw] border-none border-t border-black/60"/>
          <p className="max-w-[50ch] text-[clamp(1.25rem,2.5vw,2rem)] font-normal leading-relaxed">
            Understand how work happens in a professional environment. At the best digital marketing academy in Kerala, you learn strategies, workflows, and decision-making — not just tools.
          </p>
        </FlowSection>

        <FlowSection aria-label="Tangible Portfolio" style={{ backgroundColor: '#1A3DE8', color: '#fff' }}>
          <p className="text-base sm:text-xs font-bold uppercase tracking-[0.2em]">03 — Tangible Portfolio</p>
          <hr className="my-[2vw] border-none border-t border-white/50"/>
          <div className="flex-1 flex items-center justify-start text-left md:justify-start md:items-start">
            <h3 className="text-[clamp(3.5rem,12vw,10rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Real<br />Projects
            </h3>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/50"/>
          <p className="max-w-[50ch] text-[clamp(1.25rem,2.5vw,2rem)] font-normal leading-relaxed">
            Build a portfolio with real projects and results. With guidance from the best digital marketing academy in Kerala, showcase what you've done — not just certificates.
          </p>
        </FlowSection>

        <FlowSection aria-label="Unstoppable Confidence" style={{ backgroundColor: '#10b981', color: '#fff' }}>
          <p className="text-base sm:text-xs font-bold uppercase tracking-[0.2em]">04 — Unstoppable Confidence</p>
          <hr className="my-[2vw] border-none border-t border-white/40 opacity-100"/>
          <div className="flex-1 flex items-center justify-start text-left md:justify-start md:items-start">
            <h3 className="text-[clamp(3.5rem,12vw,10rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Interview<br />Ready
            </h3>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/40 opacity-100"/>
          <p className="mt-auto max-w-[50ch] text-[clamp(1.25rem,2.5vw,2rem)] font-normal leading-relaxed">
            Walk into interviews with confidence. Because at the best digital marketing academy in Kerala, you've already done the work, not just learned about it.
          </p>
        </FlowSection>
      </FlowArt>

      {/* Your Journey Section */}
      <section className="lg:py-20 sm:py-12 py-8 relative" style={{ backgroundColor: '#000', color: '#fff' }}>
        {/* Galaxy Background */}
        <div className="absolute inset-0 w-full h-full">
          <Galaxy mouseRepulsion mouseInteraction density={1} glowIntensity={0.3} saturation={0} hueShift={140} twinkleIntensity={0.3} rotationSpeed={0.1} repulsionStrength={2} autoCenterRepulsion={0} starSpeed={0.5} speed={1}/>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }} className="w-full flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                  Your Journey
                </span>
                <h3 className={cn("mt-1.5 text-3xl sm:text-4xl font-normal leading-tight text-white", instrumentSerif.className)}>
                  From zero to career-ready
                </h3>
              </div>
              <p className="text-sm text-white/70 max-w-xs sm:text-right leading-relaxed">
                What You'll Learn in This Course
              </p>
            </div>
            <RadialOrbitalTimeline timelineData={journeyData}/>
          </motion.div>
        </div>
      </section>
    </>);
};
export default AboutUs;
