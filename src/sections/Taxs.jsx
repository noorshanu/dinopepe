import React from "react";

function Taxs() {
  return (
    <section className=" pt-[10%] pb-[8%]  relative ">
   

      <div className=" container-wrapper border-4 border-black rounded-3xl box-s2 py-4 px-4 relative z-20">
       
      
          <div
            className=" flex justify-center flex-col sm:flex-row gap-3"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
           <div>
            <img src="images/tax.jpeg" alt="" />
            <p>Tax 0%</p>
           </div>

           <div>
            <img src="images/burned.jpeg" alt="" />
            <p>
              Lp 100% BURN
            </p>
           </div>
           <div>
            <img src="images/img1.jpeg" alt="" />
            <p>
              
            </p>
           </div>
          </div>
        </div>

     
    </section>
  );
}

export default Taxs;
