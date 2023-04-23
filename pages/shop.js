import { motion } from "framer-motion";

export default function Shop({ router }) {
  return (
    <motion.div
      key={router.route}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <img
        className="absolute w-[90vw] md:w-[80vw] lg:w-[800px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        src="/shop.png"
      />
    </motion.div>
  );
}
