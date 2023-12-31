import React from "react";
import HeroSection from "../components/HeroSection";

const about = () => {
  return (
    <div className="bg-gradient-to-r flex-col pt-6 sm:h-[80vh] relative flex justify-center items-center from-pink-300 via-purple-300 to-indigo-300 text-black  w-full">
      {/* hero section */}
      <div className="w-[80%]">
        <HeroSection
          heading={"OUR STORY"}
          paragraph={
            "From award-winning dramas to blockbuster action movies , we've got you covered.Browse our selection of the latest and greatest movies.and find your new favourite today"
          }
          image={"/about1.svg"}
        />
        {/* shape divider */}
      </div>
      <img
        src="/waves.svg"
        alt="shape-divider"
        className="w-full h-24 absolute rotate-180 -bottom-[3px]"
      />
    </div>
  );
};

export default about;
