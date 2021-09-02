import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';
import db from '../../db.json';
import UseWindowSize from '../../src/components/UseWindowSize';

export default function QuizDaGaleraPage() {

  const [randomQuestions, setRandomQuestions] = useState(db.questions);
  useEffect(() => {
    let allQuestions = db.questions;
    let randomQuestionsGenerated = [];
    for (let i = 0; i < 12; i++)
    {
        let random_index;
        while(!random_index)
        {
            let tmp = Math.floor(Math.random() * allQuestions.length);        
            if( !randomQuestionsGenerated.filter( (g) => allQuestions[tmp] == g).length )
                random_index = tmp;
        }
        randomQuestionsGenerated.push(allQuestions[random_index]);
        setRandomQuestions(randomQuestionsGenerated);
    }
  }, [])
  useEffect(() => {
    console.log(randomQuestions);
  }, [randomQuestions])
  return (
    <ThemeProvider theme={db.theme} windowSize={UseWindowSize()}>
      <QuizScreen
        externalQuestions={randomQuestions}
        externalBg={db.bg}
        externalBgMobile={db.bg_mobile}
        externalTextResults={db.results}
        windowSize={UseWindowSize()}
      />
    </ThemeProvider>
  );
}