import React from 'react'
import { useForm } from "react-hook-form";


function Add() {
  
    //pops up as a modal
    //is a form, can use formik
    //question
    //correct response
    //other responses
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label className=''>Question:</label>
      <input className={errors.question ? 'border-red-400 border-4 rounded w-[300px]': "border-gray-400 border-4 rounded w-[300px]"}  placeholder={errors.question ? 'This field is required' : 'question'} {...register("question", { required: true })} />
      
      <div className='flex flex-col w-[300px]'>
      <label className=''>Ansewr Options:</label>
      <div>
      <input className={errors.answerOption1 ? 'border-red-400 border-4 rounded w-[300px]': "border-gray-400 border-4 rounded w-[300px]"} placeholder={errors.answerOption1 ? 'This field is required' : 'answer option'} {...register("answerOption1", { required: true })} /></div>
      <div>
      <input className={errors.answerOption2 ? 'border-red-400 border-4 rounded w-[300px]': "border-gray-400 border-4 rounded w-[300px]"} placeholder={errors.answerOption2 ? 'This field is required' : 'answer option'} {...register("answerOption2", { required: true })} /></div>
      <input className="border-gray-400 border-4 rounded " placeholder='answer option' {...register("answerOption3")} /> 
      <input className="border-gray-400 border-4 rounded " placeholder='answer option' {...register("answerOption4")} />    
      </div>
     
      <input className="border-gray-400 border-4 rounded p-2" type="submit" />
    </form>
  
  );
}

export default Add