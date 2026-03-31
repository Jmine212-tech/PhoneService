import React from 'react'
import {Link} from "react-router-dom"

import { LayoutDashboardIcon, SettingsIcon, ClipboardCopy } from "lucide-react"

const adminPage = () => {   
    const menuLists = [
        {menu: "dashboard", icon: <LayoutDashboardIcon/>, path: "Dashboard" },
        {menu: "setting", icon: <SettingsIcon/> },
        {menu: "repairList", icon: <ClipboardCopy />, path: "RepairList" },
    ]

  return (
    <div
    className='min-h-screen w-90'>
      <nav
      className='TopNavBar w-full h-15 bg-linear-to-r from-orange-500 to-amber-500'></nav>

      <main
      className='mt-5 p-4'>
        <ul
        className='grid grid-flow-row grid-cols-3'>
            {menuLists.map(list => {
                return(
                    <li
                    className='flex flex-col items-center justify-center'>
                        <Link
                        to={`/${list.path}`}
                        className='w-20 h-20 border flex items-center justify-center active:scale-105 rounded-box
                        bg-linear-to-r from-orange-600 to-amber-800 shadow-lg shadow-black'>
                            {list.icon} 
                        </Link>
                        <p>{list.menu} </p>
                    </li>
                )
            })}
        </ul>
      </main>
    </div>
  )
}

export default adminPage
