import { createClient } from "../prismicio";
import WorksPage from "../components/Works/WorksPage";
import { motion } from "framer-motion";
// import { getPlaiceholder } from "plaiceholder";

// export const getStaticProps = async () => {
//   const { base64, img } = await getPlaiceholder("/path-to-your-image.jpg");

//   return {
//     props: {
//       imageProps: {
//         ...img,
//         blurDataURL: base64,
//       },
//     },
//   };
// };

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const works = await client.getAllByType("works", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
  });

  return {
    props: { works }, // Will be passed to the page component as props
  };
}
const Works = ({ router, works }) => {
  // console.log(works);
  return (
    <motion.div
      className="overflow-x-hidden"
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      // initial={{ x: 300, opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      // exit={{ x: 300, opacity: 0 }}
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
      <WorksPage works={works} />
    </motion.div>
  );
};

export default Works;
