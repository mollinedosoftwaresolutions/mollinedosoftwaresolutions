"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // ⬅️ Add this import at the top

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0B0F19] text-gray-100">
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 w-full z-50 flex justify-between items-center
                   px-8 py-4 bg-[#0B0F19]/80 backdrop-blur-md border-b border-gray-800
                   shadow-md transition-all duration-300"
      >
        <h1 className="text-lg font-semibold tracking-wide text-gray-100">
          Mollinedo
          <span className="text-blue-400">Software</span>
          <span className="text-gray-300">Solutions</span>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li>
            <a
              href="/"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-blue-400 hover:text-blue-300 transition"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div
            className="absolute top-16 left-0 w-full bg-[#0B0F19]/95 backdrop-blur-md
                       border-t border-gray-700 py-6 md:hidden animate-fadeSlide"
          >
            <ul className="flex flex-col items-center space-y-4 text-gray-200 text-base">
              {["Home", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="px-6 py-2 rounded-full hover:bg-blue-600/20 hover:text-blue-300 transition-all duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Spacer so content isn’t hidden under sticky nav */}
      <div className="pt-24"></div>

      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-8 py-20 gap-10"
      >
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-blue-300"
        >
          <img
            src="/assets/profile.png"
            alt="Alejandro Morales"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 leading-tight">
            Building <span className="text-blue-400">Stylish</span> Digital Solutions
          </h2>
          <p className="text-gray-400 max-w-md mx-auto md:mx-0">
            I design and develop high-end web experiences with modern
            technologies, clean code, and a focus on performance.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="bg-blue-500/90 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
            >
              Request a Quote
            </a>
            <a
              href="#services"
              className="border border-blue-400 text-blue-400 px-6 py-2 rounded-full hover:bg-blue-400/10 transition"
            >
              View Services
            </a>
          </div>
        </motion.div>
      </section>
      {/* Services Section */}
      <section
        id="services"
        className="bg-[#0B0F19] py-24 border-t border-gray-800"
      >
        <div className="max-w-6xl mx-auto px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-100 mb-12"
          >
            Our <span className="text-blue-400">Services</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Service Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111827] p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-400/40 transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Web Development
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Responsive, high-performance websites crafted with the latest technologies for scalability and speed.
              </p>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#111827] p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-400/40 transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Mobile Solutions
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Beautiful cross-platform mobile applications that deliver great user experiences on any device.
              </p>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#111827] p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-400/40 transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Software Consulting
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Professional advice and development strategies to help businesses modernize and scale effectively.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="bg-[#0B0F19] py-24 border-t border-gray-800"
      >
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-100 mb-6"
          >
            Get <span className="text-blue-400">in Touch</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Have a project in mind or need a quote? Fill out the form below, and
            I’ll get back to you within 24 hours.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 px-4 py-3 rounded-lg bg-[#111827] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-3 rounded-lg bg-[#111827] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500/90 hover:bg-blue-600 text-white px-8 py-3 rounded-full shadow-md transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
      {/* Contact Info Section */}
      <section className="bg-[#0B0F19] py-12 border-t border-gray-800 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">
            Prefer to reach out directly?
          </h3>

          <p className="text-gray-400">
            Call me at{" "}
            <a
              href="tel:+13055551234"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              (786) 576-8083
            </a>
          </p>

          <p className="text-gray-400">
            Or send an email to{" "}
            <a
              href="mailto:mollinedowebservices@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              mollinedowebservices@gmail.com
            </a>
          </p>
        </motion.div>
      </section>
      {/* Footer */}
      <footer className="bg-[#0B0F19] border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-300 font-medium">Mollinedo Software Solutions</span> — All Rights Reserved.
        </p>
      </footer>



    </main>
  );
}
