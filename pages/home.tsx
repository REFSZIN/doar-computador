import type { NextPage } from 'next';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import { ConteinerHome } from '../styles/Home.module';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';

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
      <ConteinerHome>
        <Header data={data}></Header>
        <Main></Main>
        <Footer></Footer>
      </ConteinerHome>
    )
};
export default Home