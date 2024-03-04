import Image from "next/image";
import React from "react";

const Imgbg = () => {
  return (
    <div className="relative z-10 flex justify-center overflow-hidden items-center -my-8 " >
      <Image
        className="relative left-0 top-0 bottom-0 right-0 z-0 object-cover object-center w-[100vw] min-h-[240px] max-h-[600px] h-[calc(100vw-10rem)] "
        src="/assets/images/1.jpg"
        alt="landscape image"
        width={3543}
        height={2362}
      />
    </div>
  );
};

export default Imgbg;
