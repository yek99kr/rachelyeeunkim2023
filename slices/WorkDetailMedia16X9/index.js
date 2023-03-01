import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";

/**
 * @typedef {import("@prismicio/client").Content.WorkDetailMedia16X9Slice} WorkDetailMedia16X9Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorkDetailMedia16X9Slice>} WorkDetailMedia16X9Props
 * @param { WorkDetailMedia16X9Props }
 */
const WorkDetailMedia16X9 = ({ slice }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
  });

  return (
    <>
      {slice.variation === "full" ? (
        <>
          {slice.primary.media.link_type === "Web" ? (
            <>
              <div className="col-start-3 md:p-0 w-[100vw] md:w-[96vw] 2xl:w-[87vw] aspect-video">
                <iframe
                  className="w-[100%] h-[100%]"
                  src={`${slice.primary.media.url.slice(6)}?quality=1080p${
                    slice.primary.autoplay
                      ? "&loop=1&autopause=0&background=1&autoplay=1&muted=1&controls=0"
                      : ""
                  }`}
                  allowFullScreen
                  frameBorder="0"
                ></iframe>
              </div>
            </>
          ) : (
            slice.primary.media.url && (
              <>
                <div className="relative col-start-3 md:p-0 w-[100vw] md:w-[96vw] 2xl:w-[90vw] aspect-video">
                  <Image
                    src={slice.primary.media.url}
                    alt={slice.primary.media.alt}
                    priority={true}
                    loading="eager"
                    layout="fill"
                    objectFit="cover"
                  ></Image>
                </div>
              </>
            )
          )}
        </>
      ) : slice.variation === "slider" ? (
        <>
          <div className="col-start-3 aspect-video w-[96vw] md:w-[70vw] ">
            <div
              ref={sliderRef}
              className="  keen-slider aspect-video min-w-[96vw] md:min-w-[70vw]"
            >
              {slice.items.map((m, i) => (
                <div key={i} className={`keen-slider__slide w-full h-full`}>
                  {m.media.link_type === "Web" ? (
                    <iframe
                      className="w-[100%] h-[100%] pointer-events-none"
                      src={`${m.media.url.slice(
                        6
                      )}?quality=1080p&loop=1&autopause=0&background=1&autoplay=1&muted=1&controls=0
                      }`}
                      allowFullScreen
                      frameBorder="0"
                    ></iframe>
                  ) : (
                    <Image
                      src={m.media.url}
                      alt={m.media.alt}
                      priority={true}
                      loading="eager"
                      layout="fill"
                      objectFit="cover"
                    ></Image>
                  )}
                </div>
              ))}
            </div>
            {loaded && instanceRef.current && (
              <div className="relative top-[-9.5%] md:top-[-5.5%] mb-[-7%] md:mb-[-5.5%]">
                {[
                  ...Array(
                    instanceRef.current.track.details.slides.length
                  ).keys(),
                ].map((idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        instanceRef.current?.moveToIdx(idx);
                      }}
                      className={
                        " drop-shadow-[0_0_8px_rgba(0,0,0,0.3)] opacity-100 rounded-full  m-[0.2rem] md:m-1 w-[6.5%] h-[3.5px] md:w-[4%] md:h-[5px] " +
                        (currentSlide === idx
                          ? " active bg-white"
                          : "bg-gray-400")
                      }
                    ></button>
                  );
                })}
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          {slice.primary.media.link_type === "Web" ? (
            <div className="col-start-3 md:p-0 w-[96vw] md:w-[70vw]  aspect-video">
              <iframe
                className="w-[100%] h-[100%]"
                src={`${slice.primary.media.url.slice(6)}?quality=1080p${
                  slice.primary.autoplay
                    ? "&loop=1&autopause=0&background=1&autoplay=1&muted=1&controls=0"
                    : ""
                }`}
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
          ) : (
            slice.primary.media.url && (
              <div className="relative col-start-3 md:p-0 w-[96vw] md:w-[70vw]  aspect-video">
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
      )}
    </>
  );
};

export default WorkDetailMedia16X9;

{
  /* <style jsx>{`
section {
  max-width: 600px;
  margin: 4em auto;
  text-align: center;
}
.title {
  color: #8592e0;
}
`}</style> */
}
