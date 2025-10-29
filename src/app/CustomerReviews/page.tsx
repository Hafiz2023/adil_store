"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reviews = [
  {
    name: "Sarah Johnson",
    text: "The quality is outstanding! I absolutely love my new hoodie. Shipping was fast too!",
    image: "/c1.jpg",
    rating: 5,
  },
  {
    name: "Michael Brown",
    text: "Great customer support and excellent packaging. Worth every penny!",
    image: "/c2.jpg",
    rating: 4,
  },
  {
    name: "Emma Wilson",
    text: "Stylish and comfortable! I’ll definitely be ordering again.",
    image: "/c3.jpg",
    rating: 5,
  },
];

export default function CustomerReviews() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">What Our Customers Say</h2>
        <p className="text-gray-500 mt-2">Real reviews from our valued customers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={r.image}
                alt={r.name}
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{r.name}</h3>
                <div className="flex text-yellow-400">
                  {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">{r.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
