import React from "react";
import Image from "next/image";
import story from "@/public/image/storyp.jpeg";
import Container from "./Container";

function Story() {
  return (
    <div className=" bg-[#f1f2f4]    py-[80px] pb-[150px]">
      <Container>
        <h2 className=" text-black  font-inter font-[600] text-[50px]  text-left   py-11">
          Stories That Inspire
        </h2>
        <div className="flex justify-center gap-11">
          <div className=" max-w-[300px]  text-center ">
            <Image
              src={story}
              alt=""
              className=" h-[300px] w-[300px] rounded-full mx-auto"
            />

            <h2 className=" font-[600] text-primary  my-[10px]">
              BREAKING BARRIERS TO SERVE
            </h2>
            <p>
              "Service makes you feel like you have somebody. That there’s a
              community around you."
            </p>
          </div>

          <div className=" max-w-[300px]  text-center ">
            <Image
              src={story}
              alt=""
              className=" h-[300px] w-[300px] rounded-full mx-auto"
            />

            <h2 className=" font-[600] text-primary  my-[10px]">
              BREAKING BARRIERS TO SERVE
            </h2>
            <p>
              "Service makes you feel like you have somebody. That there’s a
              community around you."
            </p>
          </div>

          <div className=" max-w-[300px]  text-center ">
            <Image
              src={story}
              alt=""
              className=" h-[300px] w-[300px] rounded-full mx-auto"
            />

            <h2 className=" font-[600] text-primary  my-[10px]">
              BREAKING BARRIERS TO SERVE
            </h2>
            <p>
              "Service makes you feel like you have somebody. That there’s a
              community around you."
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Story;
