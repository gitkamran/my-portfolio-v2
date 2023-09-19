import React from 'react'
import { HiOutlineCube } from 'react-icons/hi'

const WebsiteBox = ({ title, tools, desc,href }) => {
    return (
        <div className='flex flex-col gap-2'>
            <h2>{title}</h2>
            <div className='flex items-start md:items-center gap-1'>
                <div className='flex items-center gap-1 text-neutral-600 whitespace-nowrap'>
                    <HiOutlineCube className='' />
                    <h2 className='text-sm font-bold'>تکنولوژی ها:</h2>
                </div>
                <p className='text-neutral-500 text-sm ltr'>{tools}</p>
            </div>
            <div className='flex flex-col gap-2 border-r border-r-neutral-300 pr-2'>
                <h2 className='text-neutral-600 font-bold text-sm'>
                    امکانات سایت
                </h2>
                <p className='text-neutral-500 text-sm'>
                    {desc}
                </p>
            </div>
            <a href={href} target='_blank' className='bg-indigo-500 p-1.5 text-white text-xs w-fit rounded-md shadow-md shadow-indigo-300'>مشاهده وبسایت</a>
        </div>
    )
}

export default WebsiteBox