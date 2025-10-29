"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Star } from "lucide-react";

const products = Array.from({ length: 48 }, (_, i) => ({
  id: i + 1,
  name: "Fear of God Essential",
  brand: "Fear of God",
  price: `$${(299 + i * 10).toFixed(2)}`,
  image: `/new-arrivals-men/1 (${i + 1}).jpg`,
}));

export default function New_Arrivals_Men() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openViewer = (index: number) => {
    setCurrentIndex(index);
    setIsViewerOpen(true);
  };

  const closeViewer = () => setIsViewerOpen(false);
  const showNext = () => setCurrentIndex((prev) => (prev + 1) % products.length);
  const showPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

  return (
    <main className="relative bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* --- Hero Section --- */}
      <section className="relative w-full h-[100vh] overflow-hidden">
        <Image
          src="/new-arrivals-men/1 (2).jpg"
          alt="New Arrivals Hero"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
            New Arrivals – Men’s Collection
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
            Discover the latest arrivals from <strong>Fear of God</strong>,
            where luxury meets timeless design.
          </p>
        </div>
      </section>

      {/* --- Product Grid --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Explore the Collection
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="text-center mt-3">
                <h3 className="text-lg font-semibold">{product.brand}</h3>
                <p className="text-sm text-gray-500">{product.name}</p>

                {/* Star Rating */}
                <div className="flex justify-center mt-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-base font-bold mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Fullscreen Image Viewer --- */}
      {isViewerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          {/* Close Button */}
          <button
            onClick={closeViewer}
            className="absolute top-6 right-6 text-white hover:text-gray-400"
          >
            <X size={32} />
          </button>

          {/* Prev Button */}
          <button
            onClick={showPrev}
            className="absolute left-6 text-white hover:text-gray-400"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <div className="relative w-[90vw] h-[80vh] max-w-5xl">
            <Image
              src={products[currentIndex].image}
              alt={products[currentIndex].name}
              fill
              className="object-contain transition-all duration-500"
            />
          </div>

          {/* Next Button */}
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
