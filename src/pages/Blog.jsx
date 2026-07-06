import React from "react";
import BlogList from "@/components/shadcn-space/blocks/blog-01/blog";

export default function Blog() {
  return (
    <div className="py-20 bg-white dark:bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 font-display">
          Insights & <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Articles</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
          Stay ahead of the curve with our expert commentary, tips, and insights on the digital marketing landscape.
        </p>
      </div>

      <BlogList />
    </div>
  );
}
