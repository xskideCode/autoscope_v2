"use client";

import Link from "next/link";

const MenuItem = ( { label, href, hidden, onClick } ) => {
  
  return (
    <div>
      <Link
        href={href}
        className={`flex py-3 text-[0.9rem] text-secondary font-medium font-sans text-nowrap justify-center hover:scale-125 ${hidden ? "md:hidden " : ""}`}
        onClick={onClick}
      >
        {label}
      </Link>
    </div>
  )
}

export default MenuItem