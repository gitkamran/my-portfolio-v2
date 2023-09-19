"use client"
import { useState } from "react"
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"
import { FaGithub, FaInstagram } from "react-icons/fa"

const NavMobileBox = ({ content, setContent }) => {
    const [showMenu, setShowMenu] = useState(false)
    const menuHandler = () => {
        setShowMenu(!showMenu)
    }
    return (
        <nav className={showMenu ? "md:hidden fixed right-0 top-0 bottom-0 flex justify-center items-center ease-linear duration-500 z-50 bg-neutral-100/70" : "md:hidden fixed -right-[100%] top-0 bottom-0 flex justify-center items-center ease-linear duration-500"}>
            <ul className="bg-neutral-300 rounded-l-xl flex flex-col justify-around shadow-md shadow-indigo-300">
                <li
                    onClick={() => setContent("about")}
                    className={`${content == "about" ? "bg-indigo-500 shadow-md shadow-indigo-300 text-white ease-linear duration-300" : "bg-neutral-200/50 ease-linear duration-300"} text-sm lg:text-base py-6 px-1 lg:p-6 text-center cursor-pointer rounded-tl-xl border-b border-b-indigo-500`}
                >
                    درباره من
                </li>
                <li
                    onClick={() => setContent("skills")}
                    className={`${content == "skills" ? "bg-indigo-500 shadow-md shadow-indigo-300 text-white ease-linear duration-300" : "bg-neutral-200/50 ease-linear duration-300"} text-sm lg:text-base py-6 px-1 lg:p-6 text-center cursor-pointer border-b border-b-indigo-500`}
                >
                    مهارت ها
                </li>
                <li
                    onClick={() => setContent("portfolio")}
                    className={`${content == "portfolio" ? "bg-indigo-500 shadow-md shadow-indigo-300 text-white ease-linear duration-300" : "bg-neutral-200/50 ease-linear duration-300"} text-sm lg:text-base py-6 px-1 lg:p-6 text-center cursor-pointer border-b border-b-indigo-500`}
                >
                    نمونه کار
                </li>
                <li
                    onClick={() => setContent("ejucation")}
                    className={`${content == "ejucation" ? "bg-indigo-500 shadow-md shadow-indigo-300 text-white ease-linear duration-300" : "bg-neutral-200/50 ease-linear duration-300"} text-sm lg:text-base py-6 px-1 lg:p-6 text-center cursor-pointer border-b border-b-indigo-500`}
                >
                    سوابق آموزشی
                </li>
                <li
                    onClick={() => setContent("contact")}
                    className={`${content == "contact" ? "bg-indigo-500 shadow-md shadow-indigo-300 text-white ease-linear duration-300" : "bg-neutral-200/50 ease-linear duration-300"} text-sm lg:text-base py-6 px-1 lg:p-6 text-center cursor-pointer rounded-bl-xl`}
                >
                    تماس با من
                </li>
            </ul>
            <button onClick={menuHandler} className="fixed right-2 top-2 z-50">
                {showMenu ?
                    <HiOutlineX className="text-indigo-500 text-4xl bg-indigo-100 rounded-md" />
                    :
                    <HiOutlineMenu className="text-indigo-500 text-4xl bg-indigo-100 rounded-md" />
                }
            </button>
            <div className="flex items-center gap-2 absolute bottom-5">
                <a href='https://www.instagram.com/mkamran.ir' target='_blank'>
                    <FaGithub className="text-indigo-500 text-3xl bg-neutral-100 rounded-md" />
                </a>
                <a href='https://github.com/gitkamran' target='_blank'>
                    <FaInstagram className="text-indigo-500 text-3xl bg-neutral-100 rounded-md" />
                </a>
            </div>
        </nav >
    )
}

export default NavMobileBox