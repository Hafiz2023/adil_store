"use client";
import React from "react";
import Image from "next/image";

const HomeImage = () => {
  return (
    <div>
      {/* Section for Men */}
      <div>
        <div>
          <Image
            src="/Man.png"
            alt="Man Banner"
            width={2000}
            height={2200}
            className="w-full h-auto"
          />
        </div>
        <div className=" grid grid-cols-2  md:grid-cols-2 md:gap-2">
          <Image
            src="/MainPics/MansBag.png"
            alt="Men's Bag"
            width={1100}
            height={1200}
            className="w-full h-auto"
          />
          <Image
            src="/MainPics/Men_s-Clothing.png"
            alt="Men's Clothing"
            width={1100}
            height={1200}
            className="w-full h-auto"
          />
          <Image
            src="/MainPics/Men_s-Accessories.png"
            alt="Men's Accessories"
            width={1100}
            height={1200}
            className="w-full h-auto"
          />
          <Image
            src="/MainPics/Men_s-Shoe.png"
            alt="Men's Shoes"
            width={1100}
            height={1200}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Section for Women */}
      <div>
        <div>
          <Image
            src="/WomanPic/Women.png"
            alt="Women Banner"
            width={2000}
            height={2200}
            className="w-full h-auto"
          />
        </div>
        <div className="grid grid-cols-2  md:grid-cols-2 md:gap-2">
          <Image
            src="/WomanPic/Women_s-Bag.png"
            alt="Women's Bag"
            width={1100}
            height={1200}
            className="w-full h-auto"
          />
          <Image
            src="/WomanPic/Women_s-Clothing.png"
            alt="Women's Clothing"
            width={1100}
            height={1200}
            className="w-full h-auto"
          />
          <Image
            src="/WomanPic/Women_s-Accessories.png"
            alt="Women's Accessories"
            width={1100}
            height={1200}
            className="w-full h-auto"
          />
          <Image
            src="/WomanPic/Women_s-Shoe.png"
            alt="Women's Shoes"
            width={1100}
            height={1200}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeImage;
