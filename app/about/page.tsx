import React from "react";
import about from "@/public/image/Demo Day.png";
import aboutbg from "@/public/image/bannarredabout.png";
import aboutbg2 from "@/public/image/Demo Day (1).png";
import Image from "next/image";
import Container from "@/components/Container";

function page() {
  return (
    <div className="bg-white">
      <div className=" md:h-[500px] overflow-hidden bg-aboutbg bg-cover">
        <h1 className="font-indie font-[600] md:text-[90px] text-[60px] text-center md:mt-[19%] mt-[30%] text-white  z-20">
          About us
        </h1>
      </div>
      <div className="h-[50px] overflow-hidden ">
        <Image className="" src={aboutbg} alt="" />
      </div>
      <Container>
        <div className=" flex flex-wrap gap-[100px] justify-center  my-[70px] ">
          <p className=" font-[600] text-[40px] max-w-[400px]">
            We’re not a charity. We’re a movement.
          </p>

          <p className=" max-w-[600px]  font-[300] text-[22px] leading-relaxed">
            The buildOn movement is powered by passionate people from all walks
            of life who are committed to ending poverty through service and
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="h-[1px] bg-gray-300 "></div>
      </Container>

      <div className=" relative  h-[500px] bg-fit bg-green-900 ">
        <h2 className="text-primary  font-inter font-[600] md:text-[50px] text-[30px] md:mt-11 text-center  ">
          What We Do
        </h2>
      </div>
    </div>
  );
}

export default page;
