import Image from "next/image";

const Title = () => {
  return (
    <>
      {/* <div className="absolute w-[90vw] sm:w-[30vw] h-[30vw] sm:h-[8.5vw]  self-center  left-1/2 top-1/2 -translate-x-1/2 translate-y-[-120%]">
        <Image
          priority={true}
          loading="eager"
          layout="fill"
          objectFit="cover"
          src="/googleRachel.png"
        ></Image>
      </div> */}
      <img
        className="absolute cursor-pointer w-[45vw] md:w-[350px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-230%] md:translate-y-[-180%]"
        src="/googleRachel.png"
      ></img>
      {/* <div className="absolute w-[90vw] sm:w-[40vw] self-center h-[30vw] sm:h-[12vw] bg-gray-300 left-1/2 top-1/2 -translate-x-1/2 translate-y-[-120%]"></div> */}
    </>
  );
};

export default Title;
