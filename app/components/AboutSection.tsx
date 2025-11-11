"use client";
import { Zap, Palette, Code, Rocket, UserCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[#f5f3fe] text-gray-900 py-20 px-6 md:px-24 flex flex-col md:flex-row items-start justify-between overflow-hidden"
    >
      {/* Left Content */}
      <div className="max-w-lg w-full md:w-1/2 space-y-6 pr-0 md:pr-8 lg:pr-12 md:pl-4 lg:pl-8 z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-200 text-purple-700 rounded-full px-4 py-1 text-sm font-medium backdrop-blur-md">
          <Zap size={14} className="text-purple-500" />
          My Process
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
          A Smarter Way To Create
        </h2>

        {/* Paragraph */}
        <p className="text-gray-700 text-lg leading-relaxed">
          My development process is streamlined, collaborative, and
          results-driven. I combine strategic thinking with technical expertise
          to deliver products that exceed expectations.
        </p>
      </div>

      {/* Right Content – Steps (No Line) */}
      <div className="relative mt-16 md:mt-0 md:w-1/2 flex flex-col gap-10 pl-4 md:pl-8 lg:pl-10">
        {/* Step 1 */}
        <div className="relative flex items-start gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#8B3DFF] text-white shadow-md">
            <Zap size={18} />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900">Discovery</h3>
            <p className="text-gray-600 text-sm">
              Understand your vision and goals
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative flex items-start gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#8B3DFF] text-white shadow-md">
            <Palette size={18} />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900">Design</h3>
            <p className="text-gray-600 text-sm">
              Create stunning, user-focused designs
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative flex items-start gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#8B3DFF] text-white shadow-md">
            <Code size={18} />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900">Develop</h3>
            <p className="text-gray-600 text-sm">
              Build robust, scalable solutions
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="relative flex items-start gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#8B3DFF] text-white shadow-md">
            <Rocket size={18} />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900">Deploy</h3>
            <p className="text-gray-600 text-sm">
              Launch and optimize for success
            </p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="relative flex items-start gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#8B3DFF] text-white shadow-md">
            <UserCheck size={18} />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900">Support</h3>
            <p className="text-gray-600 text-sm">
              Ongoing maintenance and improvements
            </p>
          </div>
        </div>
      </div>

      {/* Optional texture overlay */}
      <div className="absolute inset-0 bg-[url('/images/noise-texture.png')] opacity-10 pointer-events-none"></div>
    </section>
  );
}
