"use client";
import { delay, motion } from "framer-motion";

export default function Services() {
  return (
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
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#111827] p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-400/40 transition-all"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Website Design & Development
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Custom, high-performance websites with up to five sections — Home, About, Services, Contact, and more. Includes navbar, footer, and responsive design.
              Add-ons like booking systems or extra sections available upon request.
            </p>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#111827] p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-400/40 transition-all"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Chatbot Setup & Integration
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Intelligent chatbot design, training, and integration for new or existing sites.
              Perfect for automating inquiries and improving engagement.
              Can be bundled with new websites or added separately.
            </p>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#111827] p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-400/40 transition-all"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              SEO & Google Indexing
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Optimize your website for search visibility and get listed on Google’s business pages.
              Boost local discovery and help clients find your brand first.
            </p>
          </motion.div>
        </div>
      </div>
    </section>


  );
}