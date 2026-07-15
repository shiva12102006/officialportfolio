"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-28 section-anchor">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">
        <div className="relative animate-float">
          <div className="absolute w-72 h-72 bg-purple-700 rounded-full blur-3xl opacity-40"></div>

          <Image
            src="/shiva.png"
            alt="about"
            width={400}
            height={400}
            className="relative z-10 rounded-3xl border border-purple-500/20"
          />
        </div>

        <div className="animate-fade-up">
          <p className="text-purple-500 uppercase tracking-widest mb-3">About Me</p>

          <h2 className="text-5xl font-bold mb-6">Who I Am</h2>

          <p className="text-gray-400 leading-8">
            I’m a passionate Web Developer with expertise in building modern web applications using React, Next.js and Tailwind CSS.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-10 text-gray-300">
            <div>✔ Web Development</div>
            <div>✔ Responsive Design</div>
            <div>✔ SEO Friendly</div>
            <div>✔ Performance Optimization</div>
          </div>

          <a
            href="/shiva-cv.txt"
            download="shiva-cv.txt"
            className="mt-10 inline-flex bg-purple-600 px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}