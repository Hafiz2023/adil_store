import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Mac Low Runner",
    brand: "Fear of God",
    price: "Rs. 223,300.00",
    image: "/60-off-female/1 (1).jpg", // Update with actual image paths
  },
  {
    id: 2,
    name: "Loafer",
    brand: "Fear of God",
    price: "Rs. 187,100.00",
    image: "/60-off-female/1 (2).jpg", // Update with actual image paths
  },
  {
    id: 3,
    name: "Eva Runner",
    brand: "Fear of God",
    price: "Rs. 52,400.00",
    image: "/60-off-female/1 (3).jpg", // Update with actual image paths
  },
  {
    id: 4,
    name: "8 Tee",
    brand: "Fear of God",
    price: "Rs. 98,600.00",
    image: "/60-off-female/1 (4).jpg", // Update with actual image paths
  },
  {
    id: 5,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (5).jpg", // Update with actual image paths
  },
  {
    id: 6,
    name: "Fear of God Tee",
    brand: "Fear of God",
    price: "Rs. 96,800.00",
    image: "/60-off-female/1 (6).jpg", // Update with actual image paths
  },
  {
    id: 7,
    name: "Thunderbird Tee",
    brand: "Fear of God",
    price: "Rs. 98,600.00",
    image: "/60-off-female/1 (7).jpg", // Update with actual image paths
  },
  {
    id: 8,
    name: "Mac Low Runner",
    brand: "Fear of God",
    price: "Rs. 223,300.00",
    image: "/60-off-female/1 (8).jpg", // Update with actual image paths
  },
  {
    id: 9,
    name: "Loafer",
    brand: "Fear of God",
    price: "Rs. 187,100.00",
    image: "/60-off-female/1 (9).jpg", // Update with actual image paths
  },
  {
    id: 10,
    name: "Eva Runner",
    brand: "Fear of God",
    price: "Rs. 52,400.00",
    image: "/60-off-female/1 (10).jpg", // Update with actual image paths
  },
  {
    id: 11,
    name: "8 Tee",
    brand: "Fear of God",
    price: "Rs. 98,600.00",
    image: "/60-off-female/1 (11).jpg", // Update with actual image paths
  },
  {
    id: 12,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (12).jpg", // Update with actual image paths
  },
  {
    id: 13,
    name: "Fear of God Tee",
    brand: "Fear of God",
    price: "Rs. 96,800.00",
    image: "/60-off-female/1 (13).jpg", // Update with actual image paths
  },
  {
    id: 14,
    name: "Thunderbird Tee",
    brand: "Fear of God",
    price: "Rs. 98,600.00",
    image: "/60-off-female/1 (14).jpg", // Update with actual image paths
  },
  {
    id: 15,
    name: "Mac Low Runner",
    brand: "Fear of God",
    price: "Rs. 223,300.00",
    image: "/60-off-female/1 (15).jpg", // Update with actual image paths
  },
  {
    id: 16,
    name: "Loafer",
    brand: "Fear of God",
    price: "Rs. 187,100.00",
    image: "/60-off-female/1 (16).jpg", // Update with actual image paths
  },
  {
    id: 17,
    name: "Eva Runner",
    brand: "Fear of God",
    price: "Rs. 52,400.00",
    image: "/60-off-female/1 (17).jpg", // Update with actual image paths
  },
  {
    id: 18,
    name: "8 Tee",
    brand: "Fear of God",
    price: "Rs. 98,600.00",
    image: "/60-off-female/1 (18).jpg", // Update with actual image paths
  },
  {
    id: 19,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (19).jpg", // Update with actual image paths
  },
  {
    id: 20,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (20).jpg", // Update with actual image paths
  },
  {
    id: 21,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (21).jpg", // Update with actual image paths
  },
  {
    id: 22,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (22).jpg", // Update with actual image paths
  },
  {
    id: 23,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (23).jpg", // Update with actual image paths
  },
  {
    id: 24,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (24).jpg", // Update with actual image paths
  },
  {
    id: 25,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (25).jpg", // Update with actual image paths
  },
  {
    id: 26,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (26).jpg", // Update with actual image paths
  },
  {
    id: 27,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (27).jpg", // Update with actual image paths
  },
  {
    id: 28,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (28).jpg", // Update with actual image paths
  },
  {
    id: 29,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (29).jpg", // Update with actual image paths
  },
  {
    id: 30,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (30).jpg", // Update with actual image paths
  },
  {
    id: 31,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (31).jpg", // Update with actual image paths
  },
  {
    id: 32,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (32).jpg", // Update with actual image paths
  },
  {
    id: 33,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (33).jpg", // Update with actual image paths
  },
  {
    id: 34,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (34).jpg", // Update with actual image paths
  },
  {
    id: 35,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (35).jpg", // Update with actual image paths
  },
  {
    id: 36,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (36).jpg", // Update with actual image paths
  },
  {
    id: 37,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (37).jpg", // Update with actual image paths
  },
  {
    id: 38,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (38).jpg", // Update with actual image paths
  },

  {
    id: 39,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (39).jpg", // Update with actual image paths
  },
  {
    id: 40,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (40).jpg", // Update with actual image paths
  },
  {
    id: 41,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (41).jpg", // Update with actual image paths
  },
  {
    id: 42,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (42).jpg", // Update with actual image paths
  },
  {
    id: 43,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (43).jpg", // Update with actual image paths
  },
  {
    id: 44,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (44).jpg", // Update with actual image paths
  },
  {
    id: 45,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (45).jpg", // Update with actual image paths
  },
  {
    id: 46,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (46).jpg", // Update with actual image paths
  },
  {
    id: 47,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (47).jpg", // Update with actual image paths
  },
  {
    id: 48,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/60-off-female/1 (48).jpg", // Update with actual image paths
  },
];

const Female_60_0ff = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col items-center">
          <div className="relative w-full">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="text-center mt-3">
            <h3 className="text-lg font-medium">{product.brand}</h3>
            <p className="text-sm text-gray-500">{product.name}</p>
            <p className="text-base font-semibold mt-1">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Female_60_0ff;
