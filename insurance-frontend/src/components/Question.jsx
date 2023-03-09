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
            <li key={question.indexOf} className="mx-auto my-4 px-4 py-8  md:w-3/4 flex flex-col items-center justify-evenly bg-blue-900 text-white rounded-lg ">
            <p className='text-lg'>{question.question}</p>
            <div className="flex flex-col bg-red text-black">
        {question.answerOptions && getRandom((question.answerOptions), (question.answerOptions.length)).map((r)=>(
            
            <p
            key={r.index}
            className={
                r.isCorrect ? 'border border-white rounded shadow my-4 p-4 bg-green-400 ':
                'border border-white rounded shadow my-2 p-2 bg-white '
            }>
                {r.answer}
</p>

))}</div>
{/* <Link to="/add">
        <div className="flex flex-col w-10 justify-center align-middle ">
        <img src={home} alt="home button" className="h-8 cursor-pointer" />
        <p className="cursor-pointer">Home</p>
        </div>
        </Link> */}
</li>))}</ul>
                    )
                }
                
                export default Question;