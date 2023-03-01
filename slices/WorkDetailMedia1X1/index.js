import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";

/**
 * @typedef {import("@prismicio/client").Content.WorkDetailMedia1X1Slice} WorkDetailMedia1X1Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorkDetailMedia1X1Slice>} WorkDetailMedia1X1Props
 * @param { WorkDetailMedia1X1Props }
 */
const WorkDetailMedia1X1 = ({ slice }) => {
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

  // const media1Slider =
  //   slice.items &&
  //   slice.items
  //     .map((i) => {
  //       return i.media1;
  //     })
  //     .filter((i) => i.url);

  // const media2Slider =
  //   slice.items &&
  //   slice.items
  //     .map((i) => {
  //       return i.media2;
  //     })
  //     .filter((i) => i.url);

  return (
    <>
      {slice.variation === "2Row" ? (
        <>
          {slice.primary.media1slider ? (
            <div className="relative  col-start-3 lg:col-start-2 w-[94vw] lg:w-[35vw]   aspect-square">
              <div
                ref={sliderRef}
                className="keen-slider aspect-square min-w-[94vw] lg:min-w-[35vw]"
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
                <div className="relative top-[-7%] md:top-[-6%] mb-[-7%] md:mb-[-5.5%]">
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
                          " drop-shadow-[0_0_8px_rgba(0,0,0,0.3)] opacity-100 rounded-full  m-[0.2rem] md:m-1 w-[6.5%] h-[3.5px] md:w-[5.5%] md:h-[5px] " +
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
              <div className="col-start-3 lg:col-start-2 w-[94vw] lg:w-[35vw] relative  aspect-square">
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
              <div className="col-start-3 lg:col-start-2 w-[94vw] lg:w-[35vw] relative  aspect-square">
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
            <div className="col-start-3 lg:col-start-4 w-[94vw] lg:w-[35vw] relative  aspect-square">
              <div
                ref={sliderRef2}
                className="keen-slider aspect-square min-w-[94vw] lg:min-w-[35vw]"
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
                <div className="relative top-[-7%] md:top-[-6%]  mb-[-7%] md:mb-[-5.5%] ">
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
                          " drop-shadow-[0_0_8px_rgba(0,0,0,0.3)] opacity-100 rounded-full  m-[0.2rem] md:m-1 w-[6.5%] h-[3.5px] md:w-[5.5%] md:h-[5px] " +
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
              <div className="col-start-3 lg:col-start-4 w-[94vw] md:w-[35vw] relative rounded  aspect-square">
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
              <div className="col-start-3 lg:col-start-4 w-[94vw] md:w-[35vw] relative rounded  aspect-square">
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
      ) : slice.variation === "slider" ? (
        <>
          <div className="col-start-3 aspect-square w-[94vw] md:w-[50vw] ">
            <div
              ref={sliderRef}
              className="  keen-slider aspect-square min-w-[96vw] md:min-w-[50vw]"
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
                      // priority={true}
                      loading="eager"
                      layout="fill"
                      objectFit="cover"
                    ></Image>
                  )}
                </div>
              ))}
            </div>
            {loaded && instanceRef.current && (
              <div className="relative top-[-7%] md:top-[-5.5%]  mb-[-7%] md:mb-[-5.5%]">
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
                          : "bg-gray-400 ")
                      }
                    ></button>
                  );
                })}
              </div>
            )}
          </div>
        </>
      ) : slice.variation === "full" ? (
        <>
          {slice.primary.media.link_type === "Web" ? (
            <div className="col-start-3 md:p-0 w-[96vw] md:w-[98vw]  aspect-square pointer-events-none">
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
              <div className="relative col-start-3 md:p-0 w-[96vw] md:w-[98vw]  aspect-square pointer-events-none">
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
      ) : slice.variation === "3Rows" ? (
        <>
          {slice.primary.media1.link_type === "Web" ? (
            <>
              <div className="col-start-3 md:col-start-1 w-[94vw] md:w-[31vw] relative rounded md:place-self-start md:left-[2vw] aspect-square">
                <iframe
                  className="w-[100%] h-[100%]"
                  src={`${slice.primary.media1.url.slice(6)}?quality=1080p${
                    slice.primary.media1Autoplay
                      ? "&loop=1&autopause=0&loop=1&autopause=0&background=1&autoplay=1&muted=1&controls=0"
                      : ""
                  }`}
                  allowFullScreen
                  autoPlay="1"
                ></iframe>
              </div>
            </>
          ) : (
            <>
              <div className="col-start-3 md:col-start-1 w-[94vw] md:w-[31vw] relative rounded md:place-self-start md:left-[2vw] aspect-square">
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
              <div className="col-start-3 w-[94vw] md:w-[31vw] rounded aspect-square">
                <iframe
                  className="w-[100%] h-[100%]"
                  src={`${slice.primary.media2.url.slice(6)}?quality=1080p${
                    slice.primary.media2Autoplay
                      ? "&loop=1&autopause=0&loop=1&autopause=0&background=1&autoplay=1&muted=1&controls=0"
                      : ""
                  }`}
                  allowFullScreen
                  autoPlay="1"
                ></iframe>
              </div>
            </>
          ) : (
            <>
              <div className="relative col-start-3 w-[94vw] md:w-[31vw] rounded aspect-square">
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

          {slice.primary.media3.link_type === "Web" ? (
            <>
              <div className="col-start-3 md:col-start-5 w-[94vw] md:w-[31vw] relative rounded md:place-self-end md:right-[2vw] aspect-square">
                <iframe
                  className="w-[100%] h-[100%]"
                  src={`${slice.primary.media3.url.slice(6)}?quality=1080p${
                    slice.primary.media3Autoplay
                      ? "&loop=1&autopause=0&loop=1&autopause=0&background=1&autoplay=1&muted=1&controls=0"
                      : ""
                  }`}
                  allowFullScreen
                  autoPlay="1"
                ></iframe>
              </div>
            </>
          ) : (
            <>
              <div className="relative col-start-3 md:col-start-5 w-[94vw] md:w-[31vw]  rounded md:place-self-end md:right-[2vw] aspect-square">
                <Image
                  src={slice.primary.media3.url}
                  alt={slice.primary.media3.alt}
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
            <div className="col-start-3 md:p-0 w-[96vw] md:w-[50vw]  aspect-square ">
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
              <div className="relative col-start-3 md:p-0 w-[96vw] md:w-[50vw]  aspect-square">
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

export default WorkDetailMedia1X1;

// slice.primary.description ?
// <PrismicRichText field={slice.primary.description}/>
// : <p>start by editing this slice from inside Slice Machine!</p>
