import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState('')

  useEffect(() => {
    axios.get('http://doar-computador-api.herokuapp.com/')
    .then((result)  => {
      setData(result.data.alive);
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content=" Doação de Computadores in Next.js ! :)Framer-motion, JSX and JavaScrip"/>
        <meta name="keywords" content="JSX, CSS, JavaScript and Framer-motion"/>
        <meta name="author" content="https://github.com/REFSZIN/"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />;
        <title>⚡ Doação de Computadores ⚡</title>
      </Head>

      <main className={styles.main}>
        <motion.section initial="hidden" animate="visible" variants={{
          hidden: {
            scale: .8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
            delay: .4
            }
          },
        }}
        whileHover={{
          position: 'relative',
          zIndex: 1,
          scale: 1.2,
          transition: {
            duration: .5,
          }
        }}>
        <a href="https://www.appmasters.io/">
          <h1 className={styles.title}>
            Doação de Computadores Usados
          </h1>
        </a>
        </motion.section>
        <motion.div
          animate={{
            color: [ "#fbb735", "#e98931", "#eb403b", "#b32E37", "#6c2a6a",
            "#5c4399", "#274389", "#1f5ea8", "#227FB0", "#2ab0c5",
            "#39c0b3"]
          }}
          transition={{ duration: 10, repeat: Infinity }}>
          <p className={styles.titleinfo}>
            { data === true ? "API online" : "API off" }
          </p>
        </motion.div>
      </main>
      
      <footer className={styles.footer}>
        <a href="https://github.com/REFSZIN">
          Powered by{' Yan Matheus'}
        </a>
      </footer>
    </div>
  )
}
