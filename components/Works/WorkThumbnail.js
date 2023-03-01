import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const WorkThumbnail = ({ work }) => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <Link
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        href={`/works/${work.uid}`}
      >
        <p
          className={`absolute transition-[0.3s] z-10 ${
            hover ? "opacity-1" : "sm:opacity-0"
          } font-semibold`}
        >
          {work.data.title}
        </p>
        {work.data.thumbnail.link_type === "Media" ? (
          <>
            {work.data.thumbnail_hover.url ? (
              <>
                <Image
                  className={` ${hover ? "hidden" : "block"} cursor-pointer`}
                  src={work.data.thumbnail.url}
                  alt={work.data.title}
                  priority={true}
                  loading="eager"
                  layout="fill"
                  objectFit="cover"
                ></Image>
                <Image
                  className={` ${hover ? "block" : "hidden"} cursor-pointer`}
                  src={work.data.thumbnail_hover.url}
                  alt={work.data.title}
                  priority={true}
                  loading="eager"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </>
            ) : (
              <Image
                src={work.data.thumbnail.url}
                alt={work.data.title}
                priority={true}
                loading="eager"
                layout="fill"
                objectFit="cover"
              ></Image>
            )}
          </>
        ) : (
          <iframe
            className="w-[100%] h-[100%] pointer-events-none"
            loading=" lazy"
            src={`${work.data.thumbnail.url.slice(
              6
            )}?quality=1080p&loop=1&background=1&autoplay=1&muted=1&controls=0
            }`}
            allowFullScreen
            frameBorder="0"
          ></iframe>
        )}
      </Link>
    </>
  );
};

export default WorkThumbnail;
