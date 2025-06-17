"use client"
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'
import InterviewItemCard from './InterviewItemCard'

export default function InterviewList() {

    const {user} = useUser()
    const [myAllPreviousInterview, setMyAllPreviousInterview] = useState([])

    useEffect(() => {
      user && GetInterviewList();
    }, [user])
    

    const GetInterviewList = async()=>{
        const createdBy = user?.primaryEmailAddress?.emailAddress;
        const response = await axios.post("/api/interviews/interviewList",{createdBy})
        if(response){
            console.log(response.data.InterViewList);
            setMyAllPreviousInterview(response.data.InterViewList)
        }
        else{
            toast("Error In Fetching Interview");
        }
    }

  return (
    <div className='mt-20'>
      <h2 className='font-bold text-xl mb-5'>Previous Mock InterViews -- </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
        {myAllPreviousInterview && myAllPreviousInterview.map((item,ind)=>(
            <InterviewItemCard
            interviewDetails = {item}
            key={ind}/>
        ))}
      </div>
    </div>
  )
}
