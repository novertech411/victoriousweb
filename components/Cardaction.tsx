import React from "react";

import Image, { StaticImageData } from "next/image";
import { GoPerson } from "react-icons/go";
import { TbMessageCircle } from "react-icons/tb";

function Cardaction({
  imagePath,
  alt,
  label,

  authur,
}: {
  imagePath: StaticImageData;
  alt: string;
  label: string;

  authur: string;
}) {
  return (
    <div className="rounded-lg   w-[400px]  bg-red-400 relative  h-full ">
      <Image
        src={imagePath}
        alt={alt}
        className="  h-[300px] rounded-t-lg    w-full"
      />

      <div className="p-6 absolut ">
        <div className="flex gap-8  text-[15px] text-white">
          <div className="flex gap-4 items-center">
            <GoPerson className=" text-secondary    " /> <p>By {authur}</p>
          </div>
        </div>
        <p className=" font-[700]  md:text-[24px]   text-[18px] mt-3 text-white">
          {label}
        </p>

        <button className=" text-white bg-primary text-[20px]  ">
          Take Action
        </button>
      </div>
    </div>
  );
}

export default Cardaction;
