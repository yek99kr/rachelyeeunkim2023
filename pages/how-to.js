import HowTo from "../components/How to/HowTo";

import { createClient } from "../prismicio";
import { motion } from "framer-motion";

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const HowTos = await client.getSingle("how_to");

  return {
    props: { HowTos }, // Will be passed to the page component as props
  };
}

export default function Howto({ router, HowTos }) {
  return (
    <motion.div
      key={router.route}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <HowTo HowTos={HowTos} />
    </motion.div>
  );
}
