import { motion } from "framer-motion";

export default function noPage({ router }) {
  // const { searchWord } = useContext(AppContext);
  // console.log(searchWord);

  return (
    <motion.div
      key={router.route}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <div className="absolute grid row-1 text-center text-sm sm:text-base md:text-lg left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[52%] sm:-translate-y-[59%] w-[90vw] sm:w-[70vw] ">
        {/* <p className="text-xl font-semibold pb-5">No Results Found</p> */}
        <img
          src="/NoResult.png"
          className="mb-5 w-[70vw] sm:w-[420px] justify-self-center pointer-events-none"
        ></img>
        <p className="leading:[1.1rem] md:leading-[1.8rem]">
          Your serach did not match any documents.{" "}
          <br className="block md:hidden" />
          Please look at the bottom of
          <br className="hidden lg:block" /> the screen to see{" "}
          <br className="block md:hidden" />
          some suggested search words.
        </p>
      </div>
    </motion.div>
  );
}
