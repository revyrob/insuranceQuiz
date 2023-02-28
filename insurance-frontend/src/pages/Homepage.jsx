import React from 'react'
import { Link } from "react-router-dom";


export default function Homepage() {
  return (
    <section className='p-4 h-[400px] flex flex-col items-center justify-evenly'>
        <h1 className='text-xl font-semibold'>Fundamentals of Insurance Quiz</h1>
        <h3>50 Random Questions</h3>
        <Link to='/quiz'><button className='g-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>Start</button></Link>
    </section>
  )
}
