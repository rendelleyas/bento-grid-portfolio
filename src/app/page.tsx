"use client"; // 👈 use it here
import Image from "next/image";
import { useState } from "react";

import rjse from "../../public/rjse.svg";
import prog_icon from "../../public/programming-icon.svg";
import prog_content from "../../public/programming-content.svg";
import framework_icon from "../../public/framework-icon.svg";
import framework_content from "../../public/framework-content.svg";
import double_arrow from "../../public/double-arrow.svg";

import monkey from "../../public/monkey.svg";
import contact_icon from "../../public/contact-icon.svg";

import vue_icon from "../../public/vue-icon.svg";
import php_icon from "../../public/php-icon.svg";
import laravel_icon from "../../public/laravel-icon.svg";
import nodejs_icon from "../../public/nodejs-icon.svg";
import antd_icon from "../../public/antd-icon.svg";
import react_icon from "../../public/react-icon.svg";
import mysql_icon from "../../public/mysql-icon.svg";
import nuxt_icon from "../../public/nuxt-icon.svg";
import fourplus from "../../public/fourplus.svg";
import twentyplus from "../../public/twentyplus.svg";
// @ts-ignore
import resume from "../files/Resume.pdf";

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black text-white">
      <div className="w-full ">
        <div className="grid h-full md:grid-cols-3">
          {/* First Column */}
          <div className=" m-2 rounded">
            <div className="h-full flex flex-col ">
              <div className="bg-[#161616] m-2 rounded flex items-center justify-center hover:border-2 hover:border-[#01BE53] transition ease-in-out hover:-translate-y-1 hover:scale-102">
                <Image
                  src={rjse}
                  alt="RJSE Logo"
                  width={300}
                  height={300}
                  className="mb-10 h-[250px]"
                />
              </div>
              <div className="m-2 rounded flex items-center justify-center">
                <div className="grid grid-cols-2 gap-2 items-center justify-center w-full">
                  <div className="bg-[#161616] rounded items-center justify-center flex hover:border-2 hover:border-[#01BE53] transition ease-in-out hover:-translate-y-1 hover:scale-102">
                    <div className="items-center justify-center p-4 min-h-[280px] flex-grow-0 py-6">
                      <div className="items-center justify-center">
                        <Image
                          src={prog_icon}
                          alt="RJSE Logo"
                          width={50}
                          height={50}
                          className="mx-auto "
                        />
                      </div>
                      <h1 className="text-center text-lg font-bold m-2">
                        Programming
                      </h1>
                      <Image
                        src={prog_content}
                        alt="RJSE Logo"
                        width={200}
                        height={400}
                      />
                    </div>
                  </div>
                  <div className="bg-[#161616] rounded items-center justify-center flex hover:border-2 hover:border-[#01BE53] transition ease-in-out hover:-translate-y-1 hover:scale-102">
                    <div className="items-center justify-center p-4 min-h-[280px] flex-grow-0 py-6">
                      <div className="items-center justify-center ">
                        <Image
                          src={framework_icon}
                          alt="RJSE Logo"
                          width={50}
                          height={50}
                          className="mx-auto"
                        />
                      </div>
                      <h1 className="text-center text-lg font-bold m-2">
                        Frameworks
                      </h1>
                      <Image
                        src={framework_content}
                        alt="RJSE Logo"
                        width={200}
                        height={400}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#161616] m-2 rounded  items-center justify-center p-8 h-[300px] hover:border-2 hover:border-[#01BE53] transition ease-in-out hover:-translate-y-1 hover:scale-102 group/test">
                <p className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl">
                  I<span className="text-[#01BE53]"> craft</span> and
                  <br></br>
                  <span className="text-[#01BE53]"> build </span>
                  stuff{" "}
                </p>
                <div className="flex invisible items-center justify-end relative p-4  group bottom-0 group-hover/test:visible cursor-pointer">
                  <p className="text-lg font-bold">Portfolio</p>
                  <Image
                    src={double_arrow}
                    alt="Arrow"
                    width={20}
                    height={20}
                    className="mr-2 ml-2"
                  />
                  <span className="absolute bottom-0 left-0 right-0 h-full hidden group-hover:block transition-transform duration-300 ease-in-out transform-gpu hover:bottom-[-4px]"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className=" m-2 rounded">
            <div className="grid grid-rows-3 gap-2">
              <div className="bg-[#161616] m-2 rounded p-4 row-span-3 hover:border-2 hover:border-[#01BE53] transition ease-in-out hover:-translate-y-1 hover:scale-102">
                <h1 className="text-left text-2xl font-bold ">
                  Rendell Jay S. Eyas
                </h1>
                <p className="text-left text-sm mt-1 text-[#8B8B8B]">
                  Web Developer <span className="text-[#01BE53]">|</span>{" "}
                  Laravel <span className="text-[#01BE53]">|</span> VueJs{" "}
                  <span className="text-[#01BE53]">|</span> React{" "}
                  <span className="text-[#01BE53]">|</span> MySQL
                </p>
                <button
                  className="bg-[#01BE53] hover:bg-blue-700 text-white font-bold py-1 px-4 rounded my-4"
                  onClick={() => {
                    window.open(resume, "_blank");
                  }}
                >
                  Resume
                </button>
              </div>
              <div className="bg-[#161616] m-2 rounded row-span-12 pb-12 h-[543px] hover:border-2 hover:border-[#01BE53] transition ease-in-out hover:-translate-y-1 hover:scale-102">
                <div className="p-4">
                  <h1 className="text-left text-3xl font-bold mb-2">
                    Who am I
                  </h1>
                  <h3 className="text-[15px] text-[#4C4C4C] pt-4">MY STORY</h3>
                  <div className="text-left text-[#999999] py-4">
                    Has more then 4 years of experience in the IT industry and
                    is eager to learn more and explore new things that will help
                    me improve my abilities and mindset as a professional.
                  </div>
                  <div className="text-left text-[#999999] py-4">
                    With this, I would gladly extend my efforts in order to
                    contribute to the company's success.
                  </div>
                  <h3 className="text-[15px] text-[#4C4C4C] pt-4">
                    WHAT DO I DO NOW
                  </h3>
                  <div className="text-left text-[#999999] py-4">
                    I am currently a web developer at NetlinkVoice building and
                    exploring web related things.
                  </div>
                </div>
              </div>
              <div className="m-2 rounded">
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded bg-[#161616] h-[160px] hover:border-2 hover:border-[#01BE53] transition ease-in-out hover:-translate-y-1 hover:scale-102">
                    <Image
                      src={monkey}
                      alt="RJSE Logo"
                      width={160}
                      height={160}
                      style={{
                        width: "300px",
                        marginTop: "-150px",
                        maxWidth: "300px",
                        marginLeft: "-40px",
                        transition: "opacity 0.5s",
                      }}
                    />
                    {/* <Image
                      src="/monkey2.svg"
                      alt="RJSE Logo"
                      width={160}
                      height={160}
                      className={`${isHovered ? "" : "hidden"}`}
                      style={{
                        width: "200px",
                        marginTop: "-150px",
                        marginLeft: "-20px",
                        transition: "opacity 0.5s",
                      }}
                    /> */}
                  </div>
                  <div
                    className="rounded bg-[#01BE53] cursor-pointer"
                    onClick={() => setShowModal(true)}
                  >
                    <div>
                      <Image
                        src={contact_icon}
                        alt="RJSE Logo"
                        width={70}
                        height={70}
                        className="mx-auto pt-3"
                      />
                      <div className="text-center text-white text-3xl font-bold p-4">
                        Contact Me!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Row */}
          <div className=" m-2 rounded">
            <div className="h-full flex flex-col ">
              <div className="bg-[#161616] m-2 rounded  items-center justify-center h-[290px] hover:border-2 hover:border-[#01BE53] transition ease-in-out hover:-translate-y-1 hover:scale-102">
                <div className="grid grid-cols-4 gap-2 items-center justify-center w-full p-7">
                  <div>
                    <Image
                      src={vue_icon}
                      alt="RJSE Logo"
                      width={90}
                      height={90}
                      className="mx-auto"
                    />
                  </div>
                  <div>
                    <Image
                      src={php_icon}
                      alt="RJSE Logo"
                      width={90}
                      height={90}
                      className="mx-auto"
                    />
                  </div>
                  <div>
                    <Image
                      src={laravel_icon}
                      alt="RJSE Logo"
                      width={90}
                      height={90}
                      className="mx-auto"
                    />
                  </div>
                  <div>
                    <Image
                      src={nodejs_icon}
                      alt="RJSE Logo"
                      width={90}
                      height={90}
                      className="mx-auto"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2 items-center justify-center w-full p-7">
                  <div>
                    <Image
                      src={antd_icon}
                      alt="RJSE Logo"
                      width={90}
                      height={90}
                      className="mx-auto"
                    />
                  </div>
                  <div>
                    <Image
                      src={react_icon}
                      alt="RJSE Logo"
                      width={90}
                      height={90}
                      className="mx-auto"
                    />
                  </div>
                  <div>
                    <Image
                      src={mysql_icon}
                      alt="RJSE Logo"
                      width={90}
                      height={90}
                      className="mx-auto"
                    />
                  </div>
                  <div>
                    <Image
                      src={nuxt_icon}
                      alt="RJSE Logo"
                      width={90}
                      height={90}
                      className="mx-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="m-2 rounded flex items-center justify-center">
                <div className="grid grid-cols-2 gap-2 items-center justify-center w-full">
                  <div className="bg-[#161616] rounded items-center justify-center flex h-full hover:border-2 hover:border-[#01BE53] transition ease-in-out hover:-translate-y-1 hover:scale-102">
                    <div className="items-center justify-center p-4 flex-grow-0 py-6">
                      <div className="items-center justify-center">
                        <Image
                          src={fourplus}
                          alt="RJSE Logo"
                          width={120}
                          height={120}
                          className="mx-auto"
                        />
                      </div>
                      <h1 className="text-center text-2xl font-bold m-4">
                        Years
                      </h1>
                      <div className="text-2xl text-center justify-center text-[#8B8B8B]">
                        Been a web developer for more than a 4 years now
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#161616] rounded items-center justify-center flex h-full hover:border-2 hover:border-[#01BE53] transition ease-in-out hover:-translate-y-1 hover:scale-102">
                    <div className="items-center justify-center p-4 flex-grow-0 py-6">
                      <div className="items-center justify-center">
                        <Image
                          src={twentyplus}
                          alt="RJSE Logo"
                          width={190}
                          height={190}
                          className="mx-auto"
                        />
                      </div>
                      <h1 className="text-center text-2xl font-bold m-4">
                        Years
                      </h1>
                      <div className="text-2xl text-center justify-center text-[#8B8B8B]">
                        Has been assigned for more than 20 projects
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#161616] m-2 rounded  items-center justify-center p-8 h-[300px] hover:border-2 hover:border-[#01BE53] transition ease-in-out hover:-translate-y-1 hover:scale-102">
                <p className="p-7 text-center xs:text-5xl sm:text-3xl md:text-7xl lg:text-7xl">
                  In Progress
                </p>
                <hr className="border-[#01BE53] mb-4" />
                <div className="xs:text-lg sm:text-lg md:text-2xl lg:text-2xl  text-center justify-center text-[#8B8B8B]">
                  Thriving still to improved my skills and looking up for the
                  opportunity to{" "}
                  <span className="text-[#01BE53]"> contribute</span> and{" "}
                  <span className="text-[#01BE53]"> learn</span>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="fixed inset-0 bg-gray-700 bg-opacity-60 z-40"></div>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition ease-in-out">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#161616] outline-none focus:outline-none">
                <div className="p-4">
                  <div className="text-center text-2xl font-bold">
                    Contact Me!
                  </div>
                  <form className="p-4">
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-white">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 mt-2 bg-[#222222] border rounded-md focus:outline-none focus:ring-2 focus:ring-[#01BE53] focus:border-transparent"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-white">
                        Email
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 mt-2 bg-[#222222] border rounded-md focus:outline-none focus:ring-2 focus:ring-[#01BE53] focus:border-transparent"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-white">
                        Message
                      </label>
                      <textarea
                        placeholder="Enter your message"
                        className="w-full px-4 py-2 mt-2 bg-[#222222] border rounded-md focus:outline-none focus:ring-2 focus:ring-[#01BE53] focus:border-transparent"
                      />
                    </div>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 ">
                  <button
                    className="text-[#01BE53] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className=" bg-[#01BE53] active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </main>
  );
}
