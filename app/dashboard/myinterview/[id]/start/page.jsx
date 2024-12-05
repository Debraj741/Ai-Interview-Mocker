"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import QuestionSection from "./_components/QuestionSection"
import RecordAnswerSection from "./_components/RecordAnswerSection"

export default function StartInterview({params}) {
    const [interviewData, setInterviewData] = useState("")
    const [mockInterviewQuestions, setMockInterviewQuestions] = useState("")
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)

    useEffect(()=>{
        console.log(params.id);
        getInterviewDetails()
      },[])
    
      const getInterviewDetails = async()=>{
        const myId = params.id
        const result = await axios.post(`/api/subinterview/${myId}`)
        // console.log(result.data.myInterview.jsonResponse.replace('```',''));
        
        setInterviewData(result.data.myInterview)

        const jsonResponseData = JSON.parse(result.data.myInterview.jsonResponse)
        // console.log(jsonResponseData);
        setMockInterviewQuestions(jsonResponseData)
    }

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* Questions  */}

        <QuestionSection 
        mockInterviewQuestions = {mockInterviewQuestions}
        activeQuestionIndex = {activeQuestionIndex}
        />

        {/* Video/Audio Recording */}
        <RecordAnswerSection/>
      </div>
    </div>
  )
}


