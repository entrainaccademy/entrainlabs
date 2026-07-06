import React from "react";
import CoursesList from "@/components/premium/courses";
import LearningJourney from "@/components/premium/journey";

export default function Courses() {
  return (
    <div className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 font-display">
          Our <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Programs</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
          Explore our wide range of industry-aligned digital marketing and development programs designed to accelerate your career.
        </p>
      </div>

      <CoursesList />
      <LearningJourney />
    </div>
  );
}
