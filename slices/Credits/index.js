import { useState } from "react";

/**
 * @typedef {import("@prismicio/client").Content.CreditsSlice} CreditsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CreditsSlice>} CreditsProps
 * @param { CreditsProps }
 */
const Credits = ({ slice }) => {
  const credits = slice.items.reduce((acc, { title, name }) => {
    acc[title] ??= { title: title, name: [] };
    if (Array.isArray(name)) acc[title].name = acc[title].name.concat(name);
    else acc[title].name.push(name);

    return acc;
  }, {});

  const allCredits = Object.values(credits);

  return (
    <>
      <div className="text-center col-start-3 relative leading-[1.2rem] sm:leading-[1.4rem] text-xs md:text-sm w-[94vw] mt-[0vw]md:mt-[10px] ">
        <div className="uppercase">Credits</div>

        <div className="">
          <div className={`mt-0`}>
            {allCredits.map((credit, i) => {
              return (
                <div key={i} className=" ">
                  <span className="">{credit.title} - </span>
                  {credit.name.map((person, i) => {
                    return (
                      <span key={i} className="underline">
                        {person}
                        {i !== credit.name.length - 1 && ","}{" "}
                      </span>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Credits;
