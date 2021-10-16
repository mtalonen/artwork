import React from 'react';
import type { NextPage } from 'next'

const popPigScore = 'popPigScore';

const PopRoni: NextPage = () => {

  const [ score, setScore ] = React.useState(0);
  
  React.useEffect(() => {
    const lsScore = window.localStorage.getItem(popPigScore) || '0';
    setScore(window.parseInt(lsScore, 10));

  }, []);

  React.useEffect(() => {
    window.localStorage.setItem(popPigScore, score + '');
  });

  return (
    <div { ...{
      onClick: () => setScore(score + 1),
      style: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        display: 'flex',
        userSelect: 'none',
      }
    }}>
      <div { ...{
        style: {
          fontSize: '40px',
          color: 'pink',
          padding: '16px',
        }
      }}>
        { score }
        </div>
        <div { ...{
        style: {
          alignSelf: 'center',
          fontSize: '100px',
        }
      }}>
          { score % 2 ? '🐷' : '💩' }
        </div>
    </div>
  );
}

export default PopRoni;