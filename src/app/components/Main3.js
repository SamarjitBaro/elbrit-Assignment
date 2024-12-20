import React from "react";
import Image from "next/image";
export const Main3 = () => {
  const items = [
    {
      image: "/images/img1-3.png",
    },

    {
      image: "/images/img5.png",
    },
    {
      image: "/images/img2-4.png",
    },
    {
      image: "/images/img6-8.png",
    },
    {
      image: "/images/img1-3.png",
    },

    {
      image: "/images/img5.png",
    },
    {
      image: "/images/img2-4.png",
    },
    {
      image: "/images/img6-8.png",
    },
  ];
  const items2 = [
    // {
    //   image: "/images/img5.png",
    // },
    // {
    //   image: "/images/img6-8.png",
    // },
    // {
    //   image: "/images/img7.png",
    // },
    // {
    //   image: "/images/img6-8.png",
    // },
  ];
  return (
    <>
      <div className="main3 flex flex-col py-7  items-center justify-center ">
        <h4 className="text-[12px]  font-semibold  text-[#18414E]">OUR BLOG</h4>
        <h2 className="md:text-[36px] text-[5.4vw] md:mb-2 font-semibold text-[#18414E]">
          Latest News
        </h2>
      </div>
      <div className="flex  md:h-[39vw] justify-evenly  lg:gap-6    flex-wrap flex-col  md:px-32 items-start relative hello">
        {items.map((item, index) => {
          return (
            <div
              style={{ alignSelf: "flex-start" }}
              key={index}
              className="flex  w-[100%] md:w-[18vw] justify-center  relative"
            >
              <div className="w-[60%] h-full md:w-full relative flex  justify-center mt-7 md:mb-0 mb-2 md:mt-0  items-center">
                <div className="w-[9.5vw] h-[4.6vw] md:w-[3.5vw] md:h-[1.6vw] rounded-r-lg bg-[#003569]  flex justify-center items-center absolute top-9 md:top-4 left-[-10px]">
                  <h3 className="text-[2vw] md:text-[0.7vw] font-semibold text-white">
                    20 APR
                  </h3>
                </div>
                <div className="  flex justify-center items-center absolute top-3  md:top-11 ">
                  <h3 className=" text-[2.9vw] md:text-[1vw] font-semibold text-white">
                    The Covid-19 Epidemic In 2022
                    <br />
                    Is Back
                  </h3>
                </div>
                <Image
                  src={item.image}
                  quality={100}
                  alt="Image"
                  width={400} // Control the width (optional based on your design)
                  height={400} // Control the height (optional based on your design)
                  className="object-contain block max:w-[400px] h-auto rounded-[18px]  md:rounded-xl"
                />
              </div>
            </div>
          );
        })}
        {/* <div className="flex   w-[100%] justify-evenly  md:px-24  items-start absolute top-[30%]">
          {items2.map((item, index) => {
            return (
              <div
                style={{ alignSelf: "flex-end" }}
                key={index}
                className="flex justify-start items-start w-[18vw]  relative"
              >
                <div className="w-full h-full flex justify-center items-center">
                  <div className="w-[5.5vw] h-[1.6vw] rounded-r-lg bg-[#003569] flex justify-center items-center absolute top-1 md:top-4 left-[-10px]">
                    <h3 className="text-[0.7vw] font-semibold text-white">
                      20 APR
                    </h3>
                  </div>
                  <div className="  flex justify-center items-center absolute top-3  md:top-11 ">
                    <h3 className="text-[1vw] font-semibold text-white">
                      The Covid-19 Epidemic In 2022
                      <br />
                      Is Back
                    </h3>
                  </div>
                  <Image
                    src={item.image}
                    quality={100}
                    alt="Image"
                    width={400} // Control the width (optional based on your design)
                    height={400} // Control the height (optional based on your design)
                    className="object-contain block w-full h-auto rounded-[3px]  md:rounded-xl"
                  />
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </>
  );
};
