import React from "react";
import Slider from "./Slider";

function HowToBuy() {
  return (
    <section className=" py-[2%]">
      <div className=" container-wrapper">
        <div className=" flex items-center justify-center gap-4">
          <div
            className=" bg-[#429d29] border-4 border-white box-s2 rounded-3xl py-8 px-4 w-1/2 h-full"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h1 className=" text-3xl sm:text-7xl font-bold font-sushi-one  py-1 text-center">
              {" "}
              How To BUY
            </h1>
            <h2 className=" text-2xl sm:text-7xl text-black font-bold font-sushi-one py-2 text-center">
              $DINOPEPE
            </h2>
          </div>

          <div
            className="bg-[#429d29] border-4 border-white box-s2 rounded-3xl p-2 h-full"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img src="images/hero.png" alt="" className=" h-[180px] sm:h-[220px]" />
          </div>
        </div>

        <div className=" flex items-center flex-col sm:flex-row justify-center gap-4 mt-2">
          <div
            className=" bg-[#429d29] border-4 border-white box-s2 rounded-3xl py-8 px-4 flex flex-col justify-center items-center gap-4"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img
              src="images/logo3.png"
              alt=""
              className="h-[220px] img-hov cursor-pointer"
            />
            <a
              href="/"
              className=" bg-[#429d29] border-4 border-white box-s2 px-4 py-1  rounded-full text-4xl font-bold font-dream"
            >
              Buy $dinoPepe
            </a>
          </div>

          <div
            className="bg-[#429d29] border-4 border-white box-s2 rounded-3xl p-4 w-full sm:w-1/2 "
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <Slider />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToBuy;
