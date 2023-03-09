import React from 'react'

function Question({questions}) {

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
    return (
        <ul className="">
        {questions &&
          questions.map((question) => (
            <li key={question.indexOf} className="">
            <p className='bg-red-500'>{question.question}</p>
        {question.answerOptions && getRandom((question.answerOptions), (question.answerOptions.length)).map((r)=>(
            
            <p
            key={r.index}
            className={
                r.isCorrect ? 'bg-green-800 text-white':
                'bg-white text-black'
            }>
                {r.answer}
</p>
))}</li>))}</ul>
                    )
                }
                
                export default Question;