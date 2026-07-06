"use client";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "motion/react";
const blogData = [
    {
        coverImage: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80",
        title: "Top 10 Digital Marketing Trends to Watch in 2026",
        date: "2026-04-15",
    },
    {
        coverImage: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
        title: "How AI is Transforming Social Media Marketing",
        date: "2026-04-10",
    },
    {
        coverImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
        title: "SEO Best Practices for 2026: A Complete Guide",
        date: "2026-04-05",
    },
];
const Blog = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
    return (<section ref={sectionRef} className="py-8 md:py-20">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="flex flex-col gap-16">
          {/* header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            {/* title */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }} transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }} className="flex flex-col gap-4 justify-center items-start grow">
              {/* Badge */}
              <Badge variant={"outline"} className="text-sm font-normal py-1 px-3 h-7">
                Blog & Insights
              </Badge>
              {/* Heading */}
              <h2 className="text-foreground text-3xl sm:text-5xl font-semibold">
                Latest from Our Blog
              </h2>
            </motion.div>
            {/* description */}
            <motion.p initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }} transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }} className="text-base font-normal text-muted-foreground max-w-xl">
              Stay updated with the latest digital marketing strategies, industry insights, and expert tips to help you succeed in the ever-evolving world of online marketing.
            </motion.p>
          </div>
          {/* blogs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogData.map((value, index) => {
            const formattedDate = new Date(value.date).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric",
            });
            return (<motion.a href={`#`} key={index} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{
                    duration: 1,
                    delay: index === 0 ? 0.2 : index === 1 ? 0.4 : 0.6,
                    ease: "easeInOut"
                }} className={`group flex flex-col gap-5 ${index === 0 ? "sm:col-span-2" : ""}`}>
                  <Card className="p-0 ring-0 border-0 rounded-none shadow-none">
                    <CardContent className="p-0 group flex flex-col gap-5">
                      <div className="w-full aspect-video sm:aspect-auto sm:h-96 overflow-hidden group">
                        <img src={value.coverImage} alt={value.title} className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"/>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-base font-normal text-muted-foreground">
                          {formattedDate}
                        </p>
                        <p className="text-2xl font-semibold text-foreground">
                          {value.title}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>);
        })}
          </div>
        </div>
      </div>
    </section>);
};
export default Blog;
