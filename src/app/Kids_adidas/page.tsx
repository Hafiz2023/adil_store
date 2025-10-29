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
    image: "/kids-adidas/1 (1).jpg",
  },
  {
    id: 2,
    name: "Loafer",
    brand: "Fear of God",
    price: "$669.00",
    image: "/kids-adidas/1 (2).jpg",
  },
  {
    id: 3,
    name: "Eva Runner",
    brand: "Fear of God",
    price: "$279.00",
    image: "/kids-adidas/1 (3).jpg",
  },
  {
    id: 4,
    name: "8 Tee",
    brand: "Fear of God",
    price: "$419.00",
    image: "/kids-adidas/1 (4).jpg",
  },
  {
    id: 5,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "$689.00",
    image: "/kids-adidas/1 (5).jpg",
  },
  {
    id: 6,
    name: "Fear of God Tee",
    brand: "Fear of God",
    price: "$499.00",
    image: "/kids-adidas/1 (6).jpg",
  },
];

export default function Kids_adidas() {
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
    <main className="min-h-screen bg-white py-10 px-4 md:px-10 lg:px-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Kids Adidas Collection
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
            onClick={() => openViewer(index)}
          >
            <div className="relative w-full h-[300px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="text-center p-4">
              <h3 className="text-lg font-semibold text-gray-900">{product.brand}</h3>
              <p className="text-sm text-gray-500">{product.name}</p>
              <p className="text-base font-bold text-gray-800 mt-2">{product.price}</p>

              <div className="flex justify-center mt-2 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

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
