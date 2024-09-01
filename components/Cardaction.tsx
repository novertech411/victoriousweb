"use client ";
import React from "react";

import Image, { StaticImageData } from "next/image";
import { GoPerson } from "react-icons/go";
import { TbMessageCircle } from "react-icons/tb";

import { IconType } from "react-icons";

function Cardaction({
  imagePath,
  alt,
  label,
  Icon,
}: {
  imagePath: StaticImageData;
  alt: string;
  label: string;
  Icon: IconType;
}) {
  return (
    <div className="  group rounded-lg   w-[400px]  h-full  relative">
      <div className=" absolute text-center w-full bottom-6">
        <div>
          {" "}
          <Icon className="text-primary text-[50px] mx-auto" />{" "}
        </div>

        <p className=" z-20 font-[700]  md:text-[30px]  px-4 text-[18px] mt-3 text-white ">
          {label}
        </p>

        <button className="  mx-auto group-hover:block hidden rounded-lg py-2  px-4 z-20 text-white bg-primary text-[20px]  mt-4 ">
          Take Action
        </button>
      </div>

      <Image
        src={imagePath}
        alt={alt}
        className="  z-10 rounded-t-lg    w-full"
      />
    </div>
  );
}

export default Cardaction;
