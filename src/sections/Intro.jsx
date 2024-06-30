import React from "react";
import RoadmapCards from "../components/RoadmapCards";

const Intro = () => {
  return (
    <>
      <div className=" container-wrapper  px-4 ">
        <h2 className="font-groot-one text-5xl my-2 text-[#000000] text-center font-bold relative z-30">
          About Us
        </h2>
        <img
          src="images/bran.png"
          alt=""
          className=" mx-auto h-[100px] -mt-12 relative z-10"
        />

        <div className="  px-4  py-2 flex justify-between flex-col sm:flex-row items-center ">
          <div className=" w-full sm:w-[500px]">
            {/* <RoadmapCards /> */}
            <img
              src="images/img2.jpeg"
              alt=""
              className=" rounded-3xl shadow-lg"
            />
          </div>
          <div className=" max-w-xl">
            <p className="font-semibold font-groot-one text-xl sm:text-3xl text-black  py-2">
              Welcome to the wild world of Dino pepe!
            </p>
            <h1 className=" text-xl sm:text-2xl py-3  font-groot-one text-black  font-medium">
              In the meme jungle,Dino pepe reigns supreme with his adorable
              charm and endless memes! With his trusty sidekick,Dino pepe
              spreads joy and laughter wherever he goes, making Solana brighter
              with every wag of his tail.
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-one  text-black font-medium">
           Dino pepe isn't your average meme coin - he's the next viral meme! Known for his cuteness, unique features, and explosive growth,Dino pepe offers more than just memes. 
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-one text-black font-medium">
            From his hilarious antics to his groundbreakingDino pepe Game and pet store,Dino pepe brings excitement and adventure to the crypto world! 
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
