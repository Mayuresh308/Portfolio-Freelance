"use client";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-[#f5f3fe] px-8 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Featured Projects
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Showcasing some of my best work
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <img
              src="/images/project1.png"
              alt="Social Media App"
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                Social Media Application
              </h3>
              <p className="text-gray-600 mb-4">
                A fully functional MERN-based social media app featuring
                authentication, post creation, likes, and comments. Built with
                scalability and clean UI in mind.
              </p>
              <a
                href="https://github.com/Mayuresh308/social-media"
                target="_blank"
                className="text-purple-600 font-semibold hover:underline"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <img
              src="/images/project2.png"
              alt="Real Estate App"
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                Real Estate Platform
              </h3>
              <p className="text-gray-600 mb-4">
                A property listing and management platform built using MERN
                stack. Includes secure user authentication, image uploads, and
                property filtering.
              </p>
              <a
                href="https://github.com/Mayuresh308/MERN-Real-Estate"
                target="_blank"
                className="text-purple-600 font-semibold hover:underline"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
