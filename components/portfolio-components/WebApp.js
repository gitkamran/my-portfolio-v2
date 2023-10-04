import React from 'react'
import { HiOutlineCube } from 'react-icons/hi'
import { HiOutlineRocketLaunch } from 'react-icons/hi2'

const WebApp = () => {
    return (
        <div className="flex flex-col gap-4 w-full my-14 md:my-20 px-4 md:px-0">
            <div className="flex flex-col gap-4 border-b border-b-indigo-400 pb-4">
                <div className='flex items-end gap-2'>
                    <h2 className='text-4xl font-bold w-14 h-14 flex items-center justify-center bg-neutral-200 rounded-md shadow-md'>1</h2>
                    <div className='flex items-center gap-2'>
                        <h2>وب اپلیکیشن خرید و دانلود فایل</h2>
                        <span className='bg-indigo-100 text-xs p-1 rounded-md text-neutral-600'>نمونه کار</span>
                    </div>
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

            <div className="flex flex-col gap-4 border-b border-b-indigo-400 pb-4">
                <div className='flex items-end gap-2'>
                    <h2 className='text-4xl font-bold w-14 h-14 flex items-center justify-center bg-neutral-200 rounded-md shadow-md'>2</h2>
                    <div className='flex items-center gap-2'>
                        <h2>وب اپلیکیشن وضعیت آب و هوا</h2>
                        <span className='bg-indigo-100 text-xs p-1 rounded-md text-neutral-600'>نمونه کار</span>
                    </div>
                </div>
                <div className='flex items-start md:items-center gap-1'>
                    <div className='flex items-center gap-1 text-neutral-600 whitespace-nowrap'>
                        <HiOutlineCube className='' />
                        <h2 className='text-sm font-bold'>تکنولوژی ها:</h2>
                    </div>
                    <p className='text-neutral-500 text-sm ltr'>react js, tailwind css</p>
                </div>
                <div className='flex flex-col gap-2 border-r border-r-neutral-300 pr-2'>
                    <h2 className='text-neutral-600 font-bold text-sm'>
                        امکانات اپلیکیشن
                    </h2>
                    <p className='text-neutral-500 text-sm'>
                        مشاهده آخرین وضعیت آب و هوایی، رطوبت و وزش باد
                    </p>
                    <p className='text-neutral-500 text-sm'>
                        جستجو شهر ها به صورت فارسی و انگلیسی
                    </p>
                    <p className='text-neutral-500 text-sm'>
                        کاملا ریسپانسیو شده و قابل مشاهده در تمام دستگاه ها
                    </p>
                </div>
                <a href="https://weather-app-mkamran.vercel.app/" target='_blank' className='bg-indigo-500 p-2 text-white text-sm w-fit rounded-md shadow-md shadow-indigo-300'>مشاهده وبسایت</a>
            </div>

            <div className="flex flex-col gap-4 border-b border-b-indigo-400 pb-4">
                <div className='flex items-end gap-2'>
                    <h2 className='text-4xl font-bold w-14 h-14 flex items-center justify-center bg-neutral-200 rounded-md shadow-md'>3</h2>
                    <div className='flex items-center gap-2'>
                        <h2>وب اپلیکیشن خرید سوپر مارکت</h2>
                        <span className='bg-indigo-100 text-xs p-1 rounded-md text-neutral-600'>نمونه کار</span>
                    </div>
                </div>
                <div className='flex items-start md:items-center gap-1'>
                    <div className='flex items-center gap-1 text-neutral-600 whitespace-nowrap'>
                        <HiOutlineCube className='' />
                        <h2 className='text-sm font-bold'>تکنولوژی ها:</h2>
                    </div>
                    <p className='text-neutral-500 text-sm ltr'>next js, tailwind css</p>
                </div>
                <div className='flex flex-col gap-2 border-r border-r-neutral-300 pr-2'>
                    <h2 className='text-neutral-600 font-bold text-sm'>
                        امکانات سایت
                    </h2>
                    <p className='text-neutral-500 text-sm'>
                        صفحه اصلی شامل اسلایدر، بنر های تبلیغاتی، اسلایدر محصولات
                    </p>
                    <p className='text-neutral-500 text-sm'>
                        امکان جستجو محصول، دسته بندی محصول و فیلتر محصولات و صفحه بندی محصولات
                    </p>
                    <p className='text-neutral-500 text-sm'>
                        ورود به حساب کاربری با تلفن همراه *به صورت دمو
                    </p>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-rose-500 font-bold text-sm'>نکته:</span>
                    <p className='text-sm text-neutral-500'>قسمت فرانت این وب اپلیکیشن به صورت نمونه از سایت اصلی قزوین مارکت طراحی شده است.</p>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-rose-500 font-bold text-sm'>نکته:</span>
                    <p className='text-sm text-neutral-500'>طراحی ریسپانسیو این وب اپلیکیشن در حال انجام است.</p>
                </div>
                <a href="https://next-market-mu-five.vercel.app/" target='_blank' className='bg-indigo-500 p-2 text-white text-sm w-fit rounded-md shadow-md shadow-indigo-300'>مشاهده وبسایت</a>
            </div>
        </div>
    )
}

export default WebApp