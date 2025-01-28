import React, { useState } from "react";
import logo2 from "/logo2.png";
import Mainpage from "./mainpage1";
import Footer from "./component/Footer";
import Page2 from "./component/Page2";
import Page3 from "./component/Page3";
import one from "/one.mp4";
import main from "/main1.png";
import mainvid from "/mainlogo.mp4";
// import { toast } from "react-toastify";
const App = () => {
  const [amount, setamount] = useState(10);

  // handlePayment Function
  const handlePayment = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_HOST_URL}/api/payment/order`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            amount,
          }),
        }
      );

      const data = await res.json();
      console.log(data);
      handlePaymentVerify(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePaymentVerify = async (data) => {
    try {
      // Check if Razorpay is loaded properly
      if (typeof window !== "undefined" && window.Razorpay) {
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Ensure the environment variable is correct
          amount: data.amount,
          currency: data.currency,
          name: "7xautomation",
          description: "Test Mode",
          order_id: data.id,
          handler: async (response) => {
            try {
              const res = await fetch(
                `${import.meta.env.VITE_BACKEND_HOST_URL}/api/payment/verify`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                  }),
                }
              );

              const verifyData = await res.json();

              if (verifyData.message) {
                toast.success(verifyData.message);
              } else {
                toast.error("Payment verification failed");
              }
            } catch (error) {
              console.error("Error verifying payment:", error);
              toast.error("An error occurred during verification.");
            }
          },
          theme: {
            color: "#5f63b8",
          },
        };

        // Initialize Razorpay and open payment modal
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } else {
        console.error("Razorpay is not loaded properly.");
        toast.error("Razorpay is not loaded properly.");
      }
    } catch (error) {
      console.error("Error handling payment:", error);
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <>
      <div className="h-full w-[100vw]  sm:w-full">
        <div className=" sm:h-[15vh] h-[0vh] w-full text-white flex flex-col md:flex-row justify-evenly items-center bg-white">
          <h1 className="text-[#1B77AC] text-2xl relative sm:top-[5vh] top-[0vh] ">
            <img
              className="h-[30vh] md:h-[35vh] sm:ml-10 ml-0 "
              src={logo2}
              alt=""
            />
          </h1>
          <div className="text-center relative sm:top-[3vh] gap-3 bottom-[3vh]">
            <h2 className="font-extrabold  text-black">
              February 1st @ 8 PM - 9 PM IST
            </h2>
            <button
              onClick={handlePayment}
              className="animate-move-left-right bg-red-600 font-extrabold sm:text-[14px] text-[8px]  uppercase flex flex-col justify-center items-center h-[8vh] sm:mt-[-40vh] md:mt-3 sm:h-[8vh] tracking-tighter cursor-pointer  shadow-md shadow-black sm:w-[100%] w-[50vw]"
            >
              SECURE YOUR ₹299 SEAT
              <br />
              <span className="text-[7px] sm:text-[12px] md:text-[12px]">
                5-7 working days Money Back Guarantee!
              </span>
            </button>
          </div>
        </div>
        <div className="sm:mt-40 z-0 relative">
          <Mainpage />
        </div>

        <div className="body bg-[#D82122] h-full text-white p-4 md:p-10  z-100 relative sm:bottom-[115vh] bottom-[52vh]">
          <div className="text-center flex flex-col items-center">
            <h2 className="font-bold capitalize text-xl">
              Learn how regular people are making money online by leveraging
            </h2>
            <video
              src={mainvid}
              autoPlay
              muted
              loop
              className="w-full max-w-[800px]"
            ></video>
            <h2 className="font-bold capitalize text-xl mb-4">
              To build a consistent income, while only spending a few hours a
              week
            </h2>
          </div>
          <div className="flex justify-center mt-3 relative">
            <iframe
              className="aspect-video sm:h-[65vh] h-[30vh] w-[90%] max-w-[800px] "
              src="https://www.youtube.com/embed/TyzVNa6VUuU"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h1
              style={{ fontStyle: "italic" }}
              className="absolute bg-white text-black w-[90%] max-w-[800px] flex justify-center font-extrabold text-xl z-20 mt-[-2vh]"
            >
              Watch This Short Video Below to Find Out More:
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center mt-3 mb-3">
            <h1 style={{ fontStyle: "italic" }} className="text-xl font-bold">
              February 1st @ 8 PM - 9 PM IST
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              onClick={handlePayment}
              className="animate-move-left-right text-red-600 bg-white font-extrabold sm:text-[14px] text-[8px]  uppercase flex flex-col justify-center items-center h-[8vh] sm:h-[8vh] tracking-tighter cursor-pointer  shadow-md shadow-black w-[60%] md:w-[20vw]"
            >
              SECURE YOUR ₹299 SEAT
              <br />
              <span className="text-[8px] sm:text-[12px] md:text-[12px]">
                5-7 working days Money Back Guarantee!
              </span>
            </div>
          </div>
        </div>

        <div className="h-full sm:mt-[-110vh] mt-[-50vh]">
          {/* Page 2 */}
          <Page2 />
          {/* Page 3 */}
          <Page3 />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
