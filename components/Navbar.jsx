"use client";

import Link from "next/link";
import React, { useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, stagger } from "framer-motion";
import MenuItem from "./MenuItem";
import Flip from "./Flip";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isNotMainPage = pathname !== "/";

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const sequence = [
    ["div", { opacity: 1 }, { duration: 0.5 }],
    ["MenuItem", { x: [-100, 0] }, { delay: stagger(0.1) }],
  ];

  return (
    <div className="w-full flex items-center">
      <header className="w-full py-4 px-5 ">
        <nav className="md:flex hidden overflow-hidden flex-row items-center justify-between gap-[1.88rem] md:gap-7 text-left text-[0.9rem] text-secondary font-medium font-sans text-nowrap flex-nowrap ">
          <div className="flex flex-row items-center justify-start w-80 gap-5">
            <Link href="/carrental" className="text-inherit">
              <Flip>Car Rentals</Flip>
            </Link>
            <Link href="/carevaluation" className="text-inherit">
              <Flip>Vehicle Valuation</Flip>
            </Link>
            <Link href="/tours" className="text-inherit">
              <Flip>Tours</Flip>
            </Link>
          </div>
          <div className="w-80 flex justify-center items-center">
            <Link
              href="/"
              className="[text-decoration:none] font-bold text-xs text-center text-secondary"
            >
              <Image
                className="mx-auto"
                width={50}
                height={30}
                src={"/assets/images/autoscope_logo.png"}
                alt="logo"
              />
              AUTOSCOPE
            </Link>
          </div>
          <div className="flex justify-end items-center w-80">
            <Link href="/contact">
              <button className="bg-secondary border border-secondary hover:bg-emerald-500 transition-all transform duration-150 ease-in-out rounded-3xl text-base text-primary font-semibold py-2 px-5">
                <Flip>Contact us</Flip>
              </button>
            </Link>
          </div>
        </nav>
        <div className="md:hidden flex justify-between">
          <div className="flex flex-shrink justify-center items-center">
            <Link
              href="/"
              className="[text-decoration:none] font-bold text-[0.5rem]  text-center text-secondary"
            >
              <Image
                className="mx-auto"
                width={40}
                height={20}
                src={"/assets/images/autoscope_logo.png"}
                alt="logo"
              />
              AUTOSCOPE
            </Link>
          </div>
          <div
            onClick={toggleOpen}
            className="
            bg-white
            border-neutral-200
            text-white
            flex 
            flex-row
            items-center
            gap-3
            cursor-pointer
            transition
          "
          >
            <button className="text-black w-7  h-7  relative focus:outline-none transform transition-all  ring-0 ring-green-800 hover:ring-2 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
              <span className="sr-only">Open main menu</span>
              <div className="block w-4 absolute left-1/2 top-1/2 transform  -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-4 bg-current transform transition duration-500 ease-in-out ${
                    isOpen ? "rotate-45" : " -translate-y-1.5"
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute  h-0.5 w-4 bg-current   transform transition duration-500 ease-in-out" ${
                    isOpen ? "opacity-0" : ""
                  } `}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute  h-0.5 w-4 bg-current transform  transition duration-500 ease-in-out" ${
                    isOpen ? "-rotate-45" : " translate-y-1.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="
            absolute
            shadow-md
            w-[100vw]
            bg-primary
            overflow-hidden
            top-16 
            left-0
            text-sm
            z-40
            h-[14rem]
          "
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1, duration: 1.5 }}
              exit={{ y: -200, opacity: 0 }}
            >
              <div className="flex flex-col cursor-pointer">
                <motion.div className="flex flex-col items-center justify-center pt-2">
                  {["Car Rentals", "Vehicle Valuation", "Tours"].map(
                    (label, index) => (
                      <motion.div
                        key={label}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{
                          y: 0,
                          opacity: 1,
                          transition: { delay: index * 0.3, ease: "easeInOut" },
                        }}
                      >
                        <MenuItem
                          label={label}
                          href="/"
                          hidden={true}
                          onClick={toggleOpen}
                        />
                      </motion.div>
                    )
                  )}
                  <Link href="/contact">
                    <motion.button
                      className="bg-secondary w-fit hover:bg-emerald-500 transition-all transform duration-150 ease-in-out rounded-3xl text-base text-primary font-semibold my-2 py-2 px-5"
                      initial={{ y: 40, opacity: 0 }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        transition: { delay: 0.3, ease: "easeInOut" },
                      }}
                    >
                      <Flip>Contact us</Flip>
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Navbar;
