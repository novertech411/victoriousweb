"use client";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import logo from "@/public/image/logo.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RiHeartsFill } from "react-icons/ri";
function Navbar() {
  const pathname = usePathname();

  return (
    <div className=" bg-white    ">
      <Container>
        <div className="  flex  py-4 px-2   justify-between items-center">
          <Image src={logo} alt="logo" />

          <ul className=" flex gap-11">
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

          <button className=" bg-primary  rounded-lg py-2 px-4 text-white flex items-center gap-2 hover:bg-white border-2 border-primary hover:text-primary">
            <RiHeartsFill /> Donate
          </button>
        </div>
      </Container>{" "}
    </div>
  );
}

export default Navbar;
