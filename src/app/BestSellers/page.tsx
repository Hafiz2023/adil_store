"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const bestSellers = [
  {
    id: 1,
    name: "Fear of God Hoodie",
    brand: "Essentials",
    price: "$289.00",
    rating: 5,
    image: "/Home-page-pic/1 (5).jpg",
  },
  {
    id: 2,
    name: "Men’s Suede Loafers",
    brand: "Gucci",
    price: "$750.00",
    rating: 4,
    image: "/Home-page-pic/1 (3).jpg",
  },
  {
    id: 3,
    name: "Classic Leather Bag",
    brand: "Prada",
    price: "$1,250.00",
    rating: 5,
    image: "/Home-page-pic/1 (9).jpg",
  },
  {
    id: 4,
    name: "Minimalist Tee",
    brand: "Fear of God",
    price: "$120.00",
    rating: 4,
    image: "/Home-page-pic/1 (6).jpg",
  },
];

export default function BestSellers() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white px-6 md:px-12 lg:px-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
          Best Sellers
        </h2>
        <p className="text-gray-500 mt-2">Our most loved products of the season</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {bestSellers.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
          >
            <div className="relative">
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={400}
                className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
                {item.brand}
              </div>
            </div>

            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <div className="flex justify-center mt-2 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < item.rating
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <p className="text-lg font-bold text-gray-900">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
