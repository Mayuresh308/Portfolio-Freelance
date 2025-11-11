"use client";

export default function Footer() {
  // smooth scroll handler
  const handleScroll = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0E1221] text-gray-400 py-16 px-8 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
              M
            </div>
            <h3 className="text-white font-semibold text-lg">Mayuresh Devadkar</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Creative developer and designer specializing in modern, functional
            digital experiences.
          </p>
        </div>

        {/* Navigation (Matches Navbar) */}
        <div>
          <h4 className="text-white font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => handleScroll("#hero")}
                className="hover:text-white transition cursor-pointer"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("#about")}
                className="hover:text-white transition cursor-pointer"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("#services")}
                className="hover:text-white transition cursor-pointer"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("#projects")}
                className="hover:text-white transition cursor-pointer"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("#contact")}
                className="hover:text-white transition cursor-pointer"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>UI/UX Design</li>
            <li>Web Development</li>
            <li>Full-Stack Development</li>
            <li>WordPress</li>
            <li>Data Science</li>
            <li>Responsive Design</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:mayuresh@email.com"
                className="hover:text-white transition"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/mayuresh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Mayuresh308"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="max-w-7xl mx-auto mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Mayuresh — All Rights Reserved.
      </div>
    </footer>
  );
}
