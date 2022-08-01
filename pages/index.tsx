import Head from 'next/head';
import Home from "./home";
import type { NextPage } from 'next';
import { Conteiner } from '../styles/Index.module';
import React from "react";

const App: NextPage = () => {
  return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>⚡Doação de Computadores⚡</title>
        </Head>
        <Conteiner>
          <Home />
        </Conteiner>
      </div>
    )
};
export default App