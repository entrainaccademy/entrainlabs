import React from "react";
import { EnrollmentFormAdvanced } from "@/components/ui/enrollment-form-advanced";

export default function Contact() {
  return (
    <div className="py-20 bg-white dark:bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 font-display">
          Get in <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Touch</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
          Have questions about our courses, admissions, or placements? Fill out the form below, and our career counsellors will get back to you within 24 hours.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200/55 dark:border-zinc-800/55 text-center">
            <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/50 rounded-full flex items-center justify-center mx-auto mb-4 text-violet-600 dark:text-violet-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.806-5.194-4.176-7-7l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Call Us</h3>
            <p className="text-zinc-600 dark:text-zinc-400">+91 9072 123 456</p>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200/55 dark:border-zinc-800/55 text-center">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600 dark:text-indigo-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Email Us</h3>
            <p className="text-zinc-600 dark:text-zinc-400">admissions@entrainlabs.com</p>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200/55 dark:border-zinc-800/55 text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 dark:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Visit Us</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Kochi, Kerala, India</p>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-950 p-8 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-xl shadow-zinc-100/50 dark:shadow-none">
          <EnrollmentFormAdvanced />
        </div>
      </div>
    </div>
  );
}
