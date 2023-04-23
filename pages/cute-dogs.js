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
      key={router.route}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <CuteDogsPage cuteDogs={cuteDogs} />
    </motion.div>
  );
}
