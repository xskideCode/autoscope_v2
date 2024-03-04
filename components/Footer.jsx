"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { usePathname } from "next/navigation";
import Socials from "./Socials";

export const footerLinks = [
  {
    title: "Links",
    links: [
      {
        name: "Tours",
        link: "/tour",
      },
      {
        name: "Car Evaluation",
        link: "/carevaluation",
      },
      {
        name: "Car Rentals",
        link: "/carrental",
      },
    ],
  },
  {
    title: "Address",
    links: [
      {
        name: "Shelter Afrique House 3rd Floor",
        link: "",
      },
      {
        name: "Longonot Road, Upper Hill",
        link: "",
      },
      {
        name: "Nairobi Kenya",
        link: "",
      },
    ],
  },
  {
    title: "Phone Numbers",
    links: [
      {
        name: "(+254) 202 111 503",
        link: "",
      },
      {
        name: "(+254) 733 866 759",
        link: "",
      },
      {
        name: "(+254) 721 396 913",
        link: "",
      },
    ],
  },
  {
    title: "Emails",
    links: [
      {
        name: "info@autoscopeinternational.com",
        link: "",
      },
      {
        name: "sales@autoscopeinternational.com",
        link: "",
      },
      {
        name: "operations@autoscopeinternational.com",
        link: "",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: BsInstagram,
    link: "https://www.instagram.com/@topiblutours",
  },
  {
    id: "social-media-2",
    icon: BsFacebook,
    link: "https://www.facebook.com/@topiblutours",
  },
  {
    id: "social-media-3",
    icon: BsLinkedin,
    link: "https://www.ke.linkedin.com/in/topiblutours",
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const emailRef = useRef();
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  const handleContactClick = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      localStorage.setItem("email", email);
      console.log("email", email);
      window.location.href = "/contact";
    } else {
      setError("Please enter a valid email");
      emailRef.current.focus();
    }
  };

  return (
    <section
      className={`relative flex justify-between items-center border-t-2 border-black pb-4 w-full flex-col mt-auto bg-secondary ${
        isMainPage ? "" : "2xl:fixed 2xl:bottom-0 2xl:inset-x-0"
      }`}
    >
      {isMainPage && (
        <>
          <div className="flex justify-between md:flex-row flex-col mb-8 w-full">
            <div className="flex flex-col items-center justify-around mx-10">
              <h1 className="mt-2 sm:mt-4 max-w-[510px] md:px-0 px-2 text-lg text-white">
                CONTACT US
              </h1>
              <div className="flex flex-row">
                <label
                  htmlFor="UserEmail"
                  className="relative block overflow-hidden rounded-l-md  border border-r-0  border-gray-200 px-3 pt-3 shadow-sm focus-within:border-green-400 focus-within:ring-1 focus-within:ring-green-400"
                >
                  <input
                    type="email"
                    id="Email"
                    placeholder="Email"
                    ref={emailRef}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-white sm:text-sm"
                  />

                  <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 text-nowrap peer-focus:text-xs">
                    Email {error && <span className="text-red-500">{error}</span>}
                  </span>
                </label>
                <Link href="/contact">
                  <button
                    onClick={handleContactClick}
                    className="bg-gray-800 border border-gray-200 border-l-0 text-white rounded-r-md px-4 py-3 hover:bg-green-700 focus-within:border-green-400 focus-within:ring-1 focus-within:ring-green-400"
                  >
                    CONTACT
                  </button>
                </Link>
              </div>
            </div>

            <div
              className="
            flex-[1.5] 
            w-full 
            flex 
            lg:flex-row 
            justify-start
            lg:justify-end
            lg:gap-2
            xl:gap-10 
            gap-2
            flex-wrap 
            md:mt-0 
            mt-5 
            md:mr-4
            md:px-0 
            px-9
            
          "
            >
              {footerLinks.map((footerLink, i) => (
                <div
                  key={i}
                  className="flex flex-col my-0 sm:my-2 min-w-[50px]"
                >
                  <h4 className="font-poppins font-medium text-md lg:text-[18px] leading-[27px] text-white">
                    {footerLink.title}
                  </h4>
                  <ul className="list-none mt-2 sm:mt-4">
                    {footerLink.links.map((link, index) => (
                      <Link key={index} href={link.link}>
                        <li
                          key={index}
                          className={`
                        font-poppins 
                        font-normal 
                        text-xs
                        lg:text-sm
                        text-gray-400
                        sm:text-md 
                        lg:leading-[12px] 
                        md:leading-[5px] 
                        sm:leading-[5px] 
                        text-dimWhite 
                        hover:text-gray-100 
                        cursor-pointer 
                        ${
                          index !== footerLink.links.length - 1
                            ? "mb-1 sm:mb-4"
                            : "mb-0"
                        }
                      `}
                        >
                          {link.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <div
        className="
        w-full
        flex 
        justify-around 
        items-center 
        md:flex-row 
        flex-col 
        sm:pt-4
        pt-2
        border-t-[2px] 
        border-t-gray-800
      "
      >
        <p
          className="
          paragraph2
          text-center           
          text-gray-400
        "
        >
          Copyright{" "}
          <span className="align-bottom text-lg sm:text-[21px]">©</span> 2019
          Autoscope International. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-4 gap-5">
          {socialMedia.map((social) => (
            <Socials
              key={social.id}
              icon={social.icon}
              label={social.id}
              link={social.link}
              org
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
