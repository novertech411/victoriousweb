import React from "react";
import about from "@/public/image/Demo Day.png";
import aboutbg from "@/public/image/bannarredabout.png";
import aboutbg2 from "@/public/image/Demo Day (1).png";
import Image from "next/image";
import Container from "@/components/Container";
import abouthelp from "@/public/image/helpbg.png";
import team from "@/public/image/Team.jpeg";
import founder from "@/public/image/FOUNDER.jpg";
import partners from "@/public/image/partners.png";

function page() {
  return (
    <div className="bg-white">
      <div className=" md:h-[500px] overflow-hidden bg-aboutbg bg-cover bg-center">
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
      </Container>

      <div className=" relative  h-[500px] bg-cover   bg-aboutbg2 bg-green-50  ">
        <h2 className="text-primary  font-inter font-[600] md:text-[50px] text-[30px] md:mt-11 text-center  ">
          What We Do
        </h2>

        <Container>
          <p className="text-[18px]  text-center md:text-[20px] text-[#525560] my-9 md:w-[80%] mx-auto">
            Victorious Rhema family foundation is a Non-governmental
            organization that reaches out to orphans, less privileged, widows,
            disabled and the vulnerable in the society. Victorious Rhema family
            foundation also gives out scholarships to children who come from
            disadvantaged homes and backgrounds. Victorious Rhema family
            foundation was established on the 7th of July,2018 and became a
            registered Non-governmental organization with CAC in the year 2021
          </p>
        </Container>
      </div>
      <div className=" bg-[#f1f2f4]">
        <Container>
          <div className="flex gap-8  justify-between flex-wrap-reverse  pt-[100px]  ">
            <div className="w-[600px]">
              <p className="font-inter font-[600] md:text-[50px] text-[30px]">
                Meet the People Who Make Our Work Possible
              </p>
              <p>
                powered by passionate people committed to ending poverty through
                service and education.
              </p>
            </div>
            <div>
              <Image src={team} alt="" className="rounded-lg w-[400px]" />
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex gap-8  justify-between flex-wrap-reverse  pt-[100px]  ">
          <div className="w-[400px]">
            <Image src={founder} alt="" className="rounded-lg w-[600px]" />
          </div>

          <div className=" w-[50%]">
            <p className="font-inter font-[600] md:text-[50px] text-[30px]">
              Eziuka Healing
            </p>
            <p>
              Inspired by his passion for service and education, Jim Ziolkowski
              left a career in corporate finance to found the nonprofit buildOn
              in 1991. Since then he has served as CEO and led the organization
              in breaking the cycle of poverty and illiteracy around the world
              through buildOn’s Service Learning Program in the U.S. and Global
              School Construction Program in the world’s economically poorest
              countries. To date, buildOn has mobilized hundreds of thousands of
              U.S. youth in meaningful service to their communities and provided
              millions of children and adults with a safe place to learn. Jim is
              the N.Y. Times bestselling author of Walk in Their Shoes, and has
              been featured on NBC’s TODAY Show, CNN, CBS Evening News, PBS,
              TED, The Wall Street Journal, and NPR. He has also been endorsed
              by three Nobel Peace Prize laureates including Mother Teresa, the
              14th Dalai Lama, and former President Barack Obama. Jim received a
              Doctorate in Humane Letters, honoris causa from St. John’s
              University and he delivered the commencement speech for the 2024
              graduating class. To schedule an interview or other media request
              with Jim, please email press@buildon.org.
            </p>
          </div>
        </div>
      </Container>

      <div>
        <h2 className="text-primary  font-inter font-[600] md:text-[50px] text-[30px] md:mt-11 text-center ">
          Our Partners
        </h2>

        <div className="mt-11">
          <div className=" ">
            {" "}
            <Image
              src={partners}
              alt=""
              className=" w-[50%] md:w-[60%] mx-auto"
            />
          </div>
          <button className="  mt-11 mx-auto hidden text-[30px] font-[600] bg-primary  rounded-lg py-2 px-4 text-white md:flex items-center gap-2 hover:bg-white border-2 border-primary hover:text-primary">
            Join the movment
          </button>
        </div>
      </div>

      <h2 className=" font-inter font-[600] md:text-[50px] text-[30px] md:mt-11 text-center ">
        Our Story
      </h2>
      <div
        className="relative  max-w-5xl bg-red-500 mx-auto"
        style={{ paddingTop: "56.25%" /* 16:9 Aspect Ratio */ }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-[600px]"
          src="https://www.youtube.com/embed/FGH04GVACtM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default page;
