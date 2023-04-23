import Image from "next/image";
import Link from "next/link";

const HowTo = ({ HowTos }) => {
  console.log(HowTos.data.how_to[0].title[0].text);
  const HowTo = HowTos.data.how_to;

  return (
    <>
      <div className=" w-[100vw] pl-[2vw] md:pl-[1vw] mt-[80px] mb-[50px] lg:mb-[80px]">
        <p className="text-gray-500 mb-5">About {HowTo.length} results</p>
        {HowTo.map((howto, i) => (
          <div className="relative rounded  justify-self-start w-[90vw] md:w-[35vw] mb-8 md:mb-10">
            <Link
              href={howto.link.url}
              key={i}
              passHref
              scroll={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex mb-1">
                <img
                  className="rounded-full border-[1px] border-gray-100 bg-gray-100 w-8 h-8 inline mr-2 m-0.5"
                  src="/wikihow.png"
                ></img>
                <div>
                  <p className="text-sm">Wikihow</p>
                  <p className="text-xs">
                    {howto.link.url}
                    {/* https://rachelyeeunkim.com/how-to/{howto.uid} */}
                  </p>
                </div>
              </div>

              <p className="text-xl ml-1 text-blue-800 hover:underline">
                {howto.title}
              </p>
              <p className="text-sm ml-1 text-gray-500">
                {howto.steps} steps{" "}
                {howto.rating
                  ? "- " +
                    howto.rating +
                    "% of readers found this   article helpful."
                  : ""}
              </p>
              <p className="text-sm ml-1 text-gray-900">
                {howto.summary[0].text && howto.summary[0].text}
              </p>
            </Link>
          </div>
        ))}
      </div>
      {/* <div className=" w-[100vw] pl-[2vw] md:pl-[1vw] mt-[80px] mb-[50px] lg:mb-[80px]">
        <p className="text-gray-500 mb-5">About {works.length} results</p>
        {works.map((work, i) => (
          <Link
            href={`/works/${work.uid}`}
            key={work.uid}
            passHref
            scroll={false}
          >
            <div className="relative rounded justify-self-start w-[90vw] md:w-[35vw] mb-10">
              <div className="flex mb-1">
                <img
                  className="rounded-full border-[1px] border-gray-100 bg-gray-100 w-8 h-8 inline mr-2 m-0.5"
                  src={work.data.mini_thumbnail.url}
                ></img>
                <div>
                  <p className="text-sm">{work.data.year}</p>{" "}
                  <p className="text-xs">
                    https://rachelyeeunkim.com/works/{work.uid}
                  </p>
                </div>
              </div>

              <p className="text-xl ml-1 text-blue-800 hover:underline">
                {work.data.title}
              </p>
              <p className="text-sm ml-1 text-gray-500">
                {work.data.summary[0] && work.data.summary[0].text}
              </p>
              {/* <p>{work.data.title}</p> */}
      {/* </div>
          </Link>
        ))}
      </div> */}
    </>
  );
};

export default HowTo;
