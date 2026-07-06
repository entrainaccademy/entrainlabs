"use client";

import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/shadcn-space/animations/marquee";
import { cn } from "@/lib/utils";
export const servicesData = [
    {
        heading: "Brand Strategy",
        descp: "We craft unique brand stories and visual identities that resonate with your audience and build long-lasting trust and recognition.",
        image: "https://images.shadcnspace.com/assets/services/services-1.png"
    },
    {
        heading: "Web development",
        descp: "Build stunning, user-friendly websites that not only look great but also perform seamlessly across all devices.",
        image: "https://images.shadcnspace.com/assets/services/services-2.png"
    },
    {
        heading: "Content creation",
        descp: "We create engaging, high-quality content that resonates with your audience and helps you connect with them on a deeper level.",
        image: "https://images.shadcnspace.com/assets/services/services-3.png"
    },
    {
        heading: "Motion graphics",
        descp: "We create engaging, high-quality motion graphics that capture the essence of your brand and help you connect with your audience on a deeper level.",
        image: "https://images.shadcnspace.com/assets/services/services-4.png"
    }
];
const marqueeRows = [
    { reverse: true, offset: "ml-0" },
    { reverse: false, offset: "-ml-24 md:-ml-40" },
    { reverse: true, offset: "ml-10 md:ml-24" },
];
function CourseImageCard({ item, index }) {
    return (<div className="relative h-56 w-72 shrink-0 overflow-hidden rounded-md bg-muted md:h-64 md:w-96">
            <img src={item.image} alt={item.heading} fill sizes="(max-width: 768px) 288px, 384px" className="object-cover"/>
            <div className="absolute left-4 top-4 flex size-11 items-center justify-center rounded-full bg-background/90 text-sm font-semibold text-foreground shadow-sm backdrop-blur">
                {String(index + 1).padStart(2, "0")}
            </div>
        </div>);
}
function CourseInfoCard({ item, index }) {
    // Lighter color mapping for each course
    const courseColors = [
        'bg-blue-100 text-blue-900 border-blue-200', // Performance Marketing
        'bg-purple-100 text-purple-900 border-purple-200', // Web Development
        'bg-green-100 text-green-900 border-green-200', // Content Creation
        'bg-orange-100 text-orange-900 border-orange-200', // SEO
        'bg-pink-100 text-pink-900 border-pink-200', // Social Media Marketing
        'bg-indigo-100 text-indigo-900 border-indigo-200', // Email Marketing
    ];
    const colorClass = courseColors[index % courseColors.length];
    return (<div className={`relative flex h-56 w-72 shrink-0 flex-col justify-end overflow-hidden rounded-md border p-6 md:h-64 md:w-96 ${colorClass}`}>
            <div>
                <h3 className="text-2xl font-semibold leading-tight md:text-3xl">{item.heading}</h3>
                <div className="mt-3 h-px w-full bg-current opacity-25"/>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed opacity-80 md:text-base">
                    {item.descp}
                </p>
            </div>
        </div>);
}
function TitleCard() {
    return (<div className="flex h-56 w-72 shrink-0 flex-col justify-center rounded-md bg-background px-8 md:h-64 md:w-96">
            <Badge variant="outline" className="mb-4 w-fit py-1 px-3 h-auto text-sm font-normal border-border/80 bg-background">
                Courses
            </Badge>
            <h2 className="text-5xl font-semibold leading-none text-foreground md:text-7xl">
                Our<br />Courses
            </h2>
        </div>);
}
function DescriptionCard() {
    return (<div className="flex h-56 w-[28rem] shrink-0 items-center rounded-md bg-background px-8 md:h-64 md:w-[40rem]">
            <p className="text-xl font-medium leading-tight text-foreground md:text-3xl">
                Comprehensive digital marketing training designed to give you real-world skills and hands-on experience with industry-leading tools and strategies.
            </p>
        </div>);
}
function CtaCard() {
    return (<a href="#contact" className="group flex h-56 w-72 shrink-0 flex-col justify-between rounded-md border border-border bg-card p-6 text-card-foreground transition-transform duration-300 hover:-translate-y-1 md:h-64 md:w-80">
            <span />
            <span className="text-4xl font-semibold leading-none md:text-5xl">
                Enroll<br />Now
            </span>
        </a>);
}
function getRowItems(data, rowIndex) {
    const shifted = [...data.slice(rowIndex), ...data.slice(0, rowIndex)];
    const cards = shifted.flatMap((item, index) => {
        const actualIndex = (index + rowIndex) % data.length;
        return [
            <CourseImageCard key={`${rowIndex}-${item.heading}-image`} item={item} index={actualIndex}/>,
            <CourseInfoCard key={`${rowIndex}-${item.heading}-info`} item={item} index={actualIndex}/>,
        ];
    });
    if (rowIndex === 0) {
        cards.splice(1, 0, <TitleCard key={`${rowIndex}-title`}/>);
    }
    if (rowIndex === 1) {
        cards.splice(2, 0, <DescriptionCard key={`${rowIndex}-description`}/>);
    }
    if (rowIndex === 2) {
        cards.splice(1, 0, <CtaCard key={`${rowIndex}-cta`}/>);
    }
    return cards;
}
function Services({ data = servicesData }) {
    const rows = marqueeRows.map((row, index) => ({
        ...row,
        items: getRowItems(data, index),
    }));
    return (<section className="relative overflow-hidden bg-background py-8 sm:py-12 lg:py-16">
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent"/>
            <div className="relative flex w-full flex-col gap-2">
                {rows.map((row, index) => (<Marquee key={index} reverse={row.reverse} pauseOnHover repeat={3} className={cn("p-0 [--duration:34s] [--gap:0.5rem]", row.offset)}>
                        {row.items}
                    </Marquee>))}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-background to-transparent md:w-36"/>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-background to-transparent md:w-36"/>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-linear-to-b from-background to-transparent"/>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-background to-transparent"/>
            </div>
        </section>);
}
export default Services;
