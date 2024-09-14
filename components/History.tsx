import React from "react";
import Container from "./Container";

function History() {
  return (
    <div className="h-[600px]  bg-cover bg-historybg w-full">
      <h1 className="font-inter md:text-[50px]  text-[25px] text-center font-[600] text-white pt-[150px]">
        Creating Lasting Change
      </h1>

      <Container>
        <div className="flex flex-wrap justify-between  md:text-normal   text-center">
          <div className="text-center max-w-[350px] ">
            <p className=" font-indie font-[600] text-[70px] text-[#fbb040]">
              {" "}
              386+
            </p>
            <p className="text-center text-white text-[30px]"> outreaches</p>
          </div>

          <div className="text-center max-w-[350px] ">
            <p className=" font-indie font-[600] text-[70px] text-[#fbb040]">
              {" "}
              56+
            </p>
            <p className="text-center text-white text-[30px]">
              {" "}
              oimpacted persons
            </p>
          </div>

          <div className="text-center max-w-[350px] ">
            <p className=" font-indie font-[600] text-[70px] text-[#fbb040]">
              {" "}
              78K
            </p>
            <p className="text-center text-white text-[30px]"> volunteers</p>
          </div>
        </div>
      </Container>
      <button className="  mx-auto mt-[80px] bg-primary  text-[20px]  rounded-lg py-2 px-4 text-white flex items-center gap-2 hover:bg-white border-2 border-primary hover:text-primary ">
        Find out more
      </button>
    </div>
  );
}

export default History;
