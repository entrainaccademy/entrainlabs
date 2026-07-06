"use client";
import Services from "@/components/shadcn-space/blocks/services-02/services";
import { coursesData } from "@/lib/data";
const coursesFormatted = coursesData.map((course, index) => {
    const images = [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", // Performance Marketing - analytics dashboard
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80", // Web Development - coding
        "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&q=80", // Content Creation - writing
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80", // SEO - person using macbook pro
        "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80", // Social Media Marketing - social media logos
        "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80", // Email Marketing - email inbox
    ];
    return {
        heading: course.title,
        descp: course.description,
        image: images[index],
    };
});
export default function CoursesSection() {
    return <Services data={coursesFormatted}/>;
}
