import React from 'react'
import { HiOutlinePhone } from 'react-icons/hi2'
import { HiOutlineMail } from 'react-icons/hi'

const ContactList = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between gap-2 bg-indigo-100 p-4 rounded-md'>
            <h2 className='text-sm font-bold text-neutral-500'>راه های ارتباطی</h2>
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-0.5 w-full ltr'>
                    <HiOutlinePhone className='text-lg text-neutral-600' />
                    <a href="tel:+989369139993" target="_blank" className="text-neutral-600">09369139993</a>
                </div>
                <div className='flex items-center gap-0.5 w-full ltr'>
                    <HiOutlineMail className='text-lg text-neutral-600' />
                    <a href="mailto:mkamran.ir@gmail.com" target="_blank" className="text-neutral-600">mkamran.ir@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default ContactList