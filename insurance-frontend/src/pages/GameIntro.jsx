import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';


export default function GameIntro() {

  const [num, setNum] = useState("20");
  
  sessionStorage.setItem("num", num);


  //sets the name for user
  const numHandler = (e) => {
    const userNum = e.target.num.value;
    e.preventDefault();
    if (userNum === "") {
      alert('The number of questions defaults to 20.  Press Start.');
      setNum('20')
      e.preventDefault();
    } else {
      setNum(userNum);
    }
  };
  return (
    <section className='p-4 h-screen flex flex-col items-center justify-evenly bg-white'>
      <div className='m-8 h-screen w-full md:w-3/4 flex flex-col items-center justify-evenly bg-blue-900 text-white rounded-lg'>
        <h1 className='text-xl md:text-3xl font-semibold tracking-wider'>Fundamentals of Insurance Quiz</h1>
        <form className="flex flex-col items-center justify-center" onSubmit={numHandler}>
          <label>
            <h2 className="">Enter how many questions you would like:</h2>
            <div className="flex flex-col items-center justify-center mt-4">
              <div className="">
                <input
                  className="border border-gray-400 rounded shadow w-[60px] h-[40px] mr-4 hover:bg-gray-100 text-gray-800 text-center"
                  type="num"
                  name="num"
                  placeholder="#"
                />
                <button className="g-white text-white hover:bg-gray-100 hover:text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="submit">Enter
              </button>
              </div>
              
            </div>
          </label>
        </form>
        <div>
              <Link to='/quiz'><button className='g-white text-white text-2xl  hover:bg-gray-100 hover:text-gray-800 font-semibold py-4 px-8  border-gray-400 border-4 rounded shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] md:text-3xl md:py-6 md:px-12'>Start</button></Link>
              </div>
        </div>
    </section>
  )
}
