import React from 'react'
import { HiOutlineCube } from 'react-icons/hi'

const WebApp = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <h2>وب اپلیکیشن خرید و دانلود فایل</h2>
            <div className='flex items-center gap-1'>
                <div className='flex items-center gap-1 text-neutral-500'>
                    <HiOutlineCube className='' />
                    <h2 className='text-sm'>تکنولوژی ها:</h2>
                </div>
                <p className='text-neutral-400 text-sm'>next js, node js, express, json web token, mongo db, tailwind css</p>
            </div>
            <div className='flex items-center gap-1'>
                <h2 className='text-neutral-500 text-sm'>
                    داشبورد مدیریت:
                </h2>
                <p className='text-neutral-400 text-sm'>
                    ایجاد محصول، دسته بندی محصول، اسلایدر با امکان اختصاص لینک مورد نظر، ایجاد بنر تبلیغاتی
                </p>
            </div>
        </div>
    )
}

export default WebApp