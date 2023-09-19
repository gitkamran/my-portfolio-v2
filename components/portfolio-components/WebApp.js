import React from 'react'
import { HiOutlineCube } from 'react-icons/hi'

const WebApp = () => {
    return (
        <div className="flex flex-col gap-4 w-full my-14 px-4 md:px-0">
            <div className='flex items-center gap-2'>
                <h2>وب اپلیکیشن خرید و دانلود فایل</h2>
                <span className='bg-indigo-100 text-xs p-1 rounded-md text-neutral-600'>نمونه کار</span>
            </div>
            <div className='flex items-start md:items-center gap-1'>
                <div className='flex items-center gap-1 text-neutral-600 whitespace-nowrap'>
                    <HiOutlineCube className='' />
                    <h2 className='text-sm font-bold'>تکنولوژی ها:</h2>
                </div>
                <p className='text-neutral-500 text-sm ltr'>next js, node js, express, json web token, mongo db, tailwind css</p>
            </div>
            <div className='flex flex-col gap-2 border-r border-r-neutral-300 pr-2'>
                <h2 className='text-neutral-600 font-bold text-sm'>
                    امکانات سایت
                </h2>
                <p className='text-neutral-500 text-sm'>
                    صفحه اصلی شامل اسلایدر، بنر های تبلیغاتی، اسلایدر محصولات و آخرین پست ها
                </p>
                <p className='text-neutral-500 text-sm'>
                    امکان اضافه کردن چندین محصول به سبد خرید و حذف از سبد خرید و پرداخت از طریق درگاه پرداخت
                </p>
                <p className='text-neutral-500 text-sm'>
                    اضافه کردن محصول به علاقه مندی ها، جستجو و فیلتر محصولات و جستجو در قسمت وبلاگ، دارای سئو و کاملا ریسپانسیو شده
                </p>
            </div>
            <div className='flex flex-col gap-2 border-r border-r-neutral-300 pr-2'>
                <h2 className='text-neutral-600 font-bold text-sm'>
                    داشبورد مدیریت
                </h2>
                <p className='text-neutral-500 text-sm'>
                    ایجاد، ویرایش و حذف محصول، دسته بندی محصول، اسلایدر، بنر تبلیغاتی
                </p>
                <p className='text-neutral-500 text-sm'>
                    مشاهده، ویرایش و حذف کاربران ثبت نام کرده، سفارشات انجام شده و تایید و عدم تایید دیدگاه کاربران
                </p>
                <p className='text-neutral-500 text-sm'>
                    ایجاد، ویرایش و حذف پست و برچسب
                </p>
                <p className='text-neutral-500 text-sm'>
                    امکان آپلود تصاویر، مشاهده تعداد کاربران، کاربران جدید، دیدگاه ها و سفارشات جدید دیده نشده
                </p>
            </div>
            <div className='flex flex-col gap-2 border-r border-r-neutral-300 pr-2'>
                <h2 className='text-neutral-600 font-bold text-sm'>
                    حساب کاربری
                </h2>
                <p className='text-neutral-500 text-sm'>
                    ثبت نام، ورود و بازیابی کلمه عبور از طریق آدرس ایمیل
                </p>
                <p className='text-neutral-500 text-sm'>
                    مشاهده و ویرایش اطلاعات کاربری و تایید و عدم تایید ارسال ایمیل تبلیغاتی
                </p>
                <p className='text-neutral-500 text-sm'>
                    مشاهده و حذف محصولات مورد پسند، مشاهده و دانلود محصولات خریداری شده، مشاهده سفارشات انجام شده و دیدگاه ها
                </p>
            </div>
            <a href="https://newupdate.ir" target='_blank' className='bg-indigo-500 p-2 text-white text-sm w-fit rounded-md shadow-md shadow-indigo-300'>مشاهده وبسایت</a>
        </div>
    )
}

export default WebApp