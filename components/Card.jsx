"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Flip from "./Flip";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

const Card = ({ number, title, image, desc, border }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full leading-6 text-emerald-900 ">
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`${
          border ? "border-y border-green-500" : ""
        } text-base z-[1] gap-3 md:gap-x-6 lg:gap-6 grid-rows-4 sm:grid-cols-2 lg:grid-rows-1 lg:grid-cols-[auto,.5fr,.5fr,.5fr,auto] items-center py-[3rem] no-underline grid place-content-start lg:place-content-center`}
      >
        <div className="px-4 hidden sm:flex justify-start">
          <Flip hover={isHovered}>
            <div className="text-lg">{number}</div>
          </Flip>
        </div>
        <div className="text-2xl md:text-3xl leading-6 text-emerald-900 font-medium  ">
          <div className="into-view-4">
            <h3 className="heading-style-h3 mobile-text">{title}</h3>
          </div>
        </div>
        <div className="lg:hidden block order-first row-span-4">
          <Image
            className="rounded-xl border-2 border-emerald-900"
            src={image}
            width={380}
            height={220}
            alt={"image"}
          />
        </div>
        <motion.div
          className="hidden lg:block lg:relative "
          animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.img
            className="absolute top-0 left-0 w-[200px] h-[150px] object-cover border-2 border-emerald-900  rounded-xl"
            src={image}
            alt=""
            initial={{ scale: 0.5, y: -40, opacity: 0 }}
            animate={
              isHovered
                ? { scale: 1, y: -70, opacity: 1 }
                : { scale: 0.5, opacity: 0 }
            }
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2,
              duration: 0.5,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        <div className="text-sm md:text-lg leading-5">
          <p>{desc}</p>
        </div>
        <div>
          <div className="lg:block hidden">
            <div className="px-2">
              <Flip horizontal hover={isHovered}>
                <FaArrowRightLong className="mx-2" size={22} />
              </Flip>
            </div>
          </div>
          <div className="lg:hidden block">
            <button className="bg-secondary border border-secondary hover:bg-emerald-500 transition-all transform duration-150 ease-in-out rounded-3xl text-base text-primary font-semibold py-2 px-5">
              Explore
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
