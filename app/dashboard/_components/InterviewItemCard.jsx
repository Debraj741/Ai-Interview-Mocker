import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function InterviewItemCard({interviewDetails}) {
    const router = useRouter()

    const onStart = ()=>{
        router.push(`/dashboard/myinterview/${interviewDetails?.mockid}`)
    }

    const onFeedback = ()=>{
        router.push(`/dashboard/myinterview/${interviewDetails?.mockid}/myfeedback`)
    }

  return (
    <div className='border shadow-md rounded-lg p-3'>
      <h2 className='font-extrabold text-lg text-primary'>{interviewDetails?.jobTitle}</h2>
      <h2 className='font-bold text-sm text-gray-500'>{interviewDetails?.jobExperience} - Years of Experience</h2>
      <h2 className='font-extrabold text-xs text-gray-400'>Created At : {interviewDetails?.createdAt}</h2>

      <div className="flex justify-between mt-2 items-center gap-5">
        <Button onClick={onFeedback} size='sm' variant='outline' className='w-full font-extrabold'>Feedback</Button>
        <Button onClick={onStart} size='sm' className='w-full font-extrabold'>Start</Button>
      </div>
    </div>
  )
}

