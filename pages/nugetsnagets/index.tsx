import React from 'react';
import type { NextPage } from 'next'

import Image from 'next/image';

import styled from 'styled-components';

const App = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  padding-top: 10vh;
  font-family: sans-serif;
`

const Layout = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  gap: 8px;
`;

const Card = styled.div`
  display: flex;
  border-radius: 2vh;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  height: 60vh;
  width: 40vh;
  background-color: white;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: end;
  padding: 8px;
  font-size: 5vh;
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  padding: 8px;
  font-size: 40vh;
`;

const CardFooter = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: end;
  padding: 8px;
  font-size: 5vh;
`;


const NugetsApp: NextPage = () => {

  return (
    <App>
      <Layout>
        <Card>
          <CardHeader>290+</CardHeader>
          <CardContent><Image src='/happokalevi.jpeg' height='500' width='500' /></CardContent>
          <CardFooter>Happo Kalevi</CardFooter>
        </Card>
      </Layout>
    </App>
  );
}

export default NugetsApp;