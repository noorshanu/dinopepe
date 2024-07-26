import React from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-full pb-4 border-t-2 mt-3 ">
      <div className="container-wrapper mt-1 ">
        <div className="flex justify-center flex-col sm:flex-row">
          <div className="mt-8 flex items-center justify-center gap-2">
          <p className="font-groot-one text-black">
                Copyright 2024 Dinopepe. All Rights Reserved.
              </p>

          </div>

          <div className="mt-8  flex justify-center flex-col sm:flex-row items-center space-x-6">
            <div>
             
            </div>
    
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
