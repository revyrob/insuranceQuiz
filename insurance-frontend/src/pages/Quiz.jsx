import React from 'react'
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import Final from '../pages/Final';
import { Line } from "rc-progress";
import axios from "axios";

export default function Quiz() {
  //num from session storage, entered by user on the homepage
  let num = sessionStorage.getItem("num");
  // let num = parseInt(sessionNum);
  // console.log(sessionStorage.getItem("num"))
  //use sessions storage for level
  const [questions, setQuestions] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [answerCorrect, setAnswerCorrect] = useState(false);

  const REACT_APP_API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;

  //get data from the backend
  const getQuestions = () => {
    axios
    .get(`${REACT_APP_API_SERVER_URL}questions`)
    .then((response) => {
      let data = response.data;
      let randomData = getRandom(data, num);
      setQuestions(randomData)
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
    getQuestions();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const handleAnswerOptionClick = (isCorrect, points) => {
    setAnswerSelected(true);
    if (isCorrect && (answerSelected === isCorrect)) {
      setScore(score + points);
      setAnswerCorrect(true); 
    } else {
      alert('answer is wrong.')
    }
    
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      // setTimeout(() => {
          setCurrentQuestion(nextQuestion);
        // }, 1000);
    } else {
      setTimeout(() => setShowScore(true), 300);
    }

    //reset the setAnswerCorrect
    setAnswerCorrect(false)
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
            <div className="pt-8 px-2 ">
            <div className="">
            <Line
            percent={((currentQuestion + 1) / questions.length) * 100}
            strokeWidth={1}
            strokeColor="#379683"
            />
            </div>
            <div className="mx-auto my-4 px-4 py-8 h-full w-full md:w-3/4 flex flex-col items-center justify-evenly bg-blue-900 text-white rounded-lg ">
            <div className="font-bold text-lg">
            {questions && questions[currentQuestion].question}
            </div>
            <div className="flex flex-col bg-red text-black">
            {questions &&
              getRandom((questions[currentQuestion].answerOptions),  questions[currentQuestion].answerOptions.length).map((answerOption)=> (
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
                    ? "border border-white rounded shadow my-4 p-4 bg-green-400 hover:bg-gray-200"
                    : "border border-white rounded shadow my-4 p-4 bg-white hover:bg-gray-200"
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
                