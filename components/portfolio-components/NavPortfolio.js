
const NavPortfolio = ({contentPortfolio,setContentPortfolio}) => {
    return (
        <nav className="fixed top-5 left-0 right-0 w-fit mx-auto">
            <ul className="flex items-center bg-neutral-200 rounded-md">
                <li onClick={()=>setContentPortfolio("webapp")} className={`${contentPortfolio == "webapp" ? "bg-indigo-200" : ""} cursor-pointer px-4 py-2 rounded-r-md`}>
                    وب اپلیکیشن
                </li>
                <li onClick={()=>setContentPortfolio("website")} className={`${contentPortfolio == "website" ? "bg-indigo-200" : ""} cursor-pointer px-4 py-2`}>
                    وب سایت
                </li>
                <li onClick={()=>setContentPortfolio("uiux")} className={`${contentPortfolio == "uiux" ? "bg-indigo-200" : ""} cursor-pointer px-4 py-2`}>
                    UI/UX
                </li>
                <li onClick={()=>setContentPortfolio("logo")} className={`${contentPortfolio == "logo" ? "bg-indigo-200" : ""} cursor-pointer px-4 py-2 rounded-l-md`}>
                    لوگو
                </li>
            </ul>
        </nav>
    )
}

export default NavPortfolio