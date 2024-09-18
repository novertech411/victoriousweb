import React from "react";
import about from "@/public/image/aboutus.jpeg";
import Image from "next/image";

function page() {
  return (
    <div>
      about
      <div>
        <Image className="w-full" src={about} alt="" />
      </div>
    </div>
  );
}

export default page;
