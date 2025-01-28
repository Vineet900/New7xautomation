import React from "react";
import pay6 from "/pay6.jpg";
import pay2 from "/pay2.jpg";
import pay3 from "/pay3.jpg";
import pay5 from "/pay5.jpg";
import rename from "/rename.png";
import arrow from "/arrow1.png";
import logo2 from "/logo2.png";

const Page3 = () => {
  return (
    <div>
      <div className="text-center flex justify-center items-center  ">
        <h1
          style={{ fontStyle: "italic" }}
          className="
    uppercase 
    p-4 
  
     
    text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
    font-serif font-extrabold 
    bg-green-600 
    tracking-tight 
    text-white 
    w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] 
    mx-auto 
    rounded-md 
    text-center"
        >
          Trusted Clients
        </h1>
      </div>
      <div className="mx-4 md:mx-[20%] mt-5 h-full border-zinc-100 border-none shadow-lg shadow-zinc-300">
        <h1 className="text-[#003566] font-bold text-4xl mt-5 text-center">
          Proven Success with Trusted Clients
        </h1>
        <div className="flex justify-center mb-5">
          <img
            className="h-[8vh]"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/Pk6IXwF2GZSJI2pA3LTF/media/2710bbaf-8e3c-40ba-bfc0-7803d2a1cfcf.png"
            alt=""
          />
        </div>
        <div className="flex justify-center ">
          <img
            className="h-full  border-[7px] border-red-600 "
            src={pay6}
            alt=""
          />
        </div>
        <div className="m-5 text-sm">
          <h1 className="text-xl font-bold">
            I’ve had the privilege of working with some incredible clients who
            trusted me to help automate their YouTube channels. These clients
            recognized the power of streamlining their processes to maximize
            growth and engagement. By leveraging my automation strategies,
            they’ve been able to focus more on creating content, while I handle
            the heavy lifting behind the scenes. It’s rewarding to see them
            succeed whether through increased views, subscriber growth, or
            better monetization and I’m proud to have earned their trust and
            investment in my services. These results aren’t just a testament to
            the power of automation, but also to the value of working with a
            reliable, results-driven partner.
          </h1>
        </div>
        <div className="flex justify-center items-center px-4">
          <h1 className="text-[#003570] text-center w-full sm:w-[90%] md:w-[70%] text-2xl sm:text-3xl lg:text-4xl uppercase font-bold mt-5 tracking-tighter">
            Here’s the payment proof of our trusted clients
          </h1>
        </div>

        <div className="flex items-center flex-col gap-y-10 mt-5 relative ">
          <div className="border-[7px] border-red-600">
            <img className="w-[70vh] h-fit " src={pay2} alt="" />
          </div>
          <img
            className="h-[15vh] absolute left-[5vh] top-[10vh] rotate-6 sm:inline  hidden sm:opacity-0 md:opacity-0 lg:opacity-0 xl:opacity-100"
            src={arrow}
            alt=""
          />

          <div>
            <img
              className="w-[70vh] h-fit border-[7px] border-red-600"
              src={pay3}
              alt=""
            />
          </div>
          <img
            className="h-[15vh] absolute bottom-[45vh] sm:inline  hidden rotate-180 right-[5vh]"
            src={arrow}
            alt=""
          />
          <div>
            <img
              className="w-[70vh] h-fit border-[7px] border-red-600"
              src={pay5}
              alt=""
            />
          </div>
          <img
            className="h-[15vh] absolute left-[5vh] sm:inline  hidden bottom-[10vh] rotate-6"
            src={arrow}
            alt=""
          />
        </div>
        <div className="m-5 mt-10 text-sm">
          <h1 className="text-xl font-bold">
            At 7XAUTOMATION, we’ve built strong, lasting relationships with
            clients who trust us to help them automate their YouTube growth. The
            payments we receive from our clients are a testament to the value we
            deliver. These are just a few of the many successful transactions
            that show our clients’ commitment to the results we provide. With
            countless payment proofs behind us, we stand by our mission to drive
            success through YouTube automation. Every dollar invested in our
            services is a step toward growing their digital presence and
            achieving real, measurable results.
          </h1>
        </div>
        <div className="flex justify-center">
          <h1 className="text-[#003570] flex justify-center w-[90%] md:w-[80%] text-4xl uppercase font-bold mt-5 tracking-tighter">
            youtube channel sale amount ✅
          </h1>
        </div>
        <div className="flex items-center justify-center ">
          <img className="h-[50vh] " src={rename} alt="" />
        </div>
        <div className="flex justify-center mt-5 mb-10">
          <img className="h-[35vh]" src={logo2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Page3;
