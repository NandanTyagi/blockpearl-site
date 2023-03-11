import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header.jsx";
import styles from "../styles/Home.module.css";
import Footer from "@/components/Footer";


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
        <article>
          <section>
            <h2>
              1 % OF RISK CAPITAL GOES TO WOMEN. BLOCK PEARL IS A SOLUTION.
            </h2>
          </section>
          <section>
            <p>
              BY PAIRING ENTREPRENEURS WITH INVESTORS. WITHOUT EXPECTING A
              RETURN.
            </p>
            <p>
              INSTEAD THE ENTREPRENEUR AGREES TO INVEST IN ANOTHER ENTREPRENEUR
              ONCE THEY REACH PROFIT.
            </p>
            <p>
              CREATING A NEVER ENDING STRAIN OF PEARLS OF PEOPLE SPREADING
              WEALTH.
            </p>
          </section>

          <section>
            <div className={styles.buttons}>
              <button onClick={() => window.open('https://www.dapp.blockpearl.world', '_blank')}>ENTREPRENEUR ENTER</button>
              <button onClick={() => window.open('https://www.dapp.blockpearl.world', '_blank')}>
                INVESTOR
                <br />
                ENTER
              </button>
            </div>
          </section>
        </article>
        <article>
          <section>
            <h3>HOW IT WORKS</h3>
          </section>
          <section>
            <ul>
              <li>
                <p>1.WE PAIR THE ENTREPRENEURS WITH INVESTORS.</p>
              </li>
              <li>
                <p>
                  2. THE INVESTOR PAYS 100 € MINUS GAS FEES (COST TO USE
                  BLOCKCHAIN) THAT GOES TO THE BLOCK PEARL ORG AND THE ASKING
                  AMOUNT FROM THE ENTREPRENEUR THAT GOES STRAIT TO THEM.
                </p>
              </li>
              <li>
                <p>
                  3. BOTH RECEIVE A BLOCK PEARL PIN ON THE WORLD MAP THAT IS
                  YOUR CONTRACT IN NFT FORM AND AN ART PEICE YOU OWN TOGETHER.
                </p>
              </li>
              <li>
                <p>4. FOLLOW EACHOTHERS JOURNEY ON WERS.</p>
              </li>
            </ul>
          </section>
        </article>
        <article>
          <section>
            <h3>HOW IT WORKS FOR THE ENTREPRENEUR.</h3>
          </section>
          <section>
            <ul>
              <li>
                <p>
                  1. FILL IN YOUR IDEA IN ONE SENTENCE, EXPLAIN IT FURTHER IN ONE PARAGRAPH
                  AND WRITE A BIO ABOUT YOURSELF.
                </p>
              </li>
              <li>
                <p>
                  2. FILL IN YOUR BUDGET.
                </p>
              </li>
              <li>
                <p>
                  3. BOOK A TIME WITH ME IN THE CALENDER. WE WILL GO THROUGH YOUR PLAN.
                </p>
              </li>
              <li>
                <p>
                  4. IF EVERYTHING LOOKS GOOD, THE FUNDS WILL BE
                  TRANSFERED TO YOU.
                </p>
              </li>
              <li>
                <p>
                  5. FILL IN EVERY MONTH HOW THINGS ARE GOING. MOSTLY AS THE MOTIVATION FOR YOU TO KEEP YOURSELF ON YOUR PATH. FOLLOW EACHOTHERS JOURNEY ON DISCORD.
                </p>
              </li>
            </ul>
          </section>
        </article>
        <article>
          <section>
            <h3>HOW IT WORKS FOR THE
              INVESTOR.</h3>
          </section>
          <section>
            <ul>
              <li>
                <p>
                  1.WE PAIR YOU WITH
                  AN ENTREPRENEUR WITHIN
                  YOUR PRICE RANGE.
                </p>
              </li>
              <li>
                <p>
                  2. 100 € MINUS GAS FEES
                  (COST TO USE BLOCKCHAIN)
                  GOES TO THE BLOCK PEARL
                  FUND.
                </p>
              </li>
              <li>
                <p>
                  3. THE ASKING AMOUNT FROM THE ENTREPRENEUR GOES STRAIT TO THEM.
                </p>
              </li>
              <li>
                <p>
                  4. YOU RECEIVE A BLOCK PEARL PIN ON THE WORLD MAP THAT IS YOUR CONTRACT
                  IN NFT FORM.
                </p>
              </li>
              <li>
                <p>
                  5. FOLLOW EACHOTHERS JOURNEY ON DISCORD.
                </p>
              </li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
