import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import sm from "./sm.json";

/**
 * The project's Prismic repository name.
 */
export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(endpoint);

// // Update the routes array to match your project's route structure
// /** @type {prismic.ClientConfig['routes']} **/
// const routes = [
//   {
//     type: "homepage",
//     path: "/",
//   },
//   {
//     type: "page",
//     path: "/:uid",
//   },
//   {
//     type: "works",
//     resolvers: {
//       category: "works",
//     },
//     path: "/works/:uid",
//   },
// ];

export function linkResolver(doc) {
  switch (doc.type) {
    case "homepage":
      return "/";
    case "page":
      return `/${doc.uid}`;
    case "works":
      return `/works/${doc.uid}`;
    default:
      return null;
  }
}

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    // routes,
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
