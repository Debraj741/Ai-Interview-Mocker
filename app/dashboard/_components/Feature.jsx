"use client"
import { BlurFade } from '@/components/magicui/blur-fade'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const ExpertsList = [
    {
        name:"Topic Based Leacture",
        icon:"/lecture.png"
    },
    {
        name:"Mockup Interview",
        icon:"/interview.png"
    },
    {
        name:"Ques-Ans Prep",
        icon:"/qa.png"
    },
    {
        name:"Learn Languages",
        icon:"/language.png"
    },
    {
        name:"Meditation",
        icon:"/meditation.png"
    },
]

function FeatureAssistant() {
    return (
        <div className='mt-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='text-3xl font-bold'>Our Other Features</h2>
                </div>
                <Button>Profile</Button>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-10'>
                {ExpertsList.map((option, index) => (
                    <BlurFade key={option.icon} delay={0.25 + index * 0.05} inView>
                        <div key={index} className='p-4 bg-secondary rounded-3xl flex flex-col justify-center items-center'>

                            <Image src={option.icon} alt={option.name} width={150} height={150} className='w-[100px] h-[100px] hover:rotate-12 cursor-pointer transition-all' />

                            <h2 className='font-semibold mt-5'>{option.name}</h2>

                        </div>
                    </BlurFade>
                ))}
            </div>
        </div>
    )
}

export default FeatureAssistant
