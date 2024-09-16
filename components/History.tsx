import React from "react";
import Container from "./Container";

function History() {
  return (
    <div className="md:h-[600px] bg-black   md:bg-cover bg-fit  bg-center  bg-historybg w-full py-11  my-11">
      <h1 className="font-inter md:text-[50px]  text-[30px] text-center font-[600] text-white md:pt-[150px]">
        Creating Lasting Change
      </h1>

      <Container>
        <div className="flex flex-wrap md:justify-between justify-center  md:text-normal   text-center gap-8 ">
          <div className="text-center max-w-[350px] ">
            <p className=" font-indie font-[600] text-[70px] text-[#fbb040]">
              {" "}
              386+
            </p>
            <p className="text-center text-white md:text-[30px] text-[20px]">
              {" "}
              outreaches
            </p>
          </div>

          <div className="text-center max-w-[350px] ">
            <p className=" font-indie font-[600] text-[70px] text-[#fbb040]">
              {" "}
              56+
            </p>
            <p className="text-center text-white md:text-[30px] text-[20px]">
              {" "}
              oimpacted persons
            </p>
          </div>

          <div className="text-center max-w-[350px] ">
            <p className=" font-indie font-[600] text-[70px] text-[#fbb040]">
              {" "}
              78K
            </p>
            <p className="text-center text-white md:text-[30px] text-[20px]">
              {" "}
              volunteers
            </p>
          </div>
        </div>
      </Container>
      <button className="  my-11 mx-auto md:mt-[80px] bg-primary  text-[20px]  rounded-lg py-2 px-4 text-white flex items-center gap-2 hover:bg-white border-2 border-primary hover:text-primary ">
        Find out more
      </button>
    </div>
  );
}

export default History;
