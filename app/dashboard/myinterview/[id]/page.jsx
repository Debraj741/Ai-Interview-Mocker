"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Webcam from 'react-webcam'
import { Lightbulb, WebcamIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function InterviewIDPage({params}) {

  const [interviewData, setInterviewData] = useState("")
  const [webCamEnable, setWebCamEnable] = useState(false)

  useEffect(()=>{
    console.log(params.id);
    getInterviewDetails()
  },[])

  const getInterviewDetails = async()=>{
    const myId = params.id
    const result = await axios.post(`/api/subinterview/${myId}`)
    console.log(result.data.myInterview);
    
    setInterviewData(result.data.myInterview)
  }

  return (
    <div className='my-10'>
      <h2 className='font-bold text-2xl'>Let's Get Started</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
        <div className='flex flex-col my-5 gap-5'>
            <div className='flex flex-col gap-5 p-5 rounded-lg border'>
              <h2 className='text-lg'><strong>Job Role/Job Position : </strong>{interviewData.jobTitle}</h2>
              <h2 className='text-lg'><strong>Job Description/Tech Stack : </strong>{interviewData.jobDesc}</h2>
              <h2 className='text-lg'><strong>Years of Experience : </strong>{interviewData.jobExperience}</h2>
            </div>

            <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-100'>
              <h2 className='font-bold text-xl flex gap-2 items-center text-yellow-500'><Lightbulb/>Information</h2>
              <p className='mt-3 text-yellow-500'>{process.env.NEXT_PUBLIC_INFORMATION}</p>
            </div>
        </div>

        <div>
          {
            webCamEnable ? <Webcam 
              onUserMedia={()=>setWebCamEnable(true)}
              onUserMediaError={()=>setWebCamEnable(false)}
              mirrored={true}
              style={{
                height:300,
                width:300
              }}
            />
            :
            <>
              <WebcamIcon className='h-72 w-full my-7 p-20 bg-secondary rounded-lg border'/>
              <Button variant="secondary" className='w-full font-bold border' onClick={()=>setWebCamEnable(true)}>Enable Web Cam & Microphone</Button>
            </>
          }
        </div>
      </div>

      <div className='flex justify-center mt-10'>
        <Link href={`/dashboard/myinterview/${params.id}/start`}>
          <Button className='font-bold'>Start Interview</Button>
        </Link>
      </div>
    </div>
  )
}

