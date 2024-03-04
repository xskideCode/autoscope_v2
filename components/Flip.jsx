import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Flip = ({ children, horizontal, hover }) => {
  const [isHovered, setIsHovered] = useState(hover);

  useEffect(() => {
    setIsHovered(hover);
  }, [hover]);

  const hoverState = isHovered ? {
    x: horizontal ? "-100%" : 0,
    y: horizontal ? 0 : "-100%",
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    skewX: 0,
    skewY: 0,
  } : {
    x: 0,
    y: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    skewX: 0,
    skewY: 0,
  };

  return (
    <div 
      className="clip"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className=""
        animate={hoverState}
        transition={{ duration: 0.2 }}
      >
        <div className="">{children}</div>
      </motion.div>
      <motion.div
        className={horizontal ? "absolute -right-full" : "absolute -bottom-full"}
        animate={hoverState}
        transition={{ duration: 0.2 }}
      >
        <div className="">{children}</div>
      </motion.div>
    </div>
  )
}

export default Flip