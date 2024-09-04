import Image from "next/image";
import React from "react";
import footerimage from "@/public/image/footer.png";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import whitehand from "@/public/image/whitehand.png";

function Footer() {
  return (
    <div className="  relative  text-white  bg-black   flex flex-col justify-center text-center  py-11">
      <Image src={footerimage} alt="" className="mx-auto" />
      <Image src={whitehand} alt="" className="  absolute  w-[600px]" />
      <div className="w-[80%] mx-auto">
        <p className="my-11">
          Lorem ipsum dolor sit amet consectetur. Tellus vitae sed arcu sodales
          egestas.
        </p>
        <div className=" flex gap-8 text-[40px] justify-center text-primary">
          {" "}
          <FaFacebook /> <FaTwitter /> <FaInstagramSquare />
        </div>
        <div className="bg-white h-[1px] my-11"></div>
      </div>

      <p>
        {" "}
        Lorem ipsum dolor sit amet consectetur. Tellus vitae sed arcu sodales
        egestas.
      </p>

      <button className="te"> read more </button>
    </div>
  );
}

export default Footer;
