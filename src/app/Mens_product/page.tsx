import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Mac Low Runner",
    brand: "Fear of God",
    price: "Rs. 223,300.00",
    image: "/mens-selection/1 (1).jpg", // Update with actual image paths
  },
  {
    id: 2,
    name: "Loafer",
    brand: "Fear of God",
    price: "Rs. 187,100.00",
    image: "/mens-selection/1 (2).jpg", // Update with actual image paths
  },
  {
    id: 3,
    name: "Eva Runner",
    brand: "Fear of God",
    price: "Rs. 52,400.00",
    image: "/mens-selection/1 (3).jpg", // Update with actual image paths
  },
  {
    id: 4,
    name: "8 Tee",
    brand: "Fear of God",
    price: "Rs. 98,600.00",
    image: "/mens-selection/1 (4).jpg", // Update with actual image paths
  },
  {
    id: 5,
    name: "French Terry Hoodie",
    brand: "Fear of God",
    price: "Rs. 162,200.00",
    image: "/mens-selection/1 (5).jpg", // Update with actual image paths
  },
  {
    id: 6,
    name: "Fear of God Tee",
    brand: "Fear of God",
    price: "Rs. 96,800.00",
    image: "/mens-selection/1 (6).jpg", // Update with actual image paths
  },
  {
    id: 7,
    name: "Thunderbird Tee",
    brand: "Fear of God",
    price: "Rs. 98,600.00",
    image: "/mens-selection/1 (7).jpg", // Update with actual image paths
  },
];

const Mens_product = () => {
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

export default Mens_product;
