import Image from 'next/image'

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex flex-col gap-2 w-[200px] bg-neutral-200/50 p-2 rounded-md shadow-md shadow-indigo-300">
        <div className="overflow-hidden bg-white rounded-md p-2">
          <Image
            src="/assets/images/portfolio/logo/logo-hilite.svg"
            alt='هایلایت | پلتفرم تبلیغات آنلاین صنعت و ساختمان'
            width={200}
            height={200}
            priority
            className="w-auto h-auto rounded-md"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <h2 className="text-neutral-600">طراحی لوگو هایلایت</h2>
          <p className="text-xs text-neutral-500">هایلایت پلتفرم تبلیغات آنلاین صنعت و ساختمان ایران می باشد.</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-[200px] bg-neutral-200/50 p-2 rounded-md shadow-md shadow-indigo-300">
        <div className="overflow-hidden bg-neutral-500 rounded-md p-2">
          <Image
            src="/assets/images/portfolio/logo/logo-hamideyvazi.svg"
            alt='حمید عیوضی | مدرس ارز های دیجیتال'
            width={200}
            height={200}
            priority
            className="w-auto h-auto rounded-md"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <h2 className="text-neutral-600">طراحی لوگو حمید عیوضی</h2>
          <p className="text-xs text-neutral-500">حمید عیوضی مدرس دوره های ارز دیجیتال</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-[200px] bg-neutral-200/50 p-2 rounded-md shadow-md shadow-indigo-300">
        <div className="overflow-hidden bg-white rounded-md p-2">
          <Image
            src="/assets/images/portfolio/logo/logo-cafeparrot.png"
            alt='کافه پاروت | خرید آنلاین لوازم نگهداری حیوانات خانگی'
            width={200}
            height={200}
            priority
            className='w-auto h-auto rounded-md'
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <h2 className="text-neutral-600">طراحی لوگو کافه پاروت</h2>
          <p className="text-xs text-neutral-500">کافه پاروت خرید آنلاین لوازم نگهداری حیوانات خانگی</p>
        </div>
      </div>
    </div>
  )
}

export default Logo