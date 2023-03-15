import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
//import Modal from "react-bootstrap/Modal";
//import Button1 from "react-bootstrap/Button";
//import { useState } from 'react';




function Add() {
    //create an add to the frontend to add the question to the backend
    const { register, getValues, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    //const [show, setShow] = useState(false);
    // const handleClose = () => {
    //     setShow(false);
    // };
    //const handleShow = () => setShow(true);
    
    const REACT_APP_API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;
    
    console.log(getValues()); // watch input value by passing the name of it
    
    //event handler for creating new comment
    const handleSubmit = (e) => {
        //e.preventDefault();

        //const values = getValues();
        // console.log(values)
        // const newValues = ""
        const question = getValues("question"); 
        console.log(question)
        // if (question !== "") {
        //     setShow(true);
        //     //clear all input areas
        // }
        
        axios
        .post(`${REACT_APP_API_SERVER_URL}`, {
            question: question,
            //create an id
           

        })
        .then((response) => {
            //if (question !== "") {
                // alert("Thanks for adding to our list!");
                console.log(response)
                //setShow(true);
            //} else {
                //alert("You have not filled out the required input.");
            //}
        })
        .catch((err) => console.log(err));
    };
    


    return (
        <div className='mx-auto my-4 px-4 py-8  md:w-3/4 flex flex-col items-center justify-evenly bg-blue-900 text-white rounded px-2lg'>
        <form className="w-[90%]" method="post" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label className='flex flex-col my-2 '>Question:</label>
        <input className={errors.question ? 'border-red-400 border-2 rounded px-2 text-black  w-[90%]': "border-gray-400 border-2 rounded   w-[90%] px-2 text-black"}  placeholder={errors.question ? 'This field is required' : 'question'} {...register("question", { required: true })} />
        
        <div className='flex flex-col mt-4'>
        <label className=''>Answer Options:</label>
        <div>
        <div className='flex flex-row'>
        <input className={errors.answerOption1 ? 'border-red-400 border-2 rounded px-2 my-2 text-black  w-[90%]': "border-gray-400 border-2 rounded px-2 my-2 text-black  w-[90%]"} placeholder={errors.answerOption1 ? 'This field is required' : 'answer option'} {...register("answerOption1", { required: true })} />  <label className='flex flex-row justify-center items-center ml-2' htmlFor="field-wind">
        <input
        {...register("correct")}
        type="radio"
        value="answerOption1.isCorrect"
        id="answerOption1.isCorrect"
        className='mr-1'
        
        />
        correct
        </label></div></div>
        <div>
        <div className='flex flex-row'>
        <input className={errors.answerOption2 ? 'border-red-400 border-2 rounded px-2 my-2 text-black  w-[90%]': "border-gray-400 border-2 rounded px-2 my-2 text-black  w-[90%]"} placeholder={errors.answerOption2 ? 'This field is required' : 'answer option'} {...register("answerOption2", { required: true })} /><label className='flex flex-row justify-center items-center ml-2' htmlFor="field-wind">
        <input
        {...register("correct")}
        type="radio"
        value="answerOption2.isCorrect"
        id="answerOption2.isCorrect"
        className='mr-1 w-[90%]'        
        />
        correct
        </label></div>
        </div>
        <div className='flex flex-row'>
        <input className="border-gray-400 border-2 rounded px-2 my-2 text-black  w-[90%]" placeholder='answer option' {...register("answerOption3")} /> <label className='flex flex-row justify-center items-center ml-2'  htmlFor="field-wind">
        <input
        {...register("correct")}
        type="radio"
        value="answerOption3.isCorrect"
        id="answerOption3.isCorrect"
        className='mr-1 w-[90%]'        />
        correct
        </label></div>
        <div className='flex flex-row'>
        <input className="border-gray-400 border-2 rounded px-2 my-2 text-black  w-[90%]" placeholder='answer option' {...register("answerOption4")} />   <label className='flex flex-row justify-center items-center ml-2'  htmlFor="field-wind">
        <input
        {...register("correct")}
        type="radio"
        value="answerOption4.isCorrect"
        id="answerOption4.isCorrect"
        className='mr-1 w-[90%]'        />
        correct
        </label> 
        </div></div>
        
        <input className="border-gray-400 border-4 rounded px-2 p-2 mt-4 hover:cursor-pointer" type="submit" />
        </form>
        {/* <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
        <Modal.Title>Thanks for your question!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Check back tomorrow for an answer to your question.
        </Modal.Body>
        <Modal.Footer>
        <Button1 variant="primary" onClick={handleClose}>
        Ok👌
        </Button1>
        </Modal.Footer>
        </Modal> */}
        </div>
        
        );
    }
    
    export default Add