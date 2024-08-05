'use client'
import Image from "next/image"
import { useEffect } from "react";
export default function Hero() {
    useEffect(() => {
        localStorage.removeItem('email');
    }, []);
    return (
        <div className="flex flex-wrap">
            <div className="w-full mb-10 sm:w-8/12">
                <div className="container h-full mx-auto sm:p-10">
                    <nav className="flex items-center justify-between px-4">
                        <div className="flex gap-3 text-4xl font-bold">
                            <Image src="/media/notas.png" alt="" width={50} height={30} />
                            Post Page<span className="text-yellow-200">.</span>
                        </div>
                    </nav>
                    <header className="container items-center h-full px-4 mt-10 lg:flex lg:mt-0">
                        <div className="w-full">
                            <h1 className="text-4xl font-bold lg:text-6xl">Here you will be <span className="text-yellow-200">able </span> to give your opinions</h1>
                            <div className="w-20 h-2 my-4 bg-yellow-200"></div>
                            <p className="mb-10 text-xl">Welcome to you best social media <span className="text-yellow-200">post</span> talk, <span className="text-yellow-200">share</span>, be free.</p>
                            <div className="flex gap-5">
                                <button className="px-4 py-2 text-xl font-medium text-white bg-yellow-400    rounded shadow hover:bg-yellow-600 hover:text-black" onClick={() => { window.location.href = "/login" }}>Login</button>
                                <button className="px-4 py-2 text-xl font-medium text-white bg-yellow-400 rounded shadow hover:bg-yellow-600 hover:text-black"  onClick={() => { window.location.href = "/register" }}>Register</button>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
            <img src="media/post.jpg" alt="Leafs" className="object-cover w-full h-48 sm:h-screen sm:w-4/12" />
        </div>
    )
}