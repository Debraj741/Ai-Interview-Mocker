"use client"
import Interview from '@/app/models/InterviewModel';
import React, { useEffect } from 'react'

function InterviewIDPage({params}) {

  useEffect(()=>{
    console.log(params.id);
  },[])

  const getInterviewDetails = async()=>{
    const result = await Interview.findOne()
  }

  return (
    <div>
      Inter View
    </div>
  )
}

export default InterviewIDPage
