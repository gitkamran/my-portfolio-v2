const NavBox = ({ content, setContent }) => {
    return (
        <nav className="fixed right-0 top-0 bottom-0 flex justify-center items-center">
            <ul className="bg-neutral-300 rounded-l-xl p-4 flex flex-col gap-8 justify-around shadow-md shadow-indigo-300">
                <li
                    onClick={() => setContent("about")}
                    className={`${content == "about" ? "bg-indigo-500 shadow-md shadow-indigo-300 text-white ease-linear duration-300" : "bg-neutral-200/50 ease-linear duration-300"} p-2 rounded-md text-center cursor-pointer`}
                >
                    درباره من
                </li>
                <li
                    onClick={() => setContent("skills")}
                    className={`${content == "skills" ? "bg-indigo-500 shadow-md shadow-indigo-300 text-white ease-linear duration-300" : "bg-neutral-200/50 ease-linear duration-300"} p-2 rounded-md text-center cursor-pointer`}
                >
                    مهارت ها
                </li>
                <li
                    onClick={() => setContent("portfolio")}
                    className={`${content == "portfolio" ? "bg-indigo-500 shadow-md shadow-indigo-300 text-white ease-linear duration-300" : "bg-neutral-200/50 ease-linear duration-300"} p-2 rounded-md text-center cursor-pointer`}
                >
                    نمونه کار
                </li>
                <li
                    onClick={() => setContent("ejucation")}
                    className={`${content == "ejucation" ? "bg-indigo-500 shadow-md shadow-indigo-300 text-white ease-linear duration-300" : "bg-neutral-200/50 ease-linear duration-300"} p-2 rounded-md text-center cursor-pointer`}
                >
                    سوابق آموزشی
                </li>
                <li
                    onClick={() => setContent("contact")}
                    className={`${content == "contact" ? "bg-indigo-500 shadow-md shadow-indigo-300 text-white ease-linear duration-300" : "bg-neutral-200/50 ease-linear duration-300"} p-2 rounded-md text-center cursor-pointer`}
                >
                    تماس با من
                </li>
            </ul>
        </nav>
    )
}

export default NavBox