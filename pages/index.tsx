import type { NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from "../components/Header";
import styles from '../styles/Index.module.css';

const Home: NextPage = () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    axios.get('https://doar-computador-api.herokuapp.com/')
    .then((result)  => {
      setData(result.data.alive);
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>⚡Doação de Computadores⚡</title>
        </Head>
          <main className={styles.meio}>
            <p>{data}</p>
            <Header data={data}></Header>
            <main>
              <section></section>
              <aside></aside>
            </main>
            <footer></footer>
          </main>
      </div>
    )
};
export default Home