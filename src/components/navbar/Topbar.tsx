'use client'
// import { useState } from 'react'
import { BsMagnet, BsMoon } from "react-icons/bs";
import { FaRecycle, FaUser } from "react-icons/fa";
// import { GiPulse } from "react-icons/gi";
import { MdShare } from 'react-icons/md';

const Topbar = () => {
    const isLogin = false
  return (
    <div className="top___Bar flex justify-between px-4 py-2 bg-white">
        <div className="info flex items-center text-xl">
            <p>SG & Aylana</p>
        </div>
        <div className="details flex gap-6.5 items-center">
            <div className="icons flex gap-2.5 text-emerald-700 text-xl cursor-pointer">
                <span><BsMoon/></span>
                <span><FaRecycle/></span>
                <span><FaUser/></span>
                <span><MdShare/></span>
            </div>
            <div className="auth text-cyan-200 text-xl cursor-pointer">
                {isLogin ? <span><BsMagnet/></span> : <button className="py-0.5 px-2.5 border-none rounded-lg text-cyan-200 bg-emerald-700">Login</button>}
            </div>
        </div>
    </div>
  )
}

export default Topbar
