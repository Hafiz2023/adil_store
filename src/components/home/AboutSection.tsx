"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * About Component
 * Presents the brand story and vision in a responsive two-column layout.
 * Features decorative background elements and image hover effects.
 */
export default function About() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Decorative Background Circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-gray-200 to-transparent rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gray-300 to-transparent rounded-full blur-3xl opacity-50" />

      <div className="relative flex flex-col md:flex-row items-center gap-14 z-10">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <div className="relative group">
            <Image
              src="/c3.jpg"
              alt="About Us"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Redefining <span className="text-gray-600">Modern Fashion</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            At <span className="font-semibold text-gray-800">Fear of God</span>, we believe in blending
            timeless design with exceptional craftsmanship. Every piece we create tells a story of
            authenticity, elegance, and individuality.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Our collections embody sophistication and comfort — crafted for those who appreciate
            detail, quality, and effortless style. We’re not just making clothes; we’re shaping a
            lifestyle.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-full shadow-md hover:bg-gray-800 transition-all duration-300"
          >
            Explore Our Story
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
