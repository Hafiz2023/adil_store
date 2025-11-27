"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  rating?: number;
}

export default function BestSellers() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        // Take only the first 4 products for best sellers, or filter by some criteria
        setProducts(data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="py-16 text-center">Loading Best Sellers...</div>;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white px-6 md:px-12 lg:px-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
          Best Sellers
        </h2>
        <p className="text-gray-500 mt-2">Our most loved products of the season</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item, index) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
          >
            <div className="relative h-64 w-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
                {item.category}
              </div>
            </div>

            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 truncate">{item.name}</h3>
              <div className="flex justify-center mt-2 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < (item.rating || 5)
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <p className="text-lg font-bold text-gray-900">${item.price}</p>
            </div>
          </motion.div>
        ))}
        {products.length === 0 && (
          <div className="col-span-full text-center text-gray-500">
            No products found. Check back later!
          </div>
        )}
      </div>
    </section>
  );
}
