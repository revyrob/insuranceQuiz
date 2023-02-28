import React from 'react'
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import Final from '../pages/Final';
import { Line } from "rc-progress";
import axios from "axios";

export default function Quiz() {
  //use sessions storage for level
  const [questions, setQuestions] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [answerCorrect, setAnswerCorrect] = useState(false);
  
  //const for how many questions will be asked
  const num = 10;
  
  const REACT_APP_API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;
  
  //get data from the backend
  const getData = () => {
    axios
    .get(`${REACT_APP_API_SERVER_URL}questions`)
    .then((response) => {
      let data = response.data;
      setQuestions(getRandom(data, num))
    })
    .catch((err) => console.log(err));
  };
  
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
  
  
  
  //run a useEffect with the getQuestions function
  useEffect(() => {
    getData();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
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
      ((score/num)*100) < 70 ? (
        <Final
        score={score}
        text={
          "You did no pass 😥"
        }
        questions ={num}
        />
        ) : (
          <Final
          score={score}
          text={
            "You Passed 🥳"
          }
          questions ={num}
          />
          )
          ) : (
            <div className="pt-8 px-2">
            <div className="">
            <Line
            percent={((currentQuestion + 1) / questions.length) * 100}
            strokeWidth={1}
            strokeColor="#379683"
            />
            </div>
            <div className="px-2 pt-6 flex flex-col flex-wrap w-full">
            <div className="font-bold">
            {questions && questions[currentQuestion].question}
            </div>
            <div className="flex flex-col bg-red">
            {questions &&
              getRandom((questions[currentQuestion].answerOptions),  questions[currentQuestion].answerOptions.length).map((answerOption) => (
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
                    ? "border border-gray-400 rounded shadow my-4 hover:bg-green-400"
                    : "border border-gray-400 rounded shadow my-4 bg-white hover:bg-red-600"
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
                