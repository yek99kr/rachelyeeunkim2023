import WorkThumbnail from "./WorkThumbnail";

const WorkListPhoto = ({ works }) => {
  return (
    <>
      <div className="pl-[2vw] md:pl-[1vw] mt-[80px] mb-[50px] lg:mb-[55px] ">
        <p className=" text-gray-500 mb-2">About {works.length} results</p>
        <div className="grid justify-items-stretch grid-cols-1 gap-y-[2vw] md:gap-y-[1vw]  md:grid-cols-3  w-[100vw] ]">
          {works.map((work, i) => (
            <div
              className="relative rounded justify-self-start w-[96vw] md:w-[32vw] aspect-square  overflow-hidden"
              key={work.uid}
            >
              <WorkThumbnail work={work} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkListPhoto;
