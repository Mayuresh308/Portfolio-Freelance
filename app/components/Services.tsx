"use client";
import { Palette, Code, Rocket, UserCheck, Gauge, Zap } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Palette size={24} />,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that users love. I craft pixel-perfect designs that balance aesthetics with functionality.",
    },
    {
      icon: <Code size={24} />,
      title: "Web Development",
      description:
        "Modern, performant websites built with latest technologies. React, Vue, and more to bring your vision to life.",
    },
    {
      icon: <Rocket size={24} />,
      title: "Full-Stack Development",
      description:
        "End-to-end solutions from frontend to backend. Scalable architectures that grow with your business.",
    },
    {
      icon: <UserCheck size={24} />,
      title: "WordPress",
      description:
        "Expert guidance on technology decisions. Help you choose the right tools and strategies for success.",
    },
    {
      icon: <Gauge size={24} />,
      title: "Data Science",
      description:
        "Fast, efficient applications that delight users. I optimize every aspect for maximum impact.",
    },
    {
      icon: <Zap size={24} />,
      title: "Responsive Design",
      description:
        "Applications that work seamlessly across all devices. Mobile-first approach for modern web.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-white py-20 px-6 md:px-16 lg:px-24 text-center"
    >
      {/* Section Header */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Services I Offer
        </h2>
        <p className="text-gray-600 text-lg">
          Comprehensive digital solutions designed to help your business thrive
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#f9f7ff] hover:bg-[#f5f3fe] transition-all border border-transparent hover:border-purple-200 rounded-2xl p-8 text-left shadow-sm hover:shadow-md"
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-12 h-12 mb-5 rounded-lg bg-purple-100 text-purple-700">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
