import React, { useContext, useEffect } from "react";
import { service } from "../components/export";
import { DarkModeContext } from "../components/DarkModeContext";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`${darkMode ? "dark bg-black" : "light bg-transparent"} pb-20`}
    >
      <section
        id="services"
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        } lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10`}
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1
            data-aos="zoom-in"
            className={`${darkMode ? "text-white" : "text-red-500"}`}
          >
            OUR SERVICES
          </h1>
          <h1
            data-aos="zoom-in"
            className={`${
              darkMode ? "text-white" : "text-black"
            } text-[40px] font-semibold leading-10`}
          >
            Top real estate <br />
            services available
          </h1>
        </div>
        <div
          id="service-box"
          className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          {service.map((items, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              key={index}
              className=" bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer"
            >
              <div className="p-6 rounded-full bg-red-200">
                <items.icon className="text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 coursor-pointer" />
              </div>
              <h1
                className={`text-[22px] ${
                  darkMode ? "text-white" : "text-white"
                } font-semibold`}
              >
                {items.title}
              </h1>
              <p
                className={`text-lg ${darkMode ? "text-white" : "text-white"}`}
              >
                {items.desc}
              </p>
              <button
                className={`border-b-2 border-red-600 ${
                  darkMode ? "text-white" : "text-white"
                } font-semibold`}
              >
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
