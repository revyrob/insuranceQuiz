import React from 'react'
import { Link } from "react-router-dom";


export default function Homepage() {

  return (
    <section className='p-4 h-screen flex flex-col items-center justify-evenly bg-white'>
      <div className='m-8 h-screen w-full md:w-3/4 flex flex-col items-center justify-evenly bg-blue-900 text-white rounded-lg'>
        <h1 className='text-xl md:text-3xl font-semibold tracking-wider'>Fundamentals of Insurance Practice</h1>
        <div>
              <Link to='/questions'><button className='g-white text-white text-2xl  hover:bg-gray-100 hover:text-gray-800 font-semibold py-4 px-8  border-gray-400 border-4 rounded shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] md:text-3xl md:py-6 md:px-12'>Questions</button></Link>
        </div>
        <div>
              <Link to='/gameIntro'><button className='g-white text-white text-2xl  hover:bg-gray-100 hover:text-gray-800 font-semibold py-4 px-8  border-gray-400 border-4 rounded shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] md:text-3xl md:py-6 md:px-12'>Quiz</button></Link>
        </div>
        </div>
    </section>
  )
}
