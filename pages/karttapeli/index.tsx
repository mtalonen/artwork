import React from 'react';
import type { NextPage } from 'next'

import styled from 'styled-components';
import Kartta from './Kartta.jsx';

const Map = styled(Kartta)`
  height: calc(100vh - 50px);
  circle {
    fill: blue !important;
  }
  circle:hover {
    fill: red !important;
  }
`

const Question = styled.div`
  font-size: 24px;
  padding: 8px 24px 8px;
  font-family: sans-serif;
`

const App = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
const Karttapeli: NextPage = () => {

  const [circles, setCircles] = React.useState<Array<string>>();
  const [question, setQuestion] = React.useState<string>()
  const [answer, setAnswer] = React.useState<string>()

  const [score, setScore] = React.useState<number>(0)
  const [round, setRound] = React.useState<number>(0)

  const setNextQuestion = () => {
    if (circles) {
      const nextQuestion = circles[Math.floor(Math.random() * circles.length)]
      setQuestion(nextQuestion);
    }
  }

  React.useEffect(() => {
    const _circles = Array.from(document.querySelectorAll('circle'))?.map(({ id }) => id);
    setCircles(_circles);
    setNextQuestion();
  }, []);

  return (
    <App>
      <Question>{`Missä on ${question}? Valitsemasi oli ${answer} - ${score}/${round}`}</Question>
      <Map onClick={(e: any) => {
        const a = e.target;
        if (a.tagName === 'circle') {
          console.log(a.id)
          setRound(round + 1);
          if (a.id === question) {
            setScore(score + 1);
          }
          setAnswer(a.id)
          setNextQuestion();
        }
      }} />
    </App>
  );
}

export default Karttapeli;