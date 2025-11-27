"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Mac Low Runner",
    brand: "Fear of God",
    price: "$799.00",
    image: "/c1.jpg",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Eva Runner",
    brand: "Fear of God",
    price: "$299.00",
    image: "/Home-page-pic/1 (3).jpg",
    rating: 4.2,
  },
  {
    id: 4,
    name: "8 Tee",
    brand: "Fear of God",
    price: "$349.00",
    image: "/Home-page-pic/1 (4).jpg",
    rating: 4.8,
  },
  {
    id: 5,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "$699.00",
    image: "/Home-page-pic/1 (5).jpg",
    rating: 5,
  },
  {
    id: 6,
    name: "Fear of God Tee",
    brand: "Fear of God",
    price: "$329.00",
    image: "/Home-page-pic/1 (6).jpg",
    rating: 4.3,
  },
  {
    id: 7,
    name: "Fear of God Tee",
    brand: "Fear of God",
    price: "$329.00",
    image: "/Home-page-pic/1 (7).jpg",
    rating: 4.0,
  },
  {
    id: 9,
    name: "Fear of God Tee",
    brand: "Fear of God",
    price: "$329.00",
    image: "/Home-page-pic/1 (9).jpg",
    rating: 4.1,
  },
  {
    id: 10,
    name: "Fear of God Tee",
    brand: "Fear of God",
    price: "$329.00",
    image: "/Home-page-pic/1 (10).jpg",
    rating: 4.4,
  },
];

const Hero_page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        Featured Collection
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.03 }}
            className="h-full"
          >
            <Card className="group h-full overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-4">
                {/* Image Section */}
                <div className="relative overflow-hidden rounded-xl">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="object-cover w-full h-64 rounded-xl"
                    />
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className="text-center mt-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {product.brand}
                  </h3>
                  <p className="text-sm text-muted-foreground">{product.name}</p>

                  {/* Price */}
                  <p className="text-base font-semibold text-primary mt-1">
                    {product.price}
                  </p>

                  {/* Rating Stars */}
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => {
                      const full = i < Math.floor(product.rating);
                      const half = i < product.rating && i >= Math.floor(product.rating);
                      return (
                        <Star
                          key={i}
                          size={18}
                          className={`${full
                            ? "text-yellow-500 fill-yellow-500"
                            : half
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                            }`}
                        />
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hero_page;
