import Link from "next/link";

const WorkButtons = ({ work, works }) => {
  const currentIndex = works.findIndex((x) => x.uid === work.uid);
  const previousWork = works[currentIndex - 1]
    ? works[currentIndex - 1].uid
    : null;
  const nextWork = works[currentIndex + 1] ? works[currentIndex + 1].uid : null;
  return (
    <>
      {/* Mobile bottom Buttons */}
      <div className="flex lg:hidden relative w-screen justify-between text-[2.9vw] sm:text-sm md:text-base pt-[9vw]">
        {previousWork ? (
          <Link href={`/works/${previousWork}`} passHref scroll={false}>
            <div
              className={
                "bg-white drop-shadow-[0_0px_4px_rgba(0,0,0,0.15)] w-[45.5vw] md:w-[47vw] rounded text-center p-2.5 thumbcursor text-black duration-150 hover:text-gray-400 relative left-[3vw] md:left-[2vw]"
              }
            >
              Previous
            </div>
          </Link>
        ) : (
          <div
            className={
              "bg-white drop-shadow-[0_0px_4px_rgba(0,0,0,0.15)] w-[45.5vw] md:w-[47vw] rounded text-center p-2.5 text-black opacity-50  relative left-[3vw] md:left-[2vw] pointer-events-none cursor-not-allowed"
            }
          >
            Previous
          </div>
        )}

        {nextWork ? (
          <Link href={`/works/${nextWork}`} passHref scroll={false}>
            <div
              className={
                "bg-white drop-shadow-[0_0px_4px_rgba(0,0,0,0.15)] w-[45.5vw] md:w-[47vw]  rounded text-center p-2.5 thumbcursor text-black duration-150 hover:text-gray-400  relative right-[3vw] md:right-[2vw]"
              }
            >
              Next
            </div>
          </Link>
        ) : (
          <div
            className={
              "bg-white drop-shadow-[0_0px_4px_rgba(0,0,0,0.15)] w-[45.5vw]  md:w-[47vw]  rounded text-center p-2.5 text-black opacity-50 pointer-events-none cursor-not-allowed relative right-[3vw] md:right-[2vw]"
            }
          >
            Next
          </div>
        )}
      </div>
      {/* Desktop bottom Buttons */}
      <div className="flex relative w-screen justify-between items-center text-[2.9vw] sm:text-sm md:text-base pt-[3.3vw] sm:pt-[2vw] lg:pt-[6rem] pb-[3rem] md:pb-[3rem] ">
        {previousWork ? (
          <Link href={`/works/${previousWork}`} passHref>
            <div
              className={
                "bg-white drop-shadow-[0_0px_4px_rgba(0,0,0,0.15)] lg:w-[150px] xl:w-[140px] rounded text-center p-3 thumbcursor text-black duration-150 hover:text-gray-400 ml-[2vw] hidden lg:block"
              }
            >
              Previous
            </div>
          </Link>
        ) : (
          <div className="pointer-events-none cursor-not-allowed ">
            <Link href="" className="pointer-events-none">
              <div
                className={
                  "bg-white drop-shadow-[0_0px_4px_rgba(0,0,0,0.15)] lg:w-[150px] xl:w-[140px] rounded text-center p-3 text-black opacity-50 ml-[2vw] pointer-events-none cursor-not-allowed hidden lg:block"
                }
              >
                Previous
              </div>
            </Link>
          </div>
        )}

        <Link href="/works" passHref>
          <div className="bg-white drop-shadow-[0_0px_4px_rgba(0,0,0,0.15)] w-[94vw] md:w-[96vw] lg:w-[350px] xl:w-[455px] rounded text-center p-2.5 md:p-3 thumbcursor text-black duration-150 hover:text-gray-400">
            Back to Work
          </div>
        </Link>

        {nextWork ? (
          <Link href={`/works/${nextWork}`} passHref>
            <div
              className={
                "bg-white drop-shadow-[0_0px_4px_rgba(0,0,0,0.15)] lg:w-[150px] xl:w-[140px] rounded text-center p-3 thumbcursor text-black duration-150 hover:text-gray-400 mr-[2vw] hidden lg:block"
              }
            >
              Next
            </div>
          </Link>
        ) : (
          <div className="pointer-events-none cursor-not-allowed ">
            <Link href="">
              <div
                className={
                  "bg-white drop-shadow-[0_0px_4px_rgba(0,0,0,0.15)] lg:w-[400px] xl:w-[140px] rounded text-center p-3 text-black opacity-50 mr-[2vw] pointer-events-none cursor-not-allowed hidden lg:block"
                }
              >
                Next
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default WorkButtons;
