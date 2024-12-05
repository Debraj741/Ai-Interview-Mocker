import { LightbulbIcon, Volume2 } from 'lucide-react'
import React from 'react'

export default function QuestionSection({mockInterviewQuestions,activeQuestionIndex}) {

  const textToSpeach = (text)=>{
    if('speechSynthesis' in window){
      const speech = new SpeechSynthesisUtterance(text)
      window.speechSynthesis.speak(speech)
    }
    else{
      alert("Sorry Your Browser does not Support Text to Speech")
    }
  }

  return mockInterviewQuestions && (
    <div className='p-5 border rounded-lg my-10'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {mockInterviewQuestions && mockInterviewQuestions.map((question,ind)=>(
            <h2 className={`p-2 rounded-full text-xs md:text-sm text-center cursor-pointer font-bold ${activeQuestionIndex == ind?"text-white bg-primary":"bg-secondary "}`}>Question #{ind+1}</h2>
        ))}
      </div>

      <h2 className='my-8 text-sm md:text-base font-bold'>{mockInterviewQuestions[activeQuestionIndex]?.Question}</h2>

      <Volume2 className='cursor-pointer' onClick={()=>textToSpeach(mockInterviewQuestions[activeQuestionIndex]?.Question)}/>

      <div className='border rounded-lg p-5 bg-blue-100 mt-20'>
        <h2 className='flex gap-3 items-center font-bold text-blue-700'><LightbulbIcon/>NOTE:</h2>
        <p className='my-3 text-sm font-bold text-blue-600'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</p>
      </div>
    </div>
  )
}

