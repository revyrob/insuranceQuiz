import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import Question from './Question';

export default function QuestionsList() {
    const [questions, setQuestions] = useState("");
    const REACT_APP_API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;

   
  //get data from the backend
  const getQuestions = () => {
    axios
    .get(`${REACT_APP_API_SERVER_URL}questions`)
    .then((response) => {
      let data = response.data;
      setQuestions(data)
    })
    .catch((err) => console.log(err));
  };

//   //function that can take in an array and the number of questions required
//   //gives a random objects from the array back
//   function getRandom(arr, n) {
//     var result = new Array(n),
//     len = arr.length,
//     taken = new Array(len);
//     if (n > len)
//     throw new RangeError("getRandom: more elements taken than available");
//     while (n--) {
//       var x = Math.floor(Math.random() * len);
//       result[n] = arr[x in taken ? taken[x] : x];
//       taken[x] = --len in taken ? taken[len] : len;
//     }
//     return result;
//   }

    //run a useEffect with the getQuestions function
    useEffect(() => {
        getQuestions();
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      console.log(questions)

  return (
    <section>
        <h1>All Questions</h1>
        <div><p>Search</p></div>
      <Question
      questions={questions}/>

        
    </section>
  )
}
