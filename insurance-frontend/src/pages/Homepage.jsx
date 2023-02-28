import React from 'react'
import { Link } from "react-router-dom";


export default function Homepage() {
  return (
    <div>
        <h1>Fundamentals of Insurance Quiz</h1>
        <h3>50 Random Questions</h3>
        <Link to='/quiz'><div>Start</div></Link>
    </div>
  )
}
