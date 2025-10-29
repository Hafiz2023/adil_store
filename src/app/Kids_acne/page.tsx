"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Mac Low Runner",
    brand: "Fear of God",
    price: "$799.00",
    image: "/kids-acne/1 (1).jpg",
  },
  {
    id: 2,
    name: "Loafer",
    brand: "Fear of God",
    price: "$699.00",
    image: "/kids-acne/1 (2).jpg",
  },
  {
    id: 3,
    name: "Eva Runner",
    brand: "Fear of God",
    price: "$499.00",
    image: "/kids-acne/1 (3).jpg",
  },
  {
    id: 4,
    name: "8 Tee",
    brand: "Fear of God",
    price: "$349.00",
    image: "/kids-acne/1 (4).jpg",
  },
  {
    id: 5,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "$599.00",
    image: "/kids-acne/1 (5).jpg",
  },
  {
    id: 6,
    name: "Fear of God Tee",
    brand: "Fear of God",
    price: "$289.00",
    image: "/kids-acne/1 (6).jpg",
  },
  {
    id: 7,
    name: "Fear of God Tee",
    brand: "Fear of God",
    price: "$289.00",
    image: "/kids-acne/1 (7).jpg",
  },
  {
    id: 8,
    name: "Fear of God Tee",
    brand: "Fear of God",
    price: "$289.00",
    image: "/kids-acne/1 (8).jpg",
  },
  {
    id: 9,
    name: "Fear of God Tee",
    brand: "Fear of God",
    price: "$289.00",
    image: "/kids-acne/1 (9).jpg",
  },
  {
    id: 10,
    name: "Fear of God Tee",
    brand: "Fear of God",
    price: "$289.00",
    image: "/kids-acne/1 (10).jpg",
  },
];

export default function Kids_acne() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openViewer = (index: number) => {
    setCurrentIndex(index);
    setIsViewerOpen(true);
  };

  const closeViewer = () => setIsViewerOpen(false);

  const showNext = () =>
    setCurrentIndex((prev) => (prev + 1) % products.length);

  const showPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

  return (
    <main className="bg-gradient-to-b from-pink-50 to-white text-gray-900 min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">
        Kids Acne Studios Collection
      </h1>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => openViewer(index)}
          >
            <div className="relative w-full overflow-hidden rounded-lg shadow-md">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
              />
            </div>

            <div className="text-center mt-3">
              <h3 className="text-lg font-semibold">{product.brand}</h3>
              <p className="text-sm text-gray-500">{product.name}</p>

              {/* ⭐ Star Ratings */}
              <div className="flex justify-center mt-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-base font-bold mt-1">{product.price}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Fullscreen Image Viewer */}
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
              className="object-contain transition-all duration-500"
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
