import React from 'react'
import AddNewInterview from './_components/newinterview'
import InterviewList from './_components/InterviewList'
import FeatureAssistant from './_components/Feature'

export default function Dashboard() {
  return (
    <div className='p-10'>
      <h1 className='font-extrabold text-primary text-3xl'>Dashboard</h1>
      <h2 className='text-gray-500 font-semibold'>Create and Start Your AI MockUp InterView..</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 my-5">
        <AddNewInterview/>
      </div>

      {/* Features List */}
      {/* <FeatureAssistant/> */}

      {/* Previous Interview List */}

      <InterviewList/>

    </div>
  )
}

