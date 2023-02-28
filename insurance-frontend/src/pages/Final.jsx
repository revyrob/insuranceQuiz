import React from 'react'
import { Link } from 'react-router-dom'

export default function Final({ score, text, questions }) {
  return (
    <section className='p-4 h-[400px] flex flex-col items-center justify-evenly' >
     

        <h2 className="text-2xl">
          {Math.floor((score / questions) * 100)}%
        </h2>
        
        <p className="text-2xl font-bold">{text}</p>
        <div className="">
          <Link to="/">
            <button className="g-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              {" "}
              <p className="">{"Home"}</p>
            </button>
          </Link>
        </div>
      
      
    </section>
  )
}