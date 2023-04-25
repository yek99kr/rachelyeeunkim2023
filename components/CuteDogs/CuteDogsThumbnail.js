import { useState } from "react";
import Image from "next/image";

const CuteDogsThumbnail = ({ dog, i }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className={`relative w-[47.1vw] md:w-[23.75vw]  aspect-square rounded bg-gray-100 ${
        dog.link.url && "cursor-pointer"
      }`}
      key={i}
    >
      <div
        style={{ boxShadow: "inset 0 0 15px #00EFFF" }}
        className={`${
          hover ? "opacity-100" : "opacity-0"
        } absolute rounded z-10 transition-[0.2s] w-full h-full pointer-events-none`}
      ></div>

      <a href={dog.link.url} target="_blank" rel="noreferrer">
        {dog.dog.link_type === "Media" ? (
          <Image
            className="rounded"
            src={dog.dog.url}
            alt={dog.dog.name}
            priority={true}
            loading="eager"
            layout="fill"
            objectFit="cover"
          ></Image>
        ) : (
          <div
            className=" relative rounded justify-self-center w-[47.1vw] md:w-[23.75vw] aspect-square bg-gray-100 overflow-hidden cursor-pointer"
            // key={dog.dog.url.slice(-5)}
          >
            <iframe
              className="w-[100%] h-[100%] pointer-events-none"
              src={`${dog.dog.url.slice(
                6
              )}?quality=1080p&loop=1&background=1&autoplay=1&muted=1&controls=0 
                  }`}
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>
        )}
      </a>
    </div>
  );
};

export default CuteDogsThumbnail;
