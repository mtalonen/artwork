import type { NextPage} from 'next'
import Link from 'next/link';
import Head from 'next/head'

import styled from 'styled-components';

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: scroll;
  background-color: black;
  font-family: sans-serif;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  margin: 16px;
  padding: 1rem;
  height: 300px;
  width: 400px  ;
  background-color: pink;
`;

const CardHead = styled.h1`
  font-size: 4rem;
`;


const Home: NextPage = () => {
  return (
    <Content>
      <Head>
        <title>Mikko&lsquo;s stuff</title>
        <meta name="description" content="foo" />
      </Head>

      <Cards>
        <Card>
          <CardHead>Game of Life</CardHead>
          <Link { ...{ href: '/gameoflife' } }>
            <a>play</a>
          </Link>
        </Card>
        <Card>
          <CardHead>🐷 Pop Pig</CardHead>
          <Link { ...{ href: '/poppig' } }>
            <a>play</a>
          </Link>
        </Card>

      </Cards>

    </Content>
  )
}

export default Home
