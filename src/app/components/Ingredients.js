import React from "react";
import Image from "next/image";
import { Main3 } from "./Main3";
import { Footer } from "./Footer";
export const Ingredients = () => {
  const items = [
    {
      image: "/images/bg1.png",
      header: "Vitamin C",
      paragraph: <>Vitamin C as ascorbic acid</>,
    },
    {
      image: "/images/bg2.png",
      header: "Vitamin B3",
      paragraph: <>Niacin for healthy gut and skin</>,
    },
    {
      image: "/images/bg3.png",
      header: "Magnesium",
      paragraph: (
        <>
          Boost energy and support <br />
          muscle function
        </>
      ),
    },
    {
      image: "/images/bg4.png",
      header: "Hyaluronic Acid",
      paragraph: (
        <>
          For smooth, <br />
          supple and soft skin!
        </>
      ),
    },
    {
      image: "/images/bg5.png",
      header: "Lactobacillus",
      paragraph: (
        <>
          Invigorate your gut <br />
          microbiome
        </>
      ),
    },
  ];

  return (
    <>
      <div className="min-h-[500px]  justify-center mt-1 ingredients">
        <div className="flex  md:justify-between  justify-center px-7 md:px-44 flex-wrap mt-4">
          {/* Ingredients Section */}
          <div className="w-full md:w-[400px] h-auto px-5 py-9 mb-4 md:mb-0">
            <h4 className="text-[#003569] text-[12px] font-semibold">
              INGREDIENTS
            </h4>
            <h2 className="font-semibold text-[#17414F] text-[36px]">
              Better ingredients
            </h2>
            <p className="text-[#666565] mt-4 text-[12px] leading-4 font-normal">
              Only the best when you choose products offered on our platform -
              high-quality ingredients for high quality products!
            </p>
          </div>

          {/* Images Section */}

          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="flex  ml-1  items-center w-[300px] justify-center rounded-xl h-[220px] bg-cover bg-no-repeat relative"
                // style={{
                //   // backgroundImage: `url(${item.image})`,
                //   backgroundSize: "contain", // Ensures the image fits inside the div
                //   backgroundPosition: "center", // Centers the image inside the div
                //   backgroundRepeat: "no-repeat", // Prevents the image from repeating
                // }}
              >
                <Image
                  src={item.image}
                  alt={item.header || "Image"} // Provide a meaningful alt text
                  layout="fill" // Makes the image fill its parent container
                  objectFit="contain" // Ensures the image fits inside the div
                  className="rounded-xl" // Add rounded corners
                />
                <div className="absolute top-3 px-2 md:py-4  py-10 left-4">
                  <h1 className="md:text-[22px] text-[4vw] mb-2 font-semibold text-[#18414E]">
                    {item.header}
                  </h1>
                  <p className="text-[14px]  leading-4 text-[#727272] font-medium">
                    {item.paragraph}
                  </p>
                  <h3 className="text-[12px] md:mt-20 mt-12 font-semibold underline decoration-[#18414E] text-[#18414E]">
                    SEE MORE
                  </h3>
                </div>
              </div>
            );
          })}
          <div className="   flex justify-center py-3 items-start">
            {" "}
            <Image
              className="h-[175px]  hidden ml-4 rounded-xl w-20 thumb  "
              alt="vitamins"
              width={175}
              height={175}
              quality={100}
              src={"/images/thumb.png"}
            />
          </div>
        </div>
        <Main3 />
        <Footer />
      </div>
    </>
  );
};
