"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function FeedBack({params}) {

  useEffect(() => {
    GetFeedBack()
    console.log(params.id);
  }, [])

  const router = useRouter();
  
  const [feedbackList, setFeedbackList] = useState([])

  const mockidRef = params.id;
  const GetFeedBack = async()=>{
    const response = await axios.post("/api/subinterview/myfeedback",{mockidRef});

    console.log(response.data.feedbackResult);

    setFeedbackList(response.data.feedbackResult.questionAnswerFeedback)
  }

  return (
    <div className='p-10'>
      <h2 className='text-4xl text-center font-bold text-green-500'>Congragulation!!</h2>
      {/* Future tusk */}
      {/* <h2 className='font-bold my-3 text-primary text-xl'>Your Overall Interview Rating : </h2> */}

      <h2 className='text-lg mt-5 font-bold underline text-blue-700'>Find Below Interview Question with Correct Answer & Feedback for Improvement - </h2>

      {feedbackList && feedbackList.map((item,ind)=>(
        <Collapsible key={ind}>
        <CollapsibleTrigger className='p-2 bg-secondary rounded-lg my-2 font-semibold text-left flex gap-5 mt-10'>
          {item.question} <ChevronDown/>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className='flex flex-col gap-2'>
            <h2 className='text-blue-700  bg-blue-50 rounded-lg p-2 border'><strong>Rating : </strong>{item.rating}</h2>

            <h2 className='text-red-700 bg-red-50 rounded-lg p-2 border'><strong>Your Answer : </strong>{item.userAns}</h2>

            <h2 className='text-green-700 bg-green-50 rounded-lg p-2 border'><strong>Expected Answer : </strong>{item.correctAns}</h2>

            <h2 className='text-blue-700 bg-blue-50 rounded-lg p-2 border'><strong>FeedBack : </strong>{item.feedBack}</h2>
          </div>
        </CollapsibleContent>
        </Collapsible>
      ))}

      <div className='text-center m-10'>
        <Button className='font-bold' onClick={()=>router.replace('/dashboard')}>Go Home</Button>
      </div>

    </div>
  )
}

