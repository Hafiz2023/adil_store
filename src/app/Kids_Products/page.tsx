import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Mac Low Runner",
    brand: "Fear of God",
    price: "Rs. 223,300.00",
    image: "/kids-cdg-play/117631_1.jpg", // Update with actual image paths
  },
  {
    id: 2,
    name: "Loafer",
    brand: "Fear of God",
    price: "Rs. 187,100.00",
    image: "/kids-cdg-play/117631_2.jpg", // Update with actual image paths
  },
  {
    id: 3,
    name: "Eva Runner",
    brand: "Fear of God",
    price: "Rs. 52,400.00",
    image: "/kids-cdg-play/117632_1_1.jpg", // Update with actual image paths
  },
  {
    id: 4,
    name: "8 Tee",
    brand: "Fear of God",
    price: "Rs. 98,600.00",
    image: "/kids-cdg-play/117632_2_1.jpg", // Update with actual image paths
  },
  {
    id: 5,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/kids-cdg-play/133398_1.jpg", // Update with actual image paths
  },
  {
    id: 6,
    name: "Fear of God Tee",
    brand: "Fear of God",
    price: "Rs. 96,800.00",
    image: "/kids-cdg-play/133398_2.jpg", // Update with actual image paths
  },
  {
    id: 7,
    name: "Thunderbird Tee",
    brand: "Fear of God",
    price: "Rs. 98,600.00",
    image: "/kids-cdg-play/133399_1.jpg", // Update with actual image paths
  },
  {
    id: 8,
    name: "Mac Low Runner",
    brand: "Fear of God",
    price: "Rs. 223,300.00",
    image: "/kids-cdg-play/133399_2.jpg", // Update with actual image paths
  },
  {
    id: 9,
    name: "Loafer",
    brand: "Fear of God",
    price: "Rs. 187,100.00",
    image: "/kids-cdg-play/133403_1.jpg", // Update with actual image paths
  },
  {
    id: 10,
    name: "Eva Runner",
    brand: "Fear of God",
    price: "Rs. 52,400.00",
    image: "/kids-cdg-play/133404_1.jpg", // Update with actual image paths
  },
  {
    id: 11,
    name: "8 Tee",
    brand: "Fear of God",
    price: "Rs. 98,600.00",
    image: "/kids-cdg-play/133404_2.jpg", // Update with actual image paths
  },
  {
    id: 12,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/kids-cdg-play/149160-1.jpg", // Update with actual image paths
  },
  {
    id: 13,
    name: "Fear of God Tee",
    brand: "Fear of God",
    price: "Rs. 96,800.00",
    image: "/kids-cdg-play/149160-4.jpg", // Update with actual image paths
  },
  {
    id: 14,
    name: "Thunderbird Tee",
    brand: "Fear of God",
    price: "Rs. 98,600.00",
    image: "/kids-cdg-play/149161-1.jpg", // Update with actual image paths
  },
  {
    id: 15,
    name: "Mac Low Runner",
    brand: "Fear of God",
    price: "Rs. 223,300.00",
    image: "/kids-cdg-play/149161-4.jpg", // Update with actual image paths
  },
  {
    id: 16,
    name: "Loafer",
    brand: "Fear of God",
    price: "Rs. 187,100.00",
    image: "/kids-cdg-play/149162-1.jpg", // Update with actual image paths
  },
  {
    id: 17,
    name: "Eva Runner",
    brand: "Fear of God",
    price: "Rs. 52,400.00",
    image: "/kids-cdg-play/149162-4.jpg", // Update with actual image paths
  },
  {
    id: 18,
    name: "8 Tee",
    brand: "Fear of God",
    price: "Rs. 98,600.00",
    image: "/kids-cdg-play/149163-1.jpg", // Update with actual image paths
  },
  {
    id: 19,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/kids-cdg-play/149163-4.jpg", // Update with actual image paths
  },
  {
    id: 20,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/kids-denham/110915_1.jpg", // Update with actual image paths
  },
  {
    id: 21,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/kids-denham/110915_2.jpg", // Update with actual image paths
  },
  {
    id: 22,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/kids-denham/110915_3.jpg", // Update with actual image paths
  },
  {
    id: 23,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/kids-denham/110915_4.jpg", // Update with actual image paths
  },
  {
    id: 24,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/kids-denham/111273_1.jpg", // Update with actual image paths
  },
  {
    id: 25,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/kids-denham/111273_2.jpg", // Update with actual image paths
  },
  {
    id: 26,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/kids-denham/111273_3.jpg", // Update with actual image paths
  },
  {
    id: 27,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/kids-denham/111273_4.jpg", // Update with actual image paths
  },
];

const Kids_Products = () => {
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

export default Kids_Products;
