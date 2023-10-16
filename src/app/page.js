import React from "react";
import HeroSection from "./components/HeroSection";

const page = () => {
  return (
    <div className="bg-gradient-to-r flex-col relative flex justify-center items-center from-pink-300 via-purple-300 to-indigo-300 text-black  w-full">
      {/* hero section */}
      <div className="w-[80%]">
        <HeroSection
          heading={"LET'S WATCH MOVIES TOGETHER"}
          paragraph={
            "From award-winning dramas to blockbuster action movies , we've got you covered.Browse our selection of the latest and greatest movies.and find your new favourite today"
          }
          image={"/home.svg"}
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

export default page;
