"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

const products = [
  { id: 1, name: "Mac Low Runner", brand: "Fear of God", price: "$799.00", image: "/sale-women/1 (1).jpg" },
  { id: 2, name: "Loafer", brand: "Fear of God", price: "$670.00", image: "/sale-women/1 (2).jpg" },
  { id: 3, name: "Eva Runner", brand: "Fear of God", price: "$188.00", image: "/sale-women/1 (3).jpg" },
  { id: 4, name: "8 Tee", brand: "Fear of God", price: "$349.00", image: "/sale-women/1 (4).jpg" },
  { id: 5, name: "French Terry Hoodie", brand: "Fear of God", price: "$579.00", image: "/sale-women/1 (5).jpg" },
  { id: 6, name: "Fear of God Tee", brand: "Fear of God", price: "$345.00", image: "/sale-women/1 (6).jpg" },
  { id: 7, name: "Thunderbird Tee", brand: "Fear of God", price: "$349.00", image: "/sale-women/1 (7).jpg" },
  ...Array.from({ length: 41 }, (_, i) => ({
    id: i + 8,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "$579.00",
    image: `/sale-women/1 (${i + 8}).jpg`,
  })),
];

export default function Sale_women() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrev = () => {
    setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : products.length - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev! < products.length - 1 ? prev! + 1 : 0));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* --- Hero Section --- */}
      <section className="relative w-full h-[100vh] overflow-hidden">
        <Image
          src="/sale-women/1 (1).jpg"
          alt="Women's Collection Hero"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold tracking-wide drop-shadow-lg"
          >
            Women’s Collection
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl"
          >
            Explore timeless fashion from <strong>Fear of God</strong> — designed for elegance, comfort, and style.
          </motion.p>
        </div>
      </section>

      {/* --- Product Grid --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Explore All Products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(index)}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden flex flex-col items-center cursor-pointer"
            >
              <div className="relative w-full h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{product.brand}</h3>
                <p className="text-sm text-gray-500">{product.name}</p>

                {/* ⭐ Star Rating */}
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

      {/* --- Fullscreen Image Modal --- */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 transition-all">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white hover:text-gray-400 transition"
          >
            <X size={35} />
          </button>
          <button
            onClick={handlePrev}
            className="absolute left-5 text-white hover:text-gray-400 transition"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="relative w-[90%] md:w-[60%] h-[70vh]">
            <Image
              src={products[selectedImage].image}
              alt={products[selectedImage].name}
              fill
              className="object-contain rounded-lg"
            />
          </div>

          <button
            onClick={handleNext}
            className="absolute right-5 text-white hover:text-gray-400 transition"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </main>
  );
}
