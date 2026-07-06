"use client";

import { useMemo, useRef } from "react";
import { Instrument_Serif } from "next/font/google";
import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/shadcn-space/animations/marquee";
import { Quote } from "lucide-react";
import { motion, useInView } from "motion/react";
const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
    style: ["italic"],
});
const defaultTestimonials = [
    {
        quote: "Entrain Labs transformed my career completely. The hands-on projects and expert mentorship gave me the confidence and skills to land my dream job in digital marketing. Best decision I ever made!",
        author: "Rahul Krishnan",
        role: "Digital Marketing Specialist",
        image: "https://images.shadcnspace.com/assets/profiles/testimonial-user.png",
    },
    {
        quote: "The practical approach at Entrain Labs is unmatched. I learned more in 3 months here than I did in years of self-study. The live projects gave me real experience that employers actually value.",
        author: "Sneha Menon",
        role: "SEO Analyst",
        image: "https://images.shadcnspace.com/assets/profiles/testimonial-user-2.png",
    },
];
const columnStyles = [
    "hidden lg:flex",
    "flex",
    "hidden md:flex",
];
function getHandle(author) {
    return `@${author.toLowerCase().replace(/[^a-z0-9]+/g, "")}`;
}
function repeatTestimonials(testimonials) {
    if (testimonials.length === 0) {
        return [];
    }
    return Array.from({ length: 12 }, (_, index) => ({
        ...testimonials[index % testimonials.length],
        id: index,
    }));
}
function TestimonialCard({ testimonial }) {
    return (<article className="w-full rounded-md border border-border bg-card p-5 shadow-sm transition-colors duration-300 hover:bg-muted/40">
            <div className="flex items-center gap-3">
                <div className="relative size-11 shrink-0 overflow-hidden rounded-full bg-muted">
                    <img src={testimonial.image} alt={testimonial.author} fill sizes="44px" className="object-cover"/>
                </div>
                <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground">
                        {testimonial.author}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                        {getHandle(testimonial.author)}
                    </p>
                </div>
                <Quote className="ml-auto size-4 shrink-0 text-muted-foreground"/>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {testimonial.quote}
            </p>
            <div className="mt-5 border-t border-border pt-4">
                <p className="text-xs font-medium text-foreground">
                    {testimonial.role}
                </p>
            </div>
        </article>);
}
function TestimonialTitle({ title }) {
    if (!title.includes("Students")) {
        return <>{title}</>;
    }
    const [before, after] = title.split("Students");
    return (<>
            {before}
            <span className={instrumentSerif.className}>Students</span>
            {after}
        </>);
}
export default function Testimonial01({ badge = "Testimonials", title = "What Our Students Say", testimonials = defaultTestimonials, }) {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
    const cards = useMemo(() => repeatTestimonials(testimonials), [testimonials]);
    const columns = [cards.slice(0, 4), cards.slice(4, 8), cards.slice(8, 12)];
    return (<section ref={sectionRef} className="relative overflow-hidden py-10 md:py-16">
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent"/>
            <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
                <motion.div initial={{ opacity: 0, y: -32 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -32 }} transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }} className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
                    <Badge variant="outline" className="h-auto w-fit bg-background px-3 py-1 text-sm font-normal">
                        {badge}
                    </Badge>
                    <h2 className="text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                        <TestimonialTitle title={title}/>
                    </h2>
                    <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                        Real experiences, genuine feedback from learners who turned practical training into career momentum.
                    </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }} className="relative mt-10 grid h-[680px] grid-cols-1 gap-4 overflow-hidden md:grid-cols-2 lg:grid-cols-3">
                    {columns.map((column, columnIndex) => (<div key={columnIndex} className={columnStyles[columnIndex]}>
                            <Marquee vertical reverse={columnIndex === 1} pauseOnHover repeat={3} className="h-full w-full p-0 [--duration:34s] [--gap:1rem]">
                                {column.map((testimonial) => (<TestimonialCard key={`${testimonial.author}-${testimonial.id}`} testimonial={testimonial}/>))}
                            </Marquee>
                        </div>))}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-background to-transparent"/>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent"/>
                </motion.div>
            </div>
        </section>);
}
