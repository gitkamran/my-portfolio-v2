
const NavPortfolio = ({contentPortfolio,setContentPortfolio}) => {
    return (
        <nav className="fixed top-2 md:top-5 left-0 right-0 w-fit mx-auto">
            <ul className="flex items-center bg-neutral-200 rounded-xl overflow-hidden text-rose-700 font-bold">
                <li onClick={()=>setContentPortfolio("webapp")} className={`${contentPortfolio == "webapp" ? "bg-rose-100 ease-linear duration-300" : "ease-linear duration-300"} cursor-pointer px-2 md:px-4 py-2 text-sm md:text-base`}>
                    وب اپلیکیشن
                </li>
                <li onClick={()=>setContentPortfolio("website")} className={`${contentPortfolio == "website" ? "bg-rose-100 ease-linear duration-300" : "ease-linear duration-300"} cursor-pointer px-2 md:px-4 py-2 text-sm md:text-base`}>
                    وب سایت
                </li>
                <li onClick={()=>setContentPortfolio("uiux")} className={`${contentPortfolio == "uiux" ? "bg-rose-100 ease-linear duration-300" : "ease-linear duration-300"} cursor-pointer px-2 md:px-4 py-2 text-sm md:text-base`}>
                    UI/UX
                </li>
                <li onClick={()=>setContentPortfolio("logo")} className={`${contentPortfolio == "logo" ? "bg-rose-100 ease-linear duration-300" : "ease-linear duration-300"} cursor-pointer px-2 md:px-4 py-2 text-sm md:text-base`}>
                    لوگو
                </li>
            </ul>
        </nav>
    )
}

export default NavPortfolio