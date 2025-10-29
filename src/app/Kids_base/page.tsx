"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Mac Low Runner",
    brand: "Fear of God",
    price: "Rs. 223,300.00",
    image: "/kids-balenciaga/1 (1).jpg",
  },
  {
    id: 2,
    name: "Loafer",
    brand: "Fear of God",
    price: "Rs. 187,100.00",
    image: "/kids-balenciaga/1 (2).jpg",
  },
  {
    id: 3,
    name: "Eva Runner",
    brand: "Fear of God",
    price: "Rs. 52,400.00",
    image: "/kids-balenciaga/1 (3).jpg",
  },
  {
    id: 4,
    name: "8 Tee",
    brand: "Fear of God",
    price: "Rs. 98,600.00",
    image: "/kids-balenciaga/1 (4).jpg",
  },
  {
    id: 5,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/kids-balenciaga/1 (5).jpg",
  },
  {
    id: 6,
    name: "Fear of God Tee",
    brand: "Fear of God",
    price: "Rs. 96,800.00",
    image: "/kids-balenciaga/1 (6).jpg",
  },
];

export default function KidsBalenciaga() {
  const [selected, setSelected] = useState<number | null>(null);

  const nextImage = () => {
    if (selected !== null) setSelected((selected + 1) % products.length);
  };

  const prevImage = () => {
    if (selected !== null)
      setSelected((selected - 1 + products.length) % products.length);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 py-16 px-6 md:px-12 lg:px-20 mt-20">
      {/* Page Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Kids Balenciaga Collection
      </motion.h1>

      {/* Product Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer transition-transform duration-500 hover:shadow-2xl"
            onClick={() => setSelected(index)}
          >
            <div className="relative w-full h-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="text-center p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.brand}</h3>
              <p className="text-gray-500 text-sm">{product.name}</p>
              <p className="text-base font-bold mt-2 text-gray-900">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
            >
              <X size={36} />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-6 text-white hover:text-gray-300 transition"
            >
              <ArrowLeft size={40} />
            </button>

            {/* Image Display */}
            <motion.div
              key={products[selected].id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-[90%] md:w-[60%] h-[70vh]"
            >
              <Image
                src={products[selected].image}
                alt={products[selected].name}
                fill
                className="object-contain rounded-xl"
              />
            </motion.div>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-6 text-white hover:text-gray-300 transition"
            >
              <ArrowRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
