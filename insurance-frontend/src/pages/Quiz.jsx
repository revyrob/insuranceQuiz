import React from 'react'
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import data from '../data/questions.json';
import Final from '../components/Final/Final';
import { Line } from "rc-progress";

export default function Quiz() {
    //use sessions storage for level
  const [questions, setQuestions] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [_level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answerSelected, setAnswerSelected] = useState(true);
  const [answerCorrect, setAnswerCorrect] = useState(false);



  //function that can take in an array and the number of questions required
  //gives a random objects from the array back
  function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

//use the getRandom function created with the data and n needed and set the questions
//to the returened information
 const getQuestions = () =>{
    setQuestions(getRandom(data, 50));
 }

 //run a useEffect with the getQuestions function
 useEffect(() => {
    getQuestions();
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

console.log(questions)
  const handleAnswerOptionClick = (isCorrect, points) => {
    let answerTimer;
    let questionTimer;
    setAnswerSelected(true);
    if (isCorrect) {
      setScore(score + points);
    }

    if (answerSelected === isCorrect) {
      answerTimer = setTimeout(() => {
        setAnswerCorrect(false);
      }, 200);
      setAnswerCorrect(true);

      if (!answerTimer) {
        answerTimer = setTimeout(() => {
          setAnswerCorrect(false);
        }, 200);
      } else {
        clearTimeout(answerTimer);
      }
    } else {
      setAnswerCorrect(false);
    }


    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      if (!questionTimer) {
        questionTimer = setTimeout(() => {
          setCurrentQuestion(nextQuestion);
        }, 1000);
      } else {
        clearTimeout(questionTimer);
      }
    } else {
      setTimeout(() => setShowScore(true), 300);
    }
  };

  
  return (
    <>
      {showScore ? (
        score > 70 ? (
          <Final
            score={score}
            text={
              "You did no pass 😥"
            }
          />
        ) : (
          <Final
            score={score}
            text={
              "You Passed 🥳"
            }
          />
        )
      ) : (
        <div className="">
          <div className="">
            <Line
              percent={((currentQuestion + 1) / questions.length) * 100}
              strokeWidth={4}
              strokeColor="#379683"
            />
          </div>
          <div className="">
            <div className="">
              {questions && questions[currentQuestion].question}
            </div>
            <div className="">
              {questions &&
                questions[currentQuestion].answerOptions.map((answerOption) => (
                  <button
                    key={uuidv4()}
                    onClick={() =>
                      handleAnswerOptionClick(
                        answerOption.isCorrect,
                        answerOption.points
                      )
                    }
                    className={
                      answerOption.isCorrect && answerSelected && answerCorrect
                        ? "questions__btn--correct"
                        : "questions__btn"
                    }
                  >
                    {answerOption.answer}
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}
      </>
  )
}
