"use client";
import Bannaer from "@/components/Bannaer";
import Image from "next/image";
import maps from "@/public/image/map.png";
import Container from "@/components/Container";
import aboutimg from "@/public/image/aboutus.png";
import handbg from "@/public/image/handbg.png";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { RiMentalHealthFill } from "react-icons/ri";
import { FaGoogleScholar } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import aboutpic1 from "@/public/image/WhatsApp Image 2024-07-02 at 11.12.32 PM.jpeg";
import aboutpic2 from "@/public/image/WhatsApp Image 2024-07-02 at 11.13.34 PM.jpeg";
import aboutpic3 from "@/public/image/WhatsApp Image 2024-07-02 at 11.32.33 PM.jpeg";
import helpbg from "@/public/image/helpbg.png";
import Cardaction from "@/components/Cardaction";
import giving from "@/public/image/BG (2).png";
import volunter from "@/public/image/BG (1).png";
import building from "@/public/image/BG.png";
import { FaDonate } from "react-icons/fa";
import { HiHomeModern } from "react-icons/hi2";
import { FaUsersLine } from "react-icons/fa6";
import History from "@/components/History";
import Story from "@/components/Story";

export default function Home() {
  return (
    <main className=" min-h-screen bg-white">
      <Bannaer />
      <Container>
        {" "}
        <div className="  mt-[250px] md:mt-[200px] md:h-[500px] relative ">
          <Image
            src={maps}
            alt=""
            className="md:w-[900px]  w-full opacity-30 mx-auto h-full"
          />
          <div className="top-0 absolute flex justify-center w-full">
            <p className="   mt-3  md:mt-[100px] text-center  w-[80%] md:w-[70%] font-inter text-[#525560] text-[18px] md:text-[30px]">
              {" "}
              Our mission is to Reach Out To{" "}
              <span className="text-primary font-[600]"> 5 Million </span>{" "}
              Orphans, Less Previleged, Widows Physically Disabled And
              Vulnurable Children All Over The World.
            </p>
          </div>
        </div>{" "}
      </Container>

      <Container>
        <div className="flex gap-8  justify-between flex-wrap-reverse  mt-[100px]">
          <div className=" md:w-[600px]">
            <h1 className="text-primary font-inter font-[600] md:text-[50px] text-[30px]">
              We’re Building a Movement
            </h1>

            <p className=" text-[18px]  md:text-[20px] text-[#525560] my-9">
              We believe in the creating sustainable change by the working
              hind-in-hand with local communities. though our collaborative
              approach. We empower individuals and communities to become agents
              of change, fostering long-term impact.
            </p>

            <button className=" bg-primary text-[18px]  md:text-[20px]  rounded-lg py-2 px-4 text-white flex items-center gap-2 hover:bg-white border-2 border-primary hover:text-primary ">
              Find out more
            </button>
          </div>
          <div className="flex justify-center lg:mx-0 mx-auto  ">
            <Image src={aboutimg} alt="" className=" " />
          </div>
        </div>

        <div className="flex  gap-4 ">
          <div className=""> </div>
        </div>
      </Container>

      <History />

      <div className=" text-[20px] bg-cover   relative  my-[150px] ">
        <Image
          src={handbg}
          alt=""
          className="absolute  md:w-[60%]  w-[100%]  right-0 overflow-hidden opacity-10"
        />
        <h1 className="text-black font-inter font-[600] md:text-[50px] text-[30px] md:my-11 text-center  -mt-11">
          What We Do
        </h1>

        <Container>
          <div className=" flex  justify-between  gap-[100px] flex-wrap">
            <div className="  relative md:w-[40%] mt-[150px]">
              <Image
                data-aos="fade-down-right"
                src={aboutpic3}
                className=" w-[300px] border-primary border-2 rounded-lg z-30"
                alt="farm  "
              />
              <Image
                data-aos="fade-down-left"
                src={aboutpic2}
                className=" border-primary border-2  absolute w-[200px] md:top-5 md:right-11  -top-[100px] -right-2"
                alt="farm  "
              />
              <Image
                data-aos="fade-right"
                src={aboutpic1}
                className=" border-primary border-2  rounded-lg absolute  md:bottom-11  -bottom-[100px] left-7 z-10"
                alt="farm  "
              />
            </div>

            <div className="w-[600px]">
              <p className=" my-11  md:text-[25ppx] text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <div className="pl-6 border-l-2 border-secondary  ">
                {" "}
                <div className="mb-4  flex items-center gap-3">
                  <MdOutlineFamilyRestroom className="text-[120px] text-[#9f9fa1] " />
                  <div>
                    <p className=" my-3 font-[600] text-primary ">
                      Family support
                    </p>{" "}
                    <p className="text-[#525560]  md:text-[25ppx] text-[18px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </div>
                <div className="mb-4  flex items-center gap-3">
                  <MdHealthAndSafety className="text-[120px] text-[#9f9fa1]" />
                  <div>
                    <p className=" my-3 font-[600] text-primary ">
                      Health benefits
                    </p>{" "}
                    <p className="text-[#525560] md:text-[25ppx] text-[18px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </div>
                <div className="mb-4  flex items-center gap-3">
                  <FaGoogleScholar className="text-[120px] text-[#9f9fa1]" />
                  <div>
                    <p className=" my-3 font-[600] text-primary ">
                      Scholarships
                    </p>{" "}
                    <p className="text-[#525560] md:text-[25ppx] text-[18px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </div>
                <div className="mb-4  flex items-center gap-3">
                  <RiMentalHealthFill className="text-[120px] text-[#9f9fa1]" />
                  <div>
                    <p className=" my-3 font-[600] text-primary ">Therapy</p>{" "}
                    <p className="text-[#525560] md:text-[25ppx] text-[18px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <div> </div>
      </div>

      <div className="relative  mb-[70px] ">
        <Image
          src={helpbg}
          alt=""
          className=" absolute md:w-[80%]    opacity-25"
        />
        <p className="text-primary font-inter font-[600] md:text-[50px] text-[30px] text-center  mb-[50px]">
          {" "}
          You Can Make a Difference
        </p>
        <Container>
          <div className="  justify-center  md:w-[60%] mx-auto text-center   ">
            <p className="text-[#525560] text-[18px] md:text-[25px] mb-[50px]">
              We all have the power to make a positive impact on our world. Find
              out how you can help break the cycle of poverty, illiteracy, and
              low expectations.
            </p>
          </div>

          <div className=" flex  gap-10 justify-center flex-wrap">
            <Cardaction
              imagePath={giving}
              label="Support us by Giving the Foundation "
              alt=""
              Icon={FaDonate}
            />{" "}
            <Cardaction
              imagePath={building}
              label="Build an  orphanage with Us "
              alt=""
              Icon={HiHomeModern}
            />{" "}
            <Cardaction
              imagePath={volunter}
              label=" Volunties with as individual  or  company  "
              alt=""
              Icon={FaUsersLine}
            />
          </div>
        </Container>
      </div>

      <div className=" bg-[#f1f2f4]">
        <Story />
      </div>
    </main>
  );
}
