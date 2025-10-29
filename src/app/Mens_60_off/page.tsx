"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Star } from "lucide-react";

const products = [
  // same data you provided
  ...Array.from({ length: 48 }, (_, i) => ({
    id: i + 1,
    name: "Fear of God Essential",
    brand: "Fear of God",
    price: `Rs. ${(52000 + i * 1000).toLocaleString("en-US")}.00`,
    image: `/60-off-men/1 (${i + 1}).jpg`,
  })),
];

export default function Mens60Off() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openViewer = (index: number) => {
    setCurrentIndex(index);
    setIsViewerOpen(true);
  };

  const closeViewer = () => setIsViewerOpen(false);
  const showNext = () => setCurrentIndex((prev) => (prev + 1) % products.length);
  const showPrev = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* --- Hero Section --- */}
      <section className="relative w-full h-[100vh] overflow-hidden">
        <Image
          src="/60-off-men/1 (1).jpg"
          alt="60% Off Men's Collection"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold tracking-wide drop-shadow-lg"
          >
            60% OFF – Men’s Collection
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl"
          >
            Premium designs from <strong>Fear of God</strong> — now available at unbeatable discounts.
          </motion.p>
        </div>
      </section>

      {/* --- Product Grid --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Explore All Discounted Products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden flex flex-col items-center cursor-pointer"
              onClick={() => openViewer(index)}
            >
              <div className="relative w-full h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{product.brand}</h3>
                <p className="text-sm text-gray-500">{product.name}</p>

                {/* Star Rating */}
                <div className="flex justify-center mt-2 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-base font-bold mt-2">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Image Viewer Modal --- */}
      {isViewerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <button
            onClick={closeViewer}
            className="absolute top-6 right-6 text-white hover:text-gray-400"
          >
            <X size={32} />
          </button>

          <button
            onClick={showPrev}
            className="absolute left-6 text-white hover:text-gray-400"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="relative w-[90vw] h-[80vh] max-w-5xl">
            <Image
              src={products[currentIndex].image}
              alt={products[currentIndex].name}
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={showNext}
            className="absolute right-6 text-white hover:text-gray-400"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </main>
  );
}
