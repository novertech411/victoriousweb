"use client";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import logo from "@/public/image/logo.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RiHeartsFill } from "react-icons/ri";
import icon from "@/public/image/icon.png";
import Hambugar from "./Hambugar";

function Navbar() {
  const pathname = usePathname();

  return (
    <div className=" bg-white  ">
      <Container>
        <div className="  flex  py-4 md:px-2    px-0 justify-between items-center">
          <Image src={logo} alt="logo" className="md:flex hidden" />
          <Image src={icon} alt="logo" className="flex md:hidden w-[40px]" />

          <ul className=" md:flex gap-11 hidden">
            <Link href="/">
              <li
                className={` py-1  border-b-2  border-white     hover:border-secondary  ${
                  pathname === "" ? "border-secondary" : ""
                }   `}
              >
                Home
              </li>
            </Link>

            <Link href="/about">
              <li
                className={` py-1  border-b-2  border-white     hover:border-secondary  ${
                  pathname === "" ? "border-secondary" : ""
                }   `}
              >
                About Us
              </li>
            </Link>

            <Link href="/products ">
              <li
                className={` py-1  border-b-2  border-white     hover:border-secondary  ${
                  pathname === "" ? "border-secondary" : ""
                }   `}
              >
                Products And Services
              </li>
            </Link>
          </ul>

          <button className=" hidden  bg-primary  rounded-lg py-2 px-4 text-white md:flex items-center gap-2 hover:bg-white border-2 border-primary hover:text-primary">
            <RiHeartsFill /> Donate
          </button>
          <Hambugar />
        </div>
      </Container>{" "}
    </div>
  );
}

export default Navbar;
