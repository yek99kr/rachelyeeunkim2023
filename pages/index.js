import Head from "next/head";
import Image from "next/image";
import HomePage from "../components/Home/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rachel Yeeun Kim</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <HomePage />
      {/* <input></input> */}
    </div>
  );
}
