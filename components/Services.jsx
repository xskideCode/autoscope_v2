import React from 'react'
import Card from './Card'

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white py-20 md:py-40 z-20 overflow-hidden rounded-3xl">
      <div className="my-2">
        <div className="text-center text-sm text-tertiary px-4 py-1 border border-tertiary rounded-3xl font-bold">
          Services
        </div>
      </div>
      <div className="my-1">
        <h2 className="text-center text-3xl md:text-5xl max-w-5xl  text-teal-950 font-medium">
          Delivering expert services for your Vehicle Valuation, Car Rental and Tours needs.
        </h2>
      </div>
      <div className="w-full px-10 mt-12">
        <Card border number={"1"} title={"Vehivle Valuation"} image={"/assets/images/evallogo.png"} desc={"Navigate Real Estate investing with our expert advice for maximized."} />
        <Card number={"2"} title={"Car Rental"} image={"/assets/images/evallogo.png"} desc={"Navigate Real Estate investing with our expert advice for maximized."} />
        <Card border number={"3"} title={"Tours"} image={"/assets/images/topiblu.png"} desc={"Navigate Real Estate investing with our expert advice for maximized."} />
      </div>
    </div>
  )
}

export default Services