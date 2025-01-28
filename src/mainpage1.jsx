import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import logo from "/logo.png";

const Mainpage1 = () => {
  useGSAP(() => {
    gsap.from(".imgCon", {
      delay: 1,
      duration: 2,
      x: 100,
      opacity: 0,
    });
  });

  return (
    <>
     <div className="h-screen ">
      {/* <div className="absolute z-0">
        <img
          className=" opacity-20 ml-[-20vh] h-[250vh]  w-[150vh] md:w-[200vh]"
          src={logo}
          alt=""
        />
      </div> */}

      {/* <div className="w-full max-w-7xl "> */}
        {/* Left Section: Text Content */}
        {/* <div className="md:w-1/2 px-6 mt-[-55vh] opacity-100">
          <div className="bg-slate-200 w-fit px-4 py-2 rounded-2xl">
            <span className="text-sm text-red-600 font-medium uppercase tracking-wide">
              #Best YouTube Automation Company
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-6 leading-tight">
            We Make YouTube Work for Business
          </h1>
          <p style={{ fontStyle: "italic",fontFamily : "Fjalla One" }} className="text-white mt-6   text-base md:text-lg leading-relaxed bg-red-600 p-2 rounded-md">
          7xAutomation is a leading provider of innovative YouTube Automation services and education, empowering businesses and content creators to scale their channels and revenue. Our dedicated team of experts develops data-driven strategies, leveraging the latest automation tools and AI-driven insights to streamline processes, maximize engagement, and boost profitability. Whether you’re launching a new channel or expanding an existing audience, 7xAutomation offers tailored solutions to optimize your branding, video production, and monetization. We also provide hands-on training, industry best practices, and ongoing support to help you stay ahead of the competition. Start your YouTube journey with 7xAutomation and experience limitless online success.
          </p>
        </div> */}

        {/* Right Section: Image */}
        {/* <div className=" md:w-1/2 flex items-center justify-center h-full  ">
          <img
            src="/pic.png" // Replace this with the path to your image file
            alt="Person using a phone"
            className="imgCon h-[150vh] w-full object-cover rounded-lg mx-auto "
          />
        </div> */}
 {/* </div> */}
    </div>
    </>
  );
};

export default Mainpage1;
