import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className="flex flex-col gap-4 md:gap-8 items-center justify-center min-h-screen">
            <h2 className='text-4xl md:text-8xl'>خطای 404</h2>
            <h2 className='text-neutral-500'>صفحه مورد نظر یافت نشد.</h2>
            <button className='bg-indigo-500 text-white rounded-md p-2'>
                <Link href="/">بازگشت</Link>
            </button>
        </div>
    )
}

export default NotFound