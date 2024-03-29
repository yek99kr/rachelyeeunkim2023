import CuteDogsThumbnail from "./CuteDogsThumbnail";

const CuteDogsPage = ({ cuteDogs }) => {
  const Dogs = cuteDogs.data.dogs;

  return (
    <>
      <div className="pl-[2vw] md:pl-[1vw] mt-[80px] mb-[50px] lg:mb-[55px] pt-9 sm:pt-0">
        <p className=" text-gray-500 mb-2">About {Dogs.length} results</p>
        <div className="grid grid-cols-2 gap-x-[1.6vw] gap-y-[2vw] md:gap-y-[0.8vw] md:gap-x-[0vw] md:grid-cols-4  ">
          {Dogs.map((dog, i) => (
            <CuteDogsThumbnail key={i} dog={dog} i={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CuteDogsPage;
