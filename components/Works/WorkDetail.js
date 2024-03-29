import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";
import WorkButtons from "./MoreWorkButtons";
import { GrClose } from "react-icons/gr";
// import { useKeenSlider } from "keen-slider/react";
// import { useState } from "react";
import Link from "next/link";

const WorkDetail = ({ works, work }) => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const [loaded, setLoaded] = useState(false);
  // const [sliderRef, instanceRef] = useKeenSlider({
  //   initial: 0,
  //   slideChanged(slider) {
  //     setCurrentSlide(slider.track.details.rel);
  //   },
  //   created() {
  //     setLoaded(true);
  //   },
  //   loop: true,
  // });

  return (
    <>
      <Link href="/works" passHref scroll={false}>
        <div className="cursor-pointer transition-[0.2s] z-[1000] fixed drop-shadow-[0_0px_5px_rgba(0,0,0,0.2)] bg-white rounded hidden md:block md:right-[1vw] bottom-[15px] lg:top-[15px] w-[40px] h-[40px] md:w-[50px] md:h-[50px]  md:text-2xl p-2 md:p-[0.8rem] text-gray-400">
          <GrClose />
        </div>
      </Link>
      <div className="w-[98vw] md:ml-[1vw] mt-[80px] md:mt-[80px] text-center">
        <div className="w-full pt-10 pb-3 md:pb-5 ">
          <p className="text-sm"> {work.data.year}</p>
          <p className="text-xl md:text-2xl font-[500]">{work.data.title}</p>
          {/* <p className="text-base">
            {work.data.summary[0] && work.data.summary[0].text}
          </p> */}
        </div>

        <div className="grid w-[98vw] grid-cols-5 gap-y-7 md:gap-y-10 justify-items-center ">
          <SliceZone slices={work.data.slices} components={components} />
        </div>
      </div>
      <WorkButtons work={work} works={works} />
    </>
  );
};

export default WorkDetail;
