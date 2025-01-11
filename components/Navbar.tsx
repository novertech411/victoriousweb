"use client";
import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    console.log("Current Pathname:", pathname);
  }, [pathname]);

  const handleToggle = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const getActiveClass = (path: string): string => {
    return pathname === path ? "border-primary  border-b-2 " : "";
  };

  return (
    <div className="bg-white">
      <Container>
        <div className="flex py-4 md:px-2 px-0 justify-between items-center">
          <Image src={logo} alt="logo" className="md:flex " />
          {/* <Image src={icon} alt="logo" className="flex md:hidden w-[40px]" /> */}

          <ul className="md:flex gap-11 hidden relative text-black">
            <Link href="/">
              <li
                className={`py-1 hover:border-primary  hover:border-b-2 ${getActiveClass(
                  "/"
                )}`}
              >
                Home
              </li>
            </Link>

            <Link href="/about">
              <li
                className={`py-1  hover:border-primary   hover:border-b-2 ${getActiveClass(
                  "/about"
                )}`}
              >
                About Us
              </li>
            </Link>

            <Link href="/products">
              <li
                className={`py-1  hover:border-primary  hover:border-b-2  ${getActiveClass(
                  "/products"
                )}`}
              >
                Gallary
              </li>
            </Link>

            <Link href="/event" className="flex items-center relative">
              <li
                className={`py-1  text-secondary hover:border-primary  hover:border-b-2 ${getActiveClass(
                  "/event"
                )}`}
              >
                Event
              </li>
              <div className="absolute bg-red-200 p-1 rounded-lg -translate-y-5 translate-x-2 text-primary text-[11px] text-nowrap w-[75px]">
                Coming soon
              </div>
            </Link>
          </ul>

          <button className="hidden bg-primary rounded-lg py-2 px-4 text-white md:flex items-center gap-2 hover:bg-white border-2 border-primary hover:text-primary">
            <RiHeartsFill /> Donate
          </button>
          <div onClick={handleToggle} className="md:hidden">
            <Hambugar />
          </div>
        </div>
      </Container>

      <ul
        className={`bg-white w-full absolute text-black pt-11 text-center z-40 flex flex-col h-[100vh] ${
          isMenuVisible ? "flex" : "hidden"
        }`}
      >
        <Link href="/">
          <li
            onClick={handleToggle}
            className={`py-4 border-b-2 border-white hover:border-primary ${getActiveClass(
              "/"
            )}`}
          >
            Home
          </li>
        </Link>

        <Link href="/about">
          <li
            onClick={handleToggle}
            className={`py-4 border-b-2 border-white hover:border-primary ${getActiveClass(
              "/about"
            )}`}
          >
            About Us
          </li>
        </Link>

        <Link href="/products">
          <li
            onClick={handleToggle}
            className={`py-4 border-b-2 border-white hover:border-primary ${getActiveClass(
              "/products"
            )}`}
          >
            Gallary
          </li>
        </Link>

        <button
          onClick={handleToggle}
          className="md:hidden my-8 z-50 bg-primary rounded-lg py-2 px-4 text-white gap-2 hover:bg-white border-2 border-primary hover:text-primary w-[150px] flex justify-center items-center mx-auto"
        >
          <RiHeartsFill /> Donate
        </button>
      </ul>
    </div>
  );
}

export default Navbar;
