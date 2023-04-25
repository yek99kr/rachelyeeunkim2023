import WorkListPhoto from "./WorkListPhoto";
import WorkListText from "./WorkListText";
import { useContext, useState } from "react";
import { BsJustifyLeft, BsGrid, BsInstagram } from "react-icons/bs";
import { AppContext } from "../../context/AppContext";

const WorksPage = ({ works }) => {
  const { photo, updatePhoto } = useContext(AppContext);

  return (
    <>
      <div
        onClick={() => {
          updatePhoto(!photo);
        }}
        className="z-[1000] fixed hover:text-gray-400 transition-[0.2s] drop-shadow-[0_0px_4px_rgba(0,0,0,0.15)] bg-white rounded right-[2vw] md:right-[1vw] bottom-[15px] lg:top-[15px] w-[40px] h-[40px] md:w-[50px] md:h-[50px] text-2xl md:text-3xl p-2 md:p-2.5 cursor-pointer overflow-x-hidden"
      >
        {photo ? <BsJustifyLeft /> : <BsGrid />}
      </div>
      {/* <div className="fixed inline right-[2vw] md:right-[1vw] bottom-[15px] z-[50]">
        <div className=" inline drop-shadow-[0_0px_5px_rgba(0,0,0,0.2)] bg-white rounded  w-[50px] h-[50px] text-3xl p-2.5">
          <VscMail />
        </div>
        <div className="  inline drop-shadow-[0_0px_5px_rgba(0,0,0,0.2)] bg-white rounded  w-[50px] h-[50px] text-3xl p-2.5">
          <BsInstagram />
        </div>
      </div> */}
      {/* {photo ? (
        <div className="hidden">
          <WorkListPhoto works={works} />
        </div>
      ) : (
        <WorkListText works={works} />
      )} */}

      <div
        className={`absolute transition-[0.2s] ${photo ? "block" : "hidden"} `}
      >
        <WorkListPhoto works={works} />
      </div>
      <div
        className={`absolute  transition-[0.2s]  ${photo ? "hidden" : "block"}`}
      >
        <WorkListText works={works} />
      </div>

      {/* <div className="grid justify-items-stretch grid-cols-2 gap-y-[2vw] md:gap-y-[1vw]  md:grid-cols-3  w-[100vw] pl-[2vw] md:pl-[1vw] mt-[80px] mb-[50px] lg:mb-[55px]">
        {works.map((work, i) => (
          <div
            className="relative rounded justify-self-start w-[47vw] md:w-[32vw] aspect-square  overflow-hidden"
            key={work.uid}
          >
            <WorkThumbnail work={work} />
          </div>
        ))}
      </div> */}
    </>
  );
};

export default WorksPage;
