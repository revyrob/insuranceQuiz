import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import Question from './Question';
import home from '../assets/icons/home-icon.svg';
import { Link } from "react-router-dom";


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
    
    //run a useEffect with the getQuestions function
    useEffect(() => {
        getQuestions();
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    // console.log(questions)
    
    return (
        <section >
        <h1 className='text-3xl text-blue-900 text-center py-4'>All Questions</h1>

        <div className='flex flex-row max-w-[1280px] mx-auto justify-evenly '>
        {/* <Link to="/add">
        <div>
              <button className='text-2xl  bg-gray-100 text-gray-800 hover:bg-blue-900 hover:text-white font-semibold py-2 px-6  border-gray-400 border-4 rounded shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] '>Add Question</button>
        </div>
        </Link> */}
        <Link to="/">
        <div className="flex flex-col w-10 justify-center align-middle ">
        <img src={home} alt="home button" className="h-8 cursor-pointer" />
        <p className="cursor-pointer">Home</p>
        </div>
        </Link>
        </div>
        <Question
        questions={questions}/>
        
        
        </section>
        )
    }
    