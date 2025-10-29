"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Mac Low Runner",
    brand: "Fear of God",
    price: "Rs. 223,300.00",
    image: "/mens-selection/1 (1).jpg",
  },
  {
    id: 2,
    name: "Loafer",
    brand: "Fear of God",
    price: "Rs. 187,100.00",
    image: "/mens-selection/1 (2).jpg",
  },
  {
    id: 3,
    name: "Eva Runner",
    brand: "Fear of God",
    price: "Rs. 52,400.00",
    image: "/mens-selection/1 (3).jpg",
  },
  {
    id: 4,
    name: "8 Tee",
    brand: "Fear of God",
    price: "Rs. 98,600.00",
    image: "/mens-selection/1 (4).jpg",
  },
  {
    id: 5,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/mens-selection/1 (5).jpg",
  },
  {
    id: 6,
    name: "Fear of God Tee",
    brand: "Fear of God",
    price: "Rs. 96,800.00",
    image: "/mens-selection/1 (6).jpg",
  },
  {
    id: 7,
    name: "Thunderbird Tee",
    brand: "Fear of God",
    price: "Rs. 98,600.00",
    image: "/mens-selection/1 (7).jpg",
  },
];

export default function Mens_product() {
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
    <div className="relative">
      {/* --- Product Grid --- */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
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

              {/* Stars */}
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

      {/* --- Image Viewer Modal --- */}
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
    </div>
  );
}
