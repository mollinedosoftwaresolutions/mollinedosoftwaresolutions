"use client";   
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-[#0B0F19] border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-300 font-medium">Mollinedo Software Solutions</span> — All Rights Reserved.
        </p>
      </footer>
    );
}