"use client";
import React from "react";
import { useState } from "react";
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
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleToggle = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <div className=" bg-white  ">
      <Container>
        <div className="  flex  py-4 md:px-2    px-0 justify-between items-center">
          <Image src={logo} alt="logo" className="md:flex hidden" />
          <Image src={icon} alt="logo" className="flex md:hidden w-[40px]" />

          <ul className=" md:flex  gap-11 hidden relative">
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
                Gallary
              </li>
            </Link>
            <Link className="  flex items-center relative" href=" ">
              <li
                className={` py- border-b-2  border-white     hover:border-secondary  ${
                  pathname === "" ? "border-secondary" : ""
                }   `}
              >
                Event
              </li>
              <div className="absolute bg-red-200  p-1 rounded-lg  -translate-y-4   translate-x-11 text-primary text-[12px]  text-nowrap w-[80px]">
                Coming soon
              </div>
            </Link>
          </ul>

          <button className=" hidden  bg-primary  rounded-lg py-2 px-4 text-white md:flex items-center gap-2 hover:bg-white border-2 border-primary hover:text-primary">
            <RiHeartsFill /> Donate
          </button>
          <div onClick={handleToggle} className="md:hidden ">
            <Hambugar />
          </div>
        </div>
      </Container>{" "}
      <ul
        className={` bg-white w-full absolute text-black pt-11  text-center  z-40 flex flex-col h-[100vh] ${
          isMenuVisible ? "flex" : "hidden"
        } `}
      >
        <Link href="/">
          <li
            className={` py-4  border-b-2  border-white     hover:border-secondary  ${
              pathname === "" ? "border-secondary" : ""
            }   `}
          >
            Home
          </li>
        </Link>

        <Link href="/about">
          <li
            className={` py-4  border-b-2  border-white     hover:border-secondary  ${
              pathname === "" ? "border-secondary" : ""
            }   `}
          >
            About Us
          </li>
        </Link>

        <Link href="/products ">
          <li
            className={` py-4  border-b-2  border-white     hover:border-secondary  ${
              pathname === "" ? "border-secondary" : ""
            }   `}
          >
            Gallary
          </li>
        </Link>
        <button className=" md:hidden  my-8 z-50 bg-primary  rounded-lg py-2 px-4 text-white gap-2 hover:bg-white border-2 border-primary hover:text-primary w-[150px] flex justify-center items-center mx-auto">
          <RiHeartsFill /> Donate
        </button>
      </ul>
    </div>
  );
}

export default Navbar;
