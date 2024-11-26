import React from "react";
import Image from "next/image";
import { Main2 } from "./Main2";
import { Ingredients } from "./Ingredients";
export const Main = () => {
  const items = [
    {
      image: "/images/lg1.svg",
      header: "Vitamins",
      paragraph: (
        <>
          Increased Vitamins and <br />
          minerals in your diet
        </>
      ),
    },
    {
      image: "/images/lg2.png",
      header: "Weight Loss",
      paragraph: (
        <>
          Weight Loss
          <br /> Find scientifically proven solutions
        </>
      ),
    },
    {
      image: "/images/lg3.png",
      header: "Functional Foods",
      paragraph: (
        <>
          Functional Foods
          <br /> From protein powers to baby formula
        </>
      ),
    },
  ];
  return (
    <>
      <div className="main-container ">
        <div>
          <div className=" relative   ">
            <div className="hero">
              <div className="min-h-[809px] rounded flex justify-center py-9  bg-[#e1f6fb]  w-auto clip-inverted ">
                <div className="flex flex-col  ">
                  <div className="w-[100%] flex justify-center">
                    <h1 className="md:text-[8vw] text-[12vw] font-bold text-[#003569]">
                      Essential
                      <br className="block md:hidden" /> Vitamins
                    </h1>
                  </div>
                  <div className="flex gap-5  relative justify-evenly  main">
                    <div className="main2">
                      <div className="  w-[300px]   items-center  flex md:items-start px-2 relative flex-col h-[250px]">
                        <div className="absolute bottom-5 md:bottom-0 bg-transparent leading-[40px]">
                          <h3 className="text-[19px] font-normal text-[#727272] ">
                            Online medical supplies
                          </h3>
                          <div className="leading-[30px] mt-3">
                            <h2 className=" text-[20px] text-[#17414F]  font-medium md:text-[26px]">
                              Get Your Vitamins <br />& Minerals
                            </h2>
                          </div>
                          <button className="bg-[#17414F] mt-4  rounded-[50px] font-semibold px-10 text-[13px]  text-white">
                            EXPLORE
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="image">
                      <div className="bg-[#ffe9b5] w-[280px] rounded-tl-[30%]   md:mt-auto  rounded-br-[30%] md:mr-10 h-[280px] relative  ">
                        <Image
                          src="/images/mainimg.avif"
                          alt="Med-Image"
                          width={500.26}
                          height={500}
                          quality={100}
                          priority={true}
                          className="h-[300px] bottom-[16%] scale-[1.1] lg:right-4 md:right-2  w-auto absolute  "
                        />
                      </div>
                    </div>
                    <div className="image">
                      {" "}
                      <div className=" flex flex-col gap-3  pt-0 justify-center w-[300px] thirddiv  ">
                        {items.map((item, index) => {
                          return (
                            <div key={index} className="flex items-center ">
                              <div>
                                <Image
                                  alt="vitamins"
                                  width={60}
                                  height={60}
                                  quality={100}
                                  src={item.image}
                                />
                              </div>
                              <div className="ml-4">
                                <h1 className="text-[19px] font-semibold text-[#18414E]">
                                  {item.header}
                                </h1>
                                <p className="text-[11px] leading-4 text-[#727272] font-normal">
                                  {item.paragraph}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 absolute md:mt-0    twodot ">
                    <div className="bg-[#a6b8ca] w-8 h-8 rounded-[50px]"></div>
                    <div className="bg-[#a6b8ca] w-8 h-8 rounded-[50px]"></div>
                  </div>
                </div>
              </div>
            </div>

            <Main2 />
          </div>
        </div>
      </div>
    </>
  );
};
