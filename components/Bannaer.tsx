import Image from "next/image";
import React from "react";
import banner from "@/public/image/Header .png";
import bannarbottom from "@/public/image/bannarred.png";

function Bannaer() {
  return (
    <div>
      <div className=" relative">
        <Image src={banner} alt="" />

        <div className="absolute  text-white top-[300px] text-center w-full   ">
          <p className="text-[70px] inter ">
            {" "}
            we give hope <span className="text-primary">. </span>{" "}
          </p>

          <p className="  text-[100px] indie"> We are Victorious </p>
        </div>
        <div className=" absolute z-10  w-full">
          <button className=" bg-black  text-[30px]  rounded-lg py-2 px-4 text-white flex items-center gap-2 hover:bg-white border-2 border-primary hover:text-primary mx-auto">
            Join our commuinty
          </button>
        </div>

        <Image
          src={bannarbottom}
          alt=""
          className="absolute -bottom-[200px]  w-full"
        />
      </div>
    </div>
  );
}

export default Bannaer;
