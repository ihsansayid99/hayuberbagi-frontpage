import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
//Components
import Sidebar from './Sidebar'

const Header = () => {
    // const [toggle, setToggle] = useState(() => false);

    // const toggleOpen = () => {
    //     setToggle(!toggle)
    // }

    useEffect(() => {
        document.getElementById("mySidebar").className = "fadeable"
    }, [])

    function sidebarOpen() {
        document.getElementById("mySidebar").style.width = "100%";
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById('mySidebar').className += ' fade-in';
        document.getElementById("mySidebar").classList.remove("fade-out");

    }
    function sidebarClose() {
        document.getElementById('mySidebar').className += ' fade-out';
        document.getElementById("mySidebar").classList.remove("fade-in");
    }

    const router = useRouter()
    const linkCTA = router.pathname.indexOf("/login") > -1 ? `${process.env.NEXT_PUBLIC_DONATUR_URL}/register` : `${process.env.NEXT_PUBLIC_DONATUR_URL}/login`
    return (
        <>
            <Sidebar sidebarClose={sidebarClose} mySidebar="mySidebar" />
            <header className="flex justify-between items-center container mx-auto z-10 relative">
                <div className="">
                    <img src="/images/logosmall.png" style={{ height: 57 }} alt="logo hayuBerbagi" />
                </div>
                <ul className="flex items-center">
                    <li>
                        <a target="_blank"
                            rel="noopener noreferrer" href={linkCTA}
                            className="bg-orange-400 hover:bg-orange-500
                        transition-all duration-200 text-white hover:text-black px-10 py-2 text-lg font-medium ml-6 ">Donasi</a>
                    </li>
                    <li>
                        <a href="/relawan"
                            className=" border-2 border-orange-400 bg-transparent hover:bg-orange-500
                        transition-all duration-200 text-white hover:text-black px-10 py-2 text-lg font-medium ml-6 mr-10 ">Relawan</a>
                    </li>
                    <li>
                        <button onClick={sidebarOpen} className="border-2 border-orange-400 bg-transparent text-lg font-medium px-4 py-2 text-white
                    hover:text-black hover:bg-orange-500 transition-all duration-200 focus:outline-none">☰</button>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default Header;
