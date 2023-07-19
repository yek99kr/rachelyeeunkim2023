import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.WorkDetailMedia4X5Slice} WorkDetailMedia4X5Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorkDetailMedia4X5Slice>} WorkDetailMedia4X5Props
 * @param { WorkDetailMedia4X5Props }
 */
const WorkDetailMedia4X5 = ({ slice }) => (
  <>
    {slice.primary.media1.link_type === "Web" ? (
      <>
        <div className="col-start-3 md:col-start-2 w-[94vw] md:w-[35vw] relative  aspect-[4/5]">
          <iframe
            className="w-[100%] h-[100%]"
            src={`${slice.primary.media1.url.slice(6)}?quality=1080p${
              slice.primary.media1Autoplay
                ? "&loop=1&autopause=0&background=1&autoplay=1&muted=1&controls=0"
                : ""
            }`}
            allowFullScreen
            autoPlay="1"
          ></iframe>
        </div>
      </>
    ) : (
      <>
        <div className="col-start-3 md:col-start-2 w-[94vw] md:w-[35vw] relative  aspect-[4/5]">
          <Image
            src={slice.primary.media1.url}
            alt={slice.primary.media1.alt}
            priority={true}
            loading="eager"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
      </>
    )}

    {slice.primary.media2.link_type === "Web" ? (
      <>
        <div className="col-start-3 md:col-start-4 w-[94vw] md:w-[35vw] relative rounded  aspect-[4/5]">
          <iframe
            className="w-[100%] h-[100%]"
            src={`${slice.primary.media2.url.slice(6)}?quality=1080p${
              slice.primary.media2Autoplay
                ? "&loop=1&autopause=0&background=1&autoplay=1&muted=1&controls=0"
                : ""
            }`}
            allowFullScreen
            autoPlay="1"
          ></iframe>
        </div>
      </>
    ) : (
      <>
        <div className="col-start-3 md:col-start-4 w-[94vw] md:w-[35vw] relative rounded  aspect-[4/5]">
          <Image
            src={slice.primary.media2.url}
            alt={slice.primary.media2.alt}
            priority={true}
            loading="eager"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
      </>
    )}
  </>
);

export default WorkDetailMedia4X5;
