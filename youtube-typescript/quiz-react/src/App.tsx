import React, { useState } from 'react';
import { Difficulty, fetchQuizQuestions,QuestionState } from './API';




import QuestionCard from './components/QuestionCards';
const  App =() => {
  const Total_Questions = 10;
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState([]) 
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)
  console.log(fetchQuizQuestions(Total_Questions,Difficulty.EASY))


  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestion = await fetchQuizQuestions(
      Total_Questions,
      Difficulty.EASY
    );
    setQuestions(newQuestion);
   40 minute

  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }
  const nextQuestion = () => {


  }
  return (
    <div className="App">
     <h1>React Quiz</h1>
     <button className='start' onClick={startTrivia}>Start</button>
     <p className='score'>Score:</p>
     <p>Loading Questions ...</p>
     {/* <QuestionCard 
     questionNr={number + 1}
     totalQuestion={Total_Questions}
     question={questions[number].question}
     answers={questions[number].answers}
     userAnswer={ userAnswers ? userAnswers[number] : undefined}
     callback={checkAnswer}
     /> */}
     <button className='next' onClick={nextQuestion}>
      Next Question
     </button>
    </div>
  );
}

export default App;
