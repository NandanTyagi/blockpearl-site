import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header.jsx";
import styles from "../styles/Home.module.css";

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
      <Header />
      <main className={styles.main}>
        <section>
          <h2>1 % OF RISK CAPITAL GOES TO WOMEN. BLOCK PEARL IS A SOLUTION.</h2>
        </section>
        <section>
          <p>
            BY PAIRING ENTREPRENEURS WITH INVESTORS. WITHOUT EXPECTING A RETURN.
          </p>
          <p>
            INSTEAD THE ENTREPRENEUR AGREES TO INVEST IN ANOTHER ENTREPRENEUR
            ONCE THEY REACH PROFIT.
          </p>
          <p>
            CREATING A NEVER ENDING STRAIN OF PEARLS OF PEOPLE SPREADING WEALTH.
          </p>
        </section>

        <section>
          <div className={styles.buttons}>
            <button>ENTREPRENEUR ENTER</button>
            <button>INVESTOR ENTER</button>
          </div>
        </section>
      </main>
      {/* <Footer/> */}
    </>
  );
}
