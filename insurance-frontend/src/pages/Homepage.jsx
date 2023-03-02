import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';


export default function Homepage() {

  const [num, setNum] = useState("");

  sessionStorage.setItem("num", num);
 

  //sets the name for user
  const numHandler = (e) => {
    const userNum = e.target.num.value;
    e.preventDefault();
    if (userNum === "") {
      alert('The number of questions defaults to 20');
      setNum('20')
      e.preventDefault();
    } else {
      setNum(userNum);
    }
  };
  return (
    <section className='p-4 h-[400px] flex flex-col items-center justify-evenly'>
        <h1 className='text-xl font-semibold'>Fundamentals of Insurance Quiz</h1>
        {/* <h3>50 Random Questions</h3> */}
        <form className="" onSubmit={numHandler}>
          <label>
            <h2 className="">Enter how many questions you would like:</h2>
            <div className="">
              <div className="">
                <input
                  className=""
                  type="num"
                  name="num"
                  placeholder=""
                />
              </div>
              <button className="g-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="submit">
              </button>
            </div>
          </label>
        </form>
        <Link to='/quiz'><button className='g-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>Start</button></Link>
       
    </section>
  )
}
