import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = ({ heading, paragraph, image }) => {
  return (
    <div className="relative w-full">
      {/* hero section */}
      <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-evenly items-center">
        {/* left side text */}
        <div className="flex flex-col gap-5 w-[40%]">
          <h1 className="text-3xl">{heading}</h1>
          <p className="text-sm">{paragraph}</p>
          <button className="bg-red-500 w-max rounded-xl px-4 py-1 text-sm font-semibold text-white">
            <Link href={"/movies"}>Explore movies</Link>
          </button>
        </div>

        {/* right side image */}
        <div>
          <Image src={image} width={400} height={400} alt="herosection-img"></Image>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
