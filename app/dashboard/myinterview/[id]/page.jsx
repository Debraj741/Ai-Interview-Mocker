"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function InterviewIDPage({params}) {

  useEffect(()=>{
    console.log(params.id);
    getInterviewDetails()
  },[])

  const getInterviewDetails = async()=>{
    const myId = params.id
    const result = await axios.post(`/api/subinterview/${myId}`)

    console.log(result.data.myInterview);
    
  }

  return (
    <div>
      Inter View
    </div>
  )
}

