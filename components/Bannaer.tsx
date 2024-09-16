import Image from "next/image";
import React from "react";
import banner from "@/public/image/Header .png";
import bannerhead from "@/public/image/Header (2).png";
import bannarbottom from "@/public/image/bannarred.png";
import bannarmobile from "@/public/image/banner2.png";

function Bannaer() {
  return (
    <div>
      <div className=" relative bg-yellow-200 mb-[200px]">
        <Image src={banner} alt="" className=" md:flex hidden" />
        <Image src={bannerhead} alt="" className=" md:hidden " />

        <div className="absolute  text-white  top-[100px] md:top-[300px] text-center w-full   ">
          <p className="  text-[30px]  md:text-[70px] inter font-[600] ">
            {" "}
            we give hope <span className="text-primary">. </span>{" "}
          </p>

          <p className="  text-[40px] md:text-[100px] font-indie">
            {" "}
            We are Victorious{" "}
          </p>
        </div>
        <div className=" absolute z-10  w-full font-inter">
          <button className=" bg-black text-[18px] md:text-[30px] font-[600]  rounded-lg py-2 px-5 text-white flex items-center hover:bg-white border-2 border-primary hover:text-primary mx-auto">
            Join our commuinty
          </button>
        </div>

        <Image
          src={bannarbottom}
          alt=""
          className="absolute -bottom-[80px]  w-full md:flex hidden"
        />

        <Image
          src={bannarmobile}
          alt=""
          className="absolute   -bottom-[180px] w-full    md:hidden"
        />
      </div>
    </div>
  );
}

export default Bannaer;
