import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.WorkDetailMedia9X16Slice} WorkDetailMedia9X16Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorkDetailMedia9X16Slice>} WorkDetailMedia9X16Props
 * @param { WorkDetailMedia9X16Props }
 */
const WorkDetailMedia9X16 = ({ slice }) => {
  return (
    <>
      {slice.primary.media.link_type === "Web" ? (
        <div className="col-start-3 md:p-0 w-[96vw] md:w-[30vw]  aspect-[9/16]">
          <iframe
            className="w-[100%] h-[100%]"
            src={`${slice.primary.media.url.slice(6)}?quality=1080p&loop=1${
              slice.primary.autoplay
                ? "&autopause=0&background=1&autoplay=1&muted=1&controls=0"
                : ""
            }`}
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>
      ) : (
        slice.primary.media.url && (
          <div className="relative col-start-3 md:p-0 w-[96vw] md:w-[40vw]  aspect-[9/16]">
            <Image
              src={slice.primary.media.url}
              alt={slice.primary.media.alt}
              priority={true}
              loading="eager"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
        )
      )}
    </>
  );
};

export default WorkDetailMedia9X16;
