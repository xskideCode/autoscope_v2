import React from "react";

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white py-20 md:py-40 z-20 overflow-hidden rounded-b-3xl">
      <div className="my-2">
        <div className="text-center text-sm text-tertiary px-4 py-1 border border-tertiary rounded-3xl font-bold">
          Welcome to Autoscope
        </div>
      </div>
      <div className="my-1">
        <h2 className="text-center text-3xl md:text-5xl max-w-5xl  text-teal-950 font-medium">
          Your trusted partner for Vehicle Valuation, Car Rental and Tours.
        </h2>
      </div>
      <div className="max-w-xl">
        <p className="text-center text-base  text-teal-950 ">
          We offer comprehensive services for all your vehicle needs, from
          inspection and valuation to rental and touring. Whether you need a car
          for personal or business use, we have a wide range of vehicles to suit
          your needs and budget.
        </p>
      </div>
    </div>
  );
};

export default Intro;
