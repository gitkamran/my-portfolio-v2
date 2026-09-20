"use client"

import { useRef, useState } from "react"

const FormContact = () => {
    const fullnameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);
    const [faild, setFaild] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("api/contact", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                fullname: fullnameRef.current.value,
                email: emailRef.current.value,
                message: messageRef.current.value,
            }),
        });

        const { msg, success, faild } = await res.json();
        setError(msg);
        setSuccess(success);
        setFaild(faild)
        if (success) {
            fullnameRef.current.value = "";
            emailRef.current.value = "";
            messageRef.current.value = "";
            setTimeout(() => {
                setSuccess(false)
            }, 3000)
        }
    };
    return (
        <div className="flex flex-col gap-2 p-4 w-full md:w-auto bg-indigo-100 rounded-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col gap-0.5 w-full">
                        <label htmlFor="fullname" className="text-gray-500">نام شما</label>
                        <input
                            type="text"
                            id="fullname"
                            className="p-2 rounded-md focus:outline-indigo-300 shadow-md shadow-indigo-300"
                            ref={fullnameRef}
                            placeholder="محمد کامران"
                        />
                        {error && error.fullname &&
                            <span className="text-sm text-red-500 pt-1">{error.fullname.message}</span>
                        }
                    </div>
                    <div className="flex flex-col gap-0.5 w-full">
                        <label htmlFor="email" className="text-gray-500">ایمیل شما</label>
                        <input
                            type="text"
                            id="email"
                            className="p-2 rounded-md focus:outline-indigo-300 shadow-md shadow-indigo-300"
                            ref={emailRef}
                            placeholder="your_email@email.com"
                        />
                        {error && error.email &&
                            <span className="text-sm text-red-500 pt-1">{error.email.message}</span>
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-0.5 w-full md:w-auto">
                    <label htmlFor="message" className="text-gray-500">پیام شما</label>
                    <textarea
                        rows={6}
                        id="message"
                        className="p-2 rounded-md focus:outline-indigo-300 shadow-md shadow-indigo-300"
                        ref={messageRef}
                        placeholder="پیام خود را اینجا بنویسید..."
                    />
                    {error && error.message &&
                        <span className="text-sm text-red-500 pt-1">{error.message.message}</span>
                    }
                </div>
                <button type="submit" className="mt-2 p-2 rounded-md bg-indigo-500 text-white w-fit shadow-md shadow-indigo-300">ارسال پیام</button>
            </form>
            {success &&
                <span className="text-sm bg-green-700 text-white p-2 text-center rounded-md">{error}</span>
            }
            {
                faild &&
                < span className="text-sm bg-red-700 text-white p-2 text-center rounded-md">{error}</span>
            }
        </div >
    )
}

export default FormContact