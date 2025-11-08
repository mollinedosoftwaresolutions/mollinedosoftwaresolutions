"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../app/components/navbar.js";
import Hero from "../app/components/hero.js";
import Services from "../app/components/services.js";
import Contact from "./components/contact.js";
import ContactInfo from "./components/contact_info.js";
export default function Home() {
  

  return (
    <main className="min-h-screen bg-[#0B0F19] text-gray-100">
      {/* Navbar */}
      <Navbar />
      {/* Spacer so content isn’t hidden under sticky nav */}
      <div className="pt-24"></div>
      {/* Hero Section */}
      <Hero />
      {/* Services Section */}
      <Services/>
      {/* Contact Section */}
      <Contact />
      {/* Contact Info Section */}
      <ContactInfo />
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
