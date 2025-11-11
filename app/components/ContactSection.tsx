"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSending, setIsSending] = useState(false); // 👈 New state to handle loading

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current || isSending) return; // 👈 Prevent multiple submissions
    setIsSending(true); // 👈 Disable button while sending

    emailjs
      .sendForm(
        "service_23kfcwg", // ✅ your Service ID
        "template_o2jjlmr", // ✅ your Template ID
        form.current,
        "BrFvzG0MnG0qnxiA1" // ✅ your Public Key
      )
      .then(
        () => {
          console.log("✅ Message sent successfully!");
          setIsSent(true);
          setIsError(false);
          form.current?.reset();
        },
        (error: any) => {
          console.error("❌ FAILED...", error?.text || error);
          setIsError(true);
        }
      )
      .finally(() => {
        setIsSending(false); // 👈 Re-enable button
      });
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-[#4B2A9E] via-[#5A36B8] to-[#7B56E9] text-white px-8 md:px-16 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('/images/noise-texture.png')] opacity-15 pointer-events-none"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Let’s Connect
        </h2>
        <p className="text-white/80 mb-12 text-lg max-w-2xl mx-auto">
          I’m currently open to freelance projects and full-time opportunities.
          Let’s collaborate and bring your ideas to life!
        </p>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-10 shadow-lg space-y-6 transition hover:shadow-purple-500/20"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full bg-white/10 text-white placeholder-white/60 border border-white/20 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full bg-white/10 text-white placeholder-white/60 border border-white/20 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full bg-white/10 text-white placeholder-white/60 border border-white/20 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            disabled={isSending}
            className={`w-full md:w-auto font-semibold px-10 py-4 rounded-full shadow-md transition-all hover:shadow-lg
              ${
                isSending
                  ? "bg-purple-200 text-purple-800 cursor-not-allowed"
                  : "bg-white text-purple-700 hover:bg-purple-100 cursor-pointer"
              }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {/* Feedback */}
          {isSent && (
            <p className="text-green-300 mt-4 animate-fade-in">
              ✅ Message sent successfully! I’ll get back to you soon.
            </p>
          )}
          {isError && (
            <p className="text-red-300 mt-4 animate-fade-in">
              ❌ Something went wrong. Please try again later.
            </p>
          )}
        </form>

        {/* Subtext */}
        <p className="text-white/60 text-sm mt-10">
          Or reach me directly at{" "}
          <a
            href="mailto:mayureshmayuresh56@gmail.com"
            className="text-white font-semibold hover:underline"
          >
            mayureshmayuresh56@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
