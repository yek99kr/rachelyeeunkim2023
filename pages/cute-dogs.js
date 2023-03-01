import { createClient } from "../prismicio";
import CuteDogsPage from "../components/CuteDogs/CuteDogsPage";
import { motion } from "framer-motion";

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  // const cuteDogs = await client.getAllByType("cute_dogs");
  const cuteDogs = await client.getSingle("cute_dogs");

  return {
    props: { cuteDogs }, // Will be passed to the page component as props
  };
}
export default function cuteDogs({ router, cuteDogs }) {
  return (
    <motion.div
      className="overflow-x-hidden"
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      transition={{ delay: 0, default: { duration: 0.4 } }}
      variants={{
        pageInitial: { opacity: 0 },
        pageAnimate: {
          opacity: 1,
        },
        pageExit: {
          opacity: 0,
        },
      }}
    >
      <CuteDogsPage cuteDogs={cuteDogs} />
    </motion.div>
  );
}
