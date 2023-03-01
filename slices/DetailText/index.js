import { PrismicRichText } from "@prismicio/react";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.DetailTextSlice} DetailTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DetailTextSlice>} DetailTextProps
 * @param { DetailTextProps }
 */
const DetailText = ({ slice }) => {
  // console.log(slice.primary.text);
  return (
    <>
      <div className="div col-start-3 relative leading-[1.15rem] md:leading-6 text-base md:text-xl text-center w-[93vw] md:w-[70vw] lg:w-[55vw]  xl:w-[40vw]">
        {/* <div className="text-left">
          <PrismicRichText field={slice.primary.text} />
        </div> */}
        <div className="text-left ">
          {slice.primary.text ? (
            <>
              {slice.primary.text.map((t, i) => (
                <div key={i} className={`${i === 0 ? "mt-0" : "mt-5"}`}>
                  {t.text}
                </div>
              ))}
            </>
          ) : null}
        </div>
      </div>
      <style jsx>{`
        .editor-wrapper {
          margin-top: 50px;
        }
      `}</style>
    </>
  );
};

export default DetailText;
