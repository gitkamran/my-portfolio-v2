import React from 'react'
import WebsiteBox from './WebsiteBox'

const Website = () => {
  return (
    <div className='flex flex-col gap-4 md:w-[80%] lg:w-[60%] xl:w-[70%] mx-auto my-14 px-4 md:px-0'>
      <WebsiteBox
        title="وبسایت دانلود آهنگ جدید"
        tools="php, wordpress, yoast seo, wp rocket"
        desc="وبسایت موزیکصد دانلود جدیدترین آهنگ های ایرانی با لینک مستقیم دانلود و همچنین پخش آنلاین آهنگ. طراحی شده با cms وردپرس دارای پوسته اختصاصی شده music100، بخش های دسته بندی آهنگ ها، لیست هنرمندان، جستجو خواننده یا آهنگ مورد نظر، دارای سئو و همچنین ریسپانسیو شده جهت نمایش در تمامی پلتفرم ها."
        href="https://newupdate.ir"
      />
      <WebsiteBox
        title="پلتفرم تبلیغات آنلاین صنعت و ساختمان هایلایت"
        tools="php, wordpress, yoast seo, elementor, slider revolution"
        desc="هایلایت پلتفرم تبلیغات آنلاین صنعت و ساختمان ایران در بخش وبلاگ و معرفی سایت از CMS وردپرس استفاده شده است، همچنین دارای ریسپانسیو کامل جهت نمایش در تمامی پلتفرم ها می باشد. سئو شده توسط افزونه یواست سئو می باشد."
        href="https://hilite.ir/"
      />
      <WebsiteBox
        title="اف بی تولید کننده نسل جدید رولپلاک"
        tools="php, wordpress, yoast seo, wp bakery, slider revolution"
        desc="مشاهده جدیدترین محصولات شرکت اف بی، ثبت دریافت نمایندگی از طریق فرم و تماس با شرکت، وبسایت کاملا ریسپانسیو و دارای سئو می باشد."
        href="https://efbi.ir/"
      />
    </div>
  )
}

export default Website