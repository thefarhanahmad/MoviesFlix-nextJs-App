"use client";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import React, { useState } from "react";

const Navbar = () => {
  // const router = useRouter()
  // console.log("params in navbar : ",router.pathname)

  // manage state for responsive navbar
  const [openMenuBar, setOpenMenuBar] = useState(true);
  // console.log(openMenuBar);

  const changeMenubar = () => {
    setOpenMenuBar(true);
  };

  return (
    <div className="bg-white flex justify-center items-center text-black w-full h-[10vh] border">
      <div className="w-[80%] flex justify-between items-center">
        {/* logo */}
        <div className="text-2xl text-red-500">
          <Link href={"/"}>moviesFLIX</Link>
        </div>

        {/* responsive navbar */}
        <div>
          {/* nav items */}
          <div className="sm:flex gap-6 text-md hidden">
            <Link
              href="/about"
              className={`hover:text-red-600 transition-all duration-200 `}
            >
              about
            </Link>
            <Link
              href="/movies"
              className={`hover:text-red-600 transition-all duration-200 `}
            >
              movies
            </Link>
            <Link
              href="/contact"
              className={`hover:text-red-600 transition-all duration-200 `}
            >
              contact
            </Link>
          </div>

          {/* hamburger */}
          <button
            className="sm:hidden flex flex-col gap-2 z-40 absolute"
            onClick={() => setOpenMenuBar((pre) => !pre)}
          >
            {openMenuBar ? <GiHamburgerMenu /> : <RxCross2 />}
          </button>
        </div>
      </div>

{/* responsive nav items */}
      <div
        className={`absolute justify-center items-center flex-col gap-4 py-6 flex sm:hidden ${
          openMenuBar ? "hidden" : "flex"
        } transition-all duration-200 top-[10%] bg-white font-semibold text-red-600  w-full z-10`}
      >
        <Link
          onClick={changeMenubar}
          href="/about"
          className={`hover:text-red-600 transition-all duration-200 `}
        >
          about
        </Link>
        <Link
          onClick={changeMenubar}
          href="/movies"
          className={`hover:text-red-600 transition-all duration-200 `}
        >
          movies
        </Link>
        <Link
          onClick={changeMenubar}
          href="/contact"
          className={`hover:text-red-600 transition-all duration-200 `}
        >
          contact
        </Link>
        <div
          onClick={changeMenubar}
          className=" bg-transparent backdrop-blur-[2px] w-full h-[80vh] z-0 top-[9.5rem] transition-all duration-200 absolute"
        ></div>
      </div>
    </div>
  );
};

export default Navbar;
