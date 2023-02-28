import React from 'react'
import { Link } from 'react-router-dom'

export default function Final({ score, text }) {
  return (
    <section >
      <div className="">

        <h2 className="">
          {Math.floor((score / 50) * 100)}%
        </h2>
        
        <p className="">{text}</p>
        <div className="">
          <Link to="/">
            <button className="">
              {" "}
              <p className="">{"Home"}</p>
            </button>
          </Link>
        </div>
      </div>
      
    </section>
  )
}
