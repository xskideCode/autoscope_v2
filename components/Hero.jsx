"use client";

import React from "react";
import Flip from "./Flip";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden h-[78vh] md:h-[88vh] mx-4">
      <video
        className=" object-cover h-[78vh] md:h-[88vh] w-[98vw]"
        width="100%"
        height="100%"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
      >
        <source src="/assets/videos/driving.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1 className="absolute max-w-[70vw] sm:max-w-[70vw] top-4 md:top-12 left-4 md:left-16 text-4xl md:text-5xl xl:text-7xl text-balance font-semibold font-sans text-secondary">
        Your Trusted Partner For Your Vehicle Needs
      </h1>
      <div className="absolute ml-2 md:ml-0 right-2 bottom-2 flex flex-col gap-5 bg-white rounded-2xl max-w-xs md:max-w-xl p-4 lg:p-8">
        <p className="font-normal text-sm lg:text-lg">
          Whether you need a vehicle for personal or business use, Autoscope has
          you covered. We are a leading company that offers comprehensive
          services for vehicle evaluation, car rental and tours in Kenya and
          beyond.
        </p>
        <Link href="/contact">
          <button className="bg-secondary border border-secondary hover:bg-emerald-500 w-fit transition-all transform duration-150 ease-in-out rounded-3xl text-base text-primary font-semibold py-2 px-5">
            <Flip>Contact us</Flip>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
