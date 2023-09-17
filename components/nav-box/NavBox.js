const NavBox = ({ content, setContent }) => {
    return (
        <nav className="fixed right-0 top-0 bottom-0 flex justify-center items-center">
            <ul className="bg-neutral-300 rounded-l-xl flex flex-col justify-around shadow-md shadow-indigo-300">
                <li
                    onClick={() => setContent("about")}
                    className={`${content == "about" ? "bg-indigo-500 shadow-md shadow-indigo-300 text-white ease-linear duration-300" : "bg-neutral-200/50 ease-linear duration-300"} text-sm md:text-base py-6 px-1 md:p-6 text-center cursor-pointer rounded-tl-xl border-b border-b-indigo-500`}
                >
                    درباره من
                </li>
                <li
                    onClick={() => setContent("skills")}
                    className={`${content == "skills" ? "bg-indigo-500 shadow-md shadow-indigo-300 text-white ease-linear duration-300" : "bg-neutral-200/50 ease-linear duration-300"} text-sm md:text-base py-6 px-1 md:p-6 text-center cursor-pointer border-b border-b-indigo-500`}
                >
                    مهارت ها
                </li>
                <li
                    onClick={() => setContent("portfolio")}
                    className={`${content == "portfolio" ? "bg-indigo-500 shadow-md shadow-indigo-300 text-white ease-linear duration-300" : "bg-neutral-200/50 ease-linear duration-300"} text-sm md:text-base py-6 px-1 md:p-6 text-center cursor-pointer border-b border-b-indigo-500`}
                >
                    نمونه کار
                </li>
                <li
                    onClick={() => setContent("ejucation")}
                    className={`${content == "ejucation" ? "bg-indigo-500 shadow-md shadow-indigo-300 text-white ease-linear duration-300" : "bg-neutral-200/50 ease-linear duration-300"} text-sm md:text-base py-6 px-1 md:p-6 text-center cursor-pointer border-b border-b-indigo-500`}
                >
                    سوابق آموزشی
                </li>
                <li
                    onClick={() => setContent("contact")}
                    className={`${content == "contact" ? "bg-indigo-500 shadow-md shadow-indigo-300 text-white ease-linear duration-300" : "bg-neutral-200/50 ease-linear duration-300"} text-sm md:text-base py-6 px-1 md:p-6 text-center cursor-pointer rounded-bl-xl`}
                >
                    تماس با من
                </li>
            </ul>
        </nav>
    )
}

export default NavBox