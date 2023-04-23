import Image from "next/image";
import { useState } from "react";
import CuteDogsThumbnail from "./CuteDogsThumbnail";

const CuteDogsPage = ({ cuteDogs }) => {
  const Dogs = cuteDogs.data.dogs;

  return (
    <>
      <div className="pl-[2vw] md:pl-[1vw] mt-[80px] mb-[50px] lg:mb-[55px]">
        <p className=" text-gray-500 mb-2">About {Dogs.length} results</p>
        <div className="grid grid-cols-2 gap-x-[2vw] gap-y-[2vw] md:gap-y-[1vw] md:gap-x-[0vw] md:grid-cols-4  ">
          {Dogs.map((dog, i) => (
            <CuteDogsThumbnail key={i} dog={dog} i={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CuteDogsPage;
