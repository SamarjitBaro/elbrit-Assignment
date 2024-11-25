import React from "react";
import Image from "next/image";
import { Ingredients } from "./Ingredients";
export const Main2 = () => {
  const items = [
    {
      image1: "/icon1.png",
      header: "Clinically Studied",
      paragraph: (
        <>
          All products that we offer have
          <br /> undergone lab and safety tests
        </>
      ),
    },
    {
      image1: "/icon2.png",
      header: "Vegetarian Friendly",
      paragraph: (
        <>
          We have a wide selection of <br /> vegetarian products to meet your
          needs
        </>
      ),
    },
    {
      image1: "/icon3.png",
      header: "Made In India",
      paragraph: (
        <>
          Shop local and explore health products
          <br /> made right here in India
        </>
      ),
    },
    {
      image1: "/icon4.png",
      header: "Free Shipping",
      paragraph: (
        <>
          We deliver to your door with no <br /> shipping costs on your orders
        </>
      ),
    },
    {
      image1: "/icon5.png",
      header: "No Risk",
      paragraph: (
        <>
          We ensure that all products are safe
          <br /> and within their use-by date
        </>
      ),
    },
    {
      image1: "/icon6.png",
      header: "GMO Free",
      paragraph: (
        <>
          Natural, no modified products and <br /> derivatives for those who
          need it
        </>
      ),
    },
  ];
  return (
    <>
      <div className=" w-screen bg-[#17414F]  md:left-1/2 md:transform md:-translate-x-1/2  flex  justify-center rounded-[60px] min-h-[430px] md:absolute levitate">
        <div className="grid grid-cols-1  top-[-60px] sm:grid-cols-2 lg:grid-cols-3 w-[90%] gap-4  min-h-[250px] content">
          {items.map((item, index) => (
            <div
              key={index}
              className=" flex flex-col justify-center items-center text-white p-4 rounded-md"
            >
              <Image
                alt={item.header}
                width={90}
                height={90}
                quality={100}
                src={item.image1}
                className="mb-4"
              />
              <h2 className="font-medium textx-[#FFFFFF] text-[19px] text-center">
                {item.header}
              </h2>
              <p className="text-center text-[#D9D9D9] mt-2 text-[12px] leading-4 font-normal">
                {item.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Ingredients />
    </>
  );
};
