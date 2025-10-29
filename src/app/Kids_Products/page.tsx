"use client";

import Image from "next/image";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, X } from "lucide-react";

const products = [
  { id: 1, name: "Mac Low Runner", brand: "Fear of God", price: "$799.00", image: "/kids-cdg-play/117631_1.jpg" },
  { id: 2, name: "Loafer", brand: "Fear of God", price: "$650.00", image: "/kids-cdg-play/117631_2.jpg" },
  { id: 3, name: "Eva Runner", brand: "Fear of God", price: "$279.00", image: "/kids-cdg-play/117632_1_1.jpg" },
  { id: 4, name: "8 Tee", brand: "Fear of God", price: "$499.00", image: "/kids-cdg-play/117632_2_1.jpg" },
  { id: 5, name: "French Terry Hoodie", brand: "Fear of God", price: "$750.00", image: "/kids-cdg-play/133398_1.jpg" },
  { id: 6, name: "Fear of God Tee", brand: "Fear of God", price: "$320.00", image: "/kids-cdg-play/133398_2.jpg" },
  { id: 7, name: "Thunderbird Tee", brand: "Fear of God", price: "$410.00", image: "/kids-cdg-play/133399_1.jpg" },
  { id: 8, name: "Mac Low Runner", brand: "Fear of God", price: "$799.00", image: "/kids-cdg-play/133399_2.jpg" },
  { id: 9, name: "Loafer", brand: "Fear of God", price: "$650.00", image: "/kids-cdg-play/133403_1.jpg" },
  { id: 10, name: "Eva Runner", brand: "Fear of God", price: "$279.00", image: "/kids-cdg-play/133404_1.jpg" },
];

export default function KidsProductsPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrev = () => {
    setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : products.length - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev! < products.length - 1 ? prev! + 1 : 0));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 🖼️ Hero Section */}
      <div className="relative w-full h-[90vh]">
        <Image
          src="/kids-cdg-play/117631_1.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
            Fear of God Kids Collection
          </h1>
        </div>
      </div>

      {/* 🛍️ Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 py-12 bg-gray-50">
        {products.map((product, index) => (
          <div
            key={product.id}
            onClick={() => setSelectedImage(index)}
            className="cursor-pointer flex flex-col items-center bg-white p-4 rounded-2xl shadow hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-full h-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold">{product.brand}</h3>
              <p className="text-gray-500 text-sm">{product.name}</p>
              <div className="flex items-center justify-center mt-2 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-base font-bold mt-2 text-gray-800">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 🖼️ Fullscreen Image Modal */}
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
    </div>
  );
}
