import React, { useState } from 'react'
import {BsArrowLeftShort} from 'react-icons/bs'
import {RiDashboardFill} from 'react-icons/ri'
import { GoSignOut } from "react-icons/go";
import { CgHello } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'


export default function Sidebar() {
    const [open, setOpen] = useState(true)
    const [openTopNav, setOpenTopNav] = useState(false)
    const menu = [
        {title : "Tracker"},
        {title : "Signout"}
    ]
    const {currentUser} = useSelector(state => state.user);

    
  return (
    <>
        
        <div className= {`md:hidden flex w-full justify-between p-3 text-center items-center ${openTopNav && 'bg-[#FEE8CC]'} duration-300 mb-2`}> 
            <GiHamburgerMenu size={'32'} onClick={() => setOpenTopNav(!openTopNav)} className={`hover:cursor-pointer ${!openTopNav && "rotate-[360deg]"} duration-300`} />
            <h1 className={`origin-left font-medium text-xl ${!open && "scale-0"} translate-y-0 duration-300`}>Welcome <span className='text-[#FE8C00] hover:underline'>{currentUser.username}</span></h1>
            <button className={`w-24 h-12 rounded-xl text-white bg-[#FE8C00] hover:bg-[#CB7000]`}>Sign Out</button>
        </div>
        <div className={`md:hidden w-full bg-[#FEE8CC] ${!openTopNav && 'hidden h-0'} duration-300`}>
            <ul>
                <Link to={'/'}>
                    <li className={`text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#FE8C00] rounded-md mt-2 ${menu.title === 'Tracker' && "bg-[#FE8C00]"} hover:bg-[#CBB9A3] hover:cursor-pointer`} >
                        <span className={` font-medium flex-1 text-md ${!open && "hidden"} hover:cursor-pointer p-1`}>Home</span>
                    </li>
                </Link>
                <li className={`text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#FE8C00] rounded-md mt-2 ${menu.title === 'Tracker' && "bg-[#FE8C00]"} hover:bg-[#CBB9A3] hover:cursor-pointer`} >
                    <span className={` font-medium flex-1 text-md ${!open && "hidden"} hover:cursor-pointer p-1`}>Sign Out</span>
                </li>
                
            </ul>
        </div>
        <div className={`hidden md:block relative md:h-screen p-5 pt-8 ${open ? "w-[27%]" : "md:w-[10%] lg:w-[7%]"} duration-300 bg-[#FEE8CC]`}>
            <BsArrowLeftShort className={`bg-white text-3xl rounded-full absolute -right-3 top-9 border cursor-pointer ${!open && "rotate-180"}
            `} onClick={() => setOpen(!open)} />
            
            <div className={'inline-flex'}>
                <CgHello className={`text-[#FE8C00] text-3xl rounded cursor-pointer block float-left mr-2 ${!open && "rotate-[360deg]"} duration-300`} />
                <h1 className={`origin-left font-medium text-xl ${!open && "scale-0"} duration-300`}>Welcome <span className='text-[#FE8C00] font-bold'>{currentUser.username}</span></h1>
            </div>

            <ul className='pt-5'>
                {menu.map((menu, index) => (
                    <li key={index} className={`text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#FE8C00] rounded-md mt-2 ${menu.title === 'Tracker' && "bg-[#FE8C00]"} hover:bg-[#CBB9A3] hover:cursor-pointer`} >
                        {(menu.title === "Tracker") && <span className='text-2xl block float-left'>
                            <RiDashboardFill />
                        </span>}
                        {(menu.title === "Signout") && <span className=' text-2xl block float-left'>
                            <GoSignOut />
                        </span>}
                        <span className={` text-base font-medium flex-1 ${!open && "hidden"}`}>{menu.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}
