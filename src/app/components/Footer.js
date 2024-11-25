import Image from "next/image";
import React from "react";

export const Footer = () => {
  const items = [
    {
      image: "/icn1.png",
      tag: "Phone Number",
      details: "+974 3118 1843",
    },
    {
      image: "/icn2.png",
      tag: "Email Address",
      details: "Elbrithcqhr@gmail.com",
    },
    {
      image: "/icn3.png",
      tag: "Office Location",
      details: " Ambassador Street, Zone 61,",
    },
  ];
  return (
    <div>
      <div className="bg-[#17414F] flex flex-col items-center justify-center min-h-[20vw] w-[100%] footer">
        <div className=" w-[80%]  md:px-16 md:min-h-[20vw]  py-6 ">
          <div className="flex justify-center  items-center gap-1 mb-10 md:gap-12">
            {items.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" flex  bg-[#215D72] rounded md:rounded-lg md:h-[5vw] md:w-[22vw] w-[240px]  h-[30px]  justify-evenly items-center"
                >
                  <Image
                    alt="icons"
                    src={item.image}
                    width={100}
                    height={100}
                    quality={100}
                    className="h-[3.2vw]  w-[3.2vw]"
                  />
                  <div className="flex-col">
                    <h2 className="text-[#FFFFFF] md:text-[1vw] text-[7px] font-normal">
                      {item.tag}
                    </h2>
                    <h2 className="text-[#FFFFFF] md:text-[1vw] text-[5.7px]  font-medium">
                      {item.details}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mb-8 md:justify-start">
            <div className="flex flex-wrap  md:justify-between md:h-[70px] h-[85px]  w-[64%]">
              <Image
                src="/image.png"
                alt="Logo"
                width={313.26}
                height={60}
                quality={100}
                className="h-[4.6vw] w-[250px]"
              />
              <div className=" w-[300px]">
                <p className="text-[#FFFF]  md:text-[0.8vw] text-[5.7px]  leading-1 md:leading-4 font-normal">
                  Your health, physical and emotional well-being is important to
                  us. We are always by your side and have made it even easier
                  for you to find the necessary vitamins.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-10 justify-center md:justify-start">
            <div>
              <Image
                src="/Group.png"
                alt="Logo"
                width={313.26}
                height={60}
                quality={100}
                className="md:h-[0.9vw] h-[7px] w-[7px] md:w-[10px]"
              />
            </div>
            <p className="text-[#FFFF] ml-3 md:text-[0.8vw] text-[5.8px]  leading-1 md:leading-5 font-normal">
              Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai
              400051
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
