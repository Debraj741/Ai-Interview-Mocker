"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text';
import { Ghost, Mic } from 'lucide-react'

export default function RecordAnswerSection() {
    const [userAnswer, setUserAnswer] = useState("")
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });

    useEffect(() => {
      results.map((res)=>(
        setUserAnswer(prevAns=>prevAns+res?.transcript)
      ))
    
    }, [results])
    

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

        <Button variant={isRecording ? 'outline': 'default'} onClick={isRecording?stopSpeechToText:startSpeechToText} className='my-10 font-bold'>
            {isRecording? <h2 className='flex gap-2 text-red-600'><Mic/> Stop Recording</h2>:'Record Answer'}
        </Button>

        <Button onClick={()=>console.log(userAnswer)}>Show Answer</Button>

    </div>
  )
}


