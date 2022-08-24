import type { NextPage } from 'next'
import Link from 'next/link';
import Head from 'next/head'

import React from 'react';

import styled from 'styled-components';

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: scroll;
  background-color: gray;
  font-family: sans-serif;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${2 ** 4}, 32px);
  justify-content: center;
`;

interface props {
  alive?: boolean;
}

const Cell = styled.div<props>`
  margin: 4px;
  padding: 2px;
  height: 32px;
  background-color: ${props => props.alive ? 'white' : 'black'};
`;

const useAnimationFrame = (callback: (deltaTime: number) => void) => {
  const requestRef = React.useRef(0);
  const previousTimeRef = React.useRef(0);

  const animate = React.useCallback((time: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime)
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }, [requestRef, previousTimeRef, callback])

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);
}

const Home: NextPage = () => {

  const [count, setCount] = React.useState(0)
  useAnimationFrame(deltaTime => {

    setCount(prevCount => {
      if ((prevCount + deltaTime * 0.001) > 1) {
        console.log('a');
      }
      return (prevCount + deltaTime * 0.001) % 1
    })
  })

  return (
    <Content>
      <Head>
        <title>Game of Life</title>
        <meta name="description" content="foo" />
      </Head>

      <Grid>
        {
          [...Array(2 ** 8)].map((x, key) => (
            <Cell key={key} {...{
              alive: !!((key + Math.round(count)) % 3)
            }} />
          ))
        }
      </Grid>

    </Content>
  )
}

export default Home
