"use client";
import { motion , AnimatePresence} from "framer-motion";
import { useState } from "react";

export default function Contact() {
    const [showMessage, setShowMessage] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formspree.io/f/xpwkaroa", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setShowMessage(true);
                e.target.reset();
                setTimeout(() => setShowMessage(false), 1500);
            } else {
                console.error("Form submission failed:", response.statusText);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <section
            id="contact"
            className="bg-[#0B0F19] py-24 border-t border-gray-800"
        >
            <div className="max-w-4xl mx-auto px-8 text-center">
                {/* === Heading === */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-gray-100 mb-6"
                >
                    Get <span className="text-blue-400">in Touch</span>
                </motion.h2>

                {/* === Subtext === */}
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

                {/* === Contact Form === */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col md:flex-row gap-6">
                        <input
                            required
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="flex-1 px-4 py-3 rounded-lg bg-[#111827] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"
                        />
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="flex-1 px-4 py-3 rounded-lg bg-[#111827] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"
                        />
                    </div>

                    <textarea
                        required
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-blue-500/90 hover:bg-blue-600 text-white px-8 py-3 rounded-full shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={showMessage} // prevents spamming the button
                    >
                        Send Message
                    </button>
                </motion.form>

                {/* === Success Message === */}
                <AnimatePresence>
                    {showMessage && (
                        <motion.div
                            key="contact-success"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}     // 👈 fade & slide out
                            transition={{ duration: 0.3 }}    // 👈 shorter animation
                            className="bg-blue-500/90 text-white py-2 px-4 rounded-lg mt-6 shadow-md inline-block"
                        >
                            We’ll be getting back to you within 24 hours!
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
