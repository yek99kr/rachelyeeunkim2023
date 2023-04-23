import { createClient } from "../../prismicio";
import WorkDetail from "../../components/Works/WorkDetail";
import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const work = await client.getByUID("works", params.works);
  const works = await client.getAllByType("works", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
  });

  return {
    props: {
      work,
      works,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const works = await client.getAllByType("works");

  return {
    paths: works.map((work) => {
      return {
        params: { works: work.uid },
      };
    }),
    fallback: false,
  };
}

const Work = ({ router, work, works }) => {
  // console.log(work, works);
  return (
    // <motion.div
    //   className="overflow-x-hidden"
    //   key={router.route}
    //   initial="pageInitial"
    //   animate="pageAnimate"
    //   exit="pageExit"
    //   transition={{ delay: 0, default: { duration: 0.5 } }}
    //   variants={{
    //     pageInitial: { opacity: 0 },
    //     pageAnimate: {
    //       opacity: 1,
    //     },
    //     pageExit: {
    //       opacity: 0,
    //     },
    //   }}
    // >
    <motion.div
      key={router.route}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <WorkDetail work={work} works={works} />
    </motion.div>
  );
};

export default Work;
