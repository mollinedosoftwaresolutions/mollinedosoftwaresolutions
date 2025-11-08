"use client";
import { motion } from "framer-motion";
export default function Contact() {
  return (
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
            href="tel:+17865768083"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            (786) 576-8083
          </a>
        </p>
        <p className="text-gray-400">
          Hablamos español!          
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
  );
}