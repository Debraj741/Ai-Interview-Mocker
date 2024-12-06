"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic, StopCircle } from 'lucide-react'
import { toast } from 'sonner'
import { chatSession } from '@/utils/gemini'
import moment from 'moment'
import axios from 'axios'

export default function RecordAnswerSection({mockInterviewQuestions,activeQuestionIndex,interviewData}) {
    const [userAnswer, setUserAnswer] = useState('')
    const [feedbackPart, setFeedbackPart] = useState({
      mockidRef : "",
      question : "",
      correctAns : "",
      userAns : "",
      feedBack : "",
      rating : "",
      userEmail : "",
      createdAt : ""
    })
    const [loading, setLoading] = useState(false)
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
        setResults
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });

    useEffect(() => {
      results.map((res)=>(
        setUserAnswer(prevAns=>prevAns+res?.transcript)
      ))
      
    }, [results])

    useEffect(() => {
      if(!isRecording && userAnswer.length>0){
        UpdateUserAnswer();
      }
    }, [userAnswer])
    
    
    const StartStopRecording = async()=>{
      if(isRecording){
        stopSpeechToText()
      }
      else{
        startSpeechToText()
      }
    }

    const UpdateUserAnswer = async()=>{
      setLoading(true)
      
      // Feed Back Collect
      const feedBackPrompt = "Question: "+mockInterviewQuestions[activeQuestionIndex]?.Question+", User Answer: "+userAnswer+", Depends on Question and User Answer for given interview question "+" please give us rating for answer and feedback as area of improvement if any "+"in just 3 to 5 lines to improve it in JSON format with rating field and feedback field";

      const result = await chatSession.sendMessage(feedBackPrompt);

      const mockJsonResponse = (result.response.text()).replace('```json','').replace('\n```','')

      console.log(mockJsonResponse);
      const jsonFeedbackResponse = JSON.parse(mockJsonResponse)

      // Set FeedBackPart to save it to database
      feedbackPart.mockidRef = interviewData.mockid
      feedbackPart.question = mockInterviewQuestions[activeQuestionIndex]?.Question
      feedbackPart.correctAns = mockInterviewQuestions[activeQuestionIndex]?.Answer
      feedbackPart.userAns = userAnswer
      feedbackPart.feedBack = jsonFeedbackResponse.feedback
      feedbackPart.rating = jsonFeedbackResponse.rating
      feedbackPart.userEmail = interviewData.createdBy
      feedbackPart.createdAt = moment().format('DD-MM-yyyy')

      console.log(feedbackPart);
      
      const response = await axios.post("/api/subinterview/feedback",feedbackPart)
      if(response){
        toast(response.data.message)
        setUserAnswer('')
        setResults([])
      }
      setResults([])
      setLoading(false)
    }

  return (
    <div className='flex items-center justify-center flex-col'>
        <div className='flex flex-col justify-center items-center bg-black rounded-lg p-5 mt-20'>
            <Image src={'/webcam.png'} width={200} height={200} className='absolute' />
        <Webcam
        mirrored={true}
        style={{
            height: 300,
            width: '100%',
            zIndex:10
            }}
            />
        </div>

        <Button variant={'outline'} onClick={StartStopRecording} className='my-10 font-bold'>
            {isRecording? <h2 className='flex gap-2 text-red-600 items-center animate-pulse'> <StopCircle/> Stop Recording</h2>: <h2 className='flex gap-2 items-center text-blue-600'><Mic/> Record Answer</h2>}
        </Button>

    </div>
  )
}


