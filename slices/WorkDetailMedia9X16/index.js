import React from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";

/**
 * @typedef {import("@prismicio/client").Content.WorkDetailMedia9X16Slice} WorkDetailMedia9X16Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorkDetailMedia9X16Slice>} WorkDetailMedia9X16Props
 * @param { WorkDetailMedia9X16Props }
 */
const WorkDetailMedia9X16 = ({ slice }) => {
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

  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [loaded2, setLoaded2] = useState(false);
  const [sliderRef2, instanceRef2] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide2(slider.track.details.rel);
    },
    created() {
      setLoaded2(true);
    },
    loop: true,
  });
  () => {};

  return (
    <>
      {slice.variation === "2Row" ? (
        <>
          {slice.primary.media1slider ? (
            <div className="relative col-start-3 md:col-start-2 w-[94vw] md:w-[30vw] aspect-[9/16]">
              <div
                ref={sliderRef}
                className="keen-slider aspect-[9/16] min-w-[94vw] md:min-w-[30vw]"
              >
                {slice.items
                  .map((i) => {
                    return i.media1;
                  })
                  .filter((i) => i.url)
                  .map((m, i) => (
                    <div key={i} className={`keen-slider__slide w-full h-full`}>
                      {m.link_type === "Web" ? (
                        <iframe
                          className="w-[100%] h-[100%] pointer-events-none"
                          src={`${m.url.slice(
                            6
                          )}?quality=1080p&loop=1&autopause=0&background=1&autoplay=1&muted=1&controls=0
                  }`}
                          allowFullScreen
                          frameBorder="0"
                        ></iframe>
                      ) : (
                        <Image
                          src={m.url}
                          alt={m.alt}
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
                <div className="relative top-[-7.5%]  md:top-[-7%] lg:top-[-5%] mb-[-7%] md:mb-[-5.5%]">
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
                          " drop-shadow-[0_0_8px_rgba(0,0,0,0.3)] opacity-100 rounded-full  m-[0.2rem] md:m-1 w-[8.5%] h-[3.5px] md:w-[5.5%] md:h-[5px] " +
                          (currentSlide === idx
                            ? " active bg-white"
                            : "bg-gray-400 ")
                        }
                      ></button>
                    );
                  })}
                </div>
              )}
            </div>
          ) : slice.primary.media1.link_type === "Web" ? (
            <>
              <div className="col-start-3 md:col-start-2 w-[94vw] md:w-[30vw] relative  aspect-[9/16]">
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
              <div className="col-start-3 md:col-start-2 w-[94vw] md:w-[30vw] relative  aspect-[9/16]">
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

          {slice.primary.media2slider ? (
            <div className="col-start-3 md:col-start-4 w-[94vw] md:w-[30vw] relative aspect-[9/16]">
              <div
                ref={sliderRef2}
                className="keen-slider aspect-[9/16] min-w-[94vw] md:min-w-[30vw]"
              >
                {slice.items
                  .map((i) => {
                    return i.media2;
                  })
                  .filter((i) => i.url)
                  .map((m, i) => (
                    <div key={i} className={`keen-slider__slide w-full h-full`}>
                      {m.link_type === "Web" ? (
                        <iframe
                          className="w-[100%] h-[100%] pointer-events-none"
                          src={`${m.url.slice(
                            6
                          )}?quality=1080p&loop=1&autopause=0&background=1&autoplay=1&muted=1&controls=0
                 }`}
                          allowFullScreen
                          frameBorder="0"
                        ></iframe>
                      ) : (
                        <Image
                          src={m.url}
                          alt={m.alt}
                          priority={true}
                          loading="eager"
                          layout="fill"
                          objectFit="cover"
                        ></Image>
                      )}
                    </div>
                  ))}
              </div>
              {loaded2 && instanceRef2.current && (
                <div className="relative top-[-7.5%]  md:top-[-7%] lg:top-[-5%]  mb-[-7%] md:mb-[-5.5%] ">
                  {[
                    ...Array(
                      instanceRef2.current.track.details.slides.length
                    ).keys(),
                  ].map((idx) => {
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          instanceRef2.current?.moveToIdx(idx);
                        }}
                        className={
                          " drop-shadow-[0_0_8px_rgba(0,0,0,0.3)] opacity-100 rounded-full  m-[0.2rem] md:m-1 w-[8.5%] h-[3.5px] md:w-[5.5%] md:h-[5px] " +
                          (currentSlide2 === idx
                            ? " active bg-white"
                            : "bg-gray-400 ")
                        }
                      ></button>
                    );
                  })}
                </div>
              )}
            </div>
          ) : slice.primary.media2.link_type === "Web" ? (
            <>
              <div className="col-start-3 md:col-start-4 w-[94vw] md:w-[30vw] relative rounded  aspect-[9/16]">
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
              <div className="col-start-3 md:col-start-4 w-[94vw] md:w-[30vw] relative rounded  aspect-[9/16]">
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
      ) : (
        <>
          {slice.primary.media.link_type === "Web" ? (
            <div className="col-start-3  md:p-0 w-[96vw] md:w-[30vw]  aspect-[9/16] bg-gray-100">
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
              <div className="relative col-start-3  md:p-0 w-[96vw] md:w-[40vw]  aspect-[9/16] bg-gray-100">
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

export default WorkDetailMedia9X16;
