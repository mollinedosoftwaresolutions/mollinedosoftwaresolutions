"use client";
import { motion } from "framer-motion"; // ⬅️ Add this import at the top

export default function Hero() {

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-8 py-20 gap-10"
    >



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
          I build tailored websites, intelligent chatbots, and impactful SEO strategies that elevate your brand and help more customers find you.
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

  );
}