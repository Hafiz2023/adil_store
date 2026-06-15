"use client";

import { motion } from "framer-motion";

/**
 * Newsletter Component
 * Provides a subscription form for users to join the mailing list.
 * Includes form validation and responsive layout.
 */
export default function Newsletter() {
  return (
    <section className="bg-gray-400 text-white py-16 px-6 md:px-12 lg:px-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-4"
      >
        Subscribe to Our Newsletter
      </motion.h2>
      <p className="text-gray-300 mb-6">
        Be the first to know about new collections, exclusive offers, and style
        tips.
      </p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-lg mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full sm:w-auto flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
          required
        />
        <button
          type="submit"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Subscribe
        </button>
      </motion.form>
    </section>
  );
}
