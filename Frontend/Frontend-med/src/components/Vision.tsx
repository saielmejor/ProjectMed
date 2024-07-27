import React from "react";

import practice from "../assets/practice.svg";
export default function Vision() {
  return (
    <div className="border-b-2 border-b-[#c3c0df] py-6">
      <div className="container mx-auto flex justify-center items-center">
        {" "}
      </div>
      <div className="container mx-auto flex justify-around ">
        <div className="grid grid-cols-3 gap-8 p-10 ">
          <div>
            <div className="flex justify-center px-2">
              <img
                src={practice}
                alt="practice"
                className="object-cover md:max-w-[150px] "
              />
            </div>

            <span className="text-3xl "> Built for your independent practice, not a hospital </span>
            <p>
              {" "}
             

Kareo Clinical was designed and is managed by our team of doctors. We worked hard to make our technology powerful with a focus on ease of use.
            </p>
          </div>
          <div>
            <div className="flex justify-center px-2">
              <img
                src={practice}
                alt="practice"
                className="object-cover md:max-w-[150px] "
              />
            </div>
            <span className="text-3xl "> Designed to be friendly,
            flexible </span>
            <p>
              {" "}
              Kareo includes free support, free onboarding, free training, and clear and simple pricing that ensures you know exactly what things cost.
            </p>
          </div>
          <div>
            <div className="flex justify-center px-2">
              <img
                src={practice}
                alt="practice"
                className="object-cover md:max-w-[150px] "
              />
            </div>
            <span className="text-3xl "> Committed to
            your success </span>
            <p>
              {" "}
              Kareo’s goal is to enable your success by helping you and your staff make the right decisions and take the right steps to deliver results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
