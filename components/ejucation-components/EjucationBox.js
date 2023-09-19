"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { HiOutlineX, HiOutlineClock } from 'react-icons/hi'
import { HiOutlineTrophy } from 'react-icons/hi2'


const EjucationBox = ({ title, desc, courseDur, score, src, alt }) => {
    const [linkImage, setLinkImage] = useState("")
    const [showImage, setShowImage] = useState(false)
    return (
        <div className='flex flex-col items-stretch justify-between gap-2 bg-neutral-300/50 p-2 rounded-md shadow-md shadow-indigo-300'>
            <div>
                <h2 className='text-neutral-600 text-lg text-left'>{title}</h2>
                <p className='text-neutral-500 text-sm text-left border-b border-b-indigo-400'>{desc}</p>
                <div className='flex items-center gap-1 py-1 border-b border-b-indigo-400'>
                    <div className='flex items-center gap-1'>
                        <HiOutlineClock className='text-neutral-600' />
                        <span className='text-neutral-600 text-sm'>طول دوره:</span>
                    </div>
                    <span className='text-indigo-600 text-lg'>{courseDur}</span>
                    <span className='text-neutral-600 text-sm'>ساعت</span>
                </div>
                <div className='flex items-center gap-1 py-1 border-b border-b-indigo-400'>
                    <div className='flex items-center gap-1'>
                        <HiOutlineTrophy className='text-neutral-600' />
                        <span className='text-neutral-600 text-sm'>نمره از 100:</span>
                    </div>
                    <span className='text-indigo-600 text-lg'>{score}</span>
                </div>
            </div>
            <div onClick={() => {
                setLinkImage(src);
                setShowImage(true)
            }}
                className="w-auto h-auto cursor-pointer focus:outline-none"
            >
                <Image
                    src={src}
                    alt={alt}
                    width={200}
                    height={141}
                    priority
                    className='w-auto h-auto rounded-md'
                />
            </div>
            {
                showImage &&
                <div className="fixed inset-0 bg-neutral-500/70 z-50 p-4">
                    <div className='flex items-center justify-center w-full h-full'>
                        <Image
                            src={linkImage}
                            alt={alt}
                            width={800}
                            height={600}
                            priority
                            className='w-auto h-auto rounded-md'
                        />
                    </div>
                    <HiOutlineX onClick={() => setShowImage(false)} className="cursor-pointer absolute top-2 right-2 text-4xl text-white" />
                </div>
            }
        </div>
    )
}

export default EjucationBox