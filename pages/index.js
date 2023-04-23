import { motion } from "framer-motion";
import Head from "next/head";
import HomePage from "../components/Home/HomePage";

export default function Home({ router }) {
  return (
    <div>
      {/* <Head>
        <title>Rachel Yeeun Kim</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head> */}
      <motion.div
        key={router.route}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HomePage />
      </motion.div>
      {/* <input></input> */}
    </div>
  );
}
