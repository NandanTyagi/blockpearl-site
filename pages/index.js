import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Block Pearl</title>
        <meta
          name="description"
          content="Pay it forward business funding spreads wealth more equally"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header/>
      <main >
        {/* <Link href={"/page"}>page</Link> */}
      </main>
      {/* <Footer/> */}
    </>
  );
}



