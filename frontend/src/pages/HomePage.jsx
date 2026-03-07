import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom"
import DataContext from '../context/DataContext'

// import icon here
import { MenuIcon, PencilIcon, CirclePlusIcon, UserIcon } from "lucide-react"

//import component here
import RepairLists from '../components/RepairLists'

const HomePage = () => {
  const repairLists = useContext(DataContext)

  const [opMenu, setOpMenu] = useState(false)

  return (
    <div
      className='sm:w-80 min-h-screen bg-base-300 relative'
      data-theme={"retro"}>
      {/* topNavBar */}
      <nav
        className='sm:w-full h-10 bg-orange-500 rounded-bl-full flex items-center justify-between
      pl-5 pr-5 sticky top-0 inset-shadow-2xs inset-shadow-orange-100 shadow-2xs shadow-black text-shadow-md z-99'>
        {/* LOGO */}
        <h1
          className='font-bold text-lg'
          style={{ "textShadow": "-1px 0 black, 1px 0 black, 0 -1px black, 0 1px black" }}>
          <span className='text-stone-300'>Phone </span>
          <span
            className='italic text-orange-500'>Service</span>
        </h1>

        <btn
          onClick={() => { opMenu === true ? setOpMenu(false) : setOpMenu(true) }}


          className='mr-1 text-black active:text-red-800'>
          <MenuIcon />
        </btn>
      </nav>

      {/* menu Bar */}
      <div
        className='text-white fixed z-80 right-5 top-50 '>
        {/* menu box */}
        <div
          className={`sm:w-10 h-80 bg-black rounded-2xl pt-4 pb-4 flex flex-col items-center gap-6 relative
        ${opMenu === true ? ` ` : `hidden`}`}>
          {/* navigate to profile page */}
          <Link
          to={"/profilePage"}>
            <UserIcon />
          </Link>
          {/* navigate to edit page */}
          <Link>
            <PencilIcon />
          </Link>
          {/* navigate to add data page */}
          <Link
            className='w-15 h-15 bg-black rounded-full flex items-center justify-center'>
            <CirclePlusIcon className='w-10 h-10' />
          </Link>
        </div>
      </div>

      {/* HomePage Main Content */}
      <main>
        <section>
          <RepairLists repairLists={repairLists} />
        </section>
      </main>

      <footer
        className='sm:w-80 h-80 bg-stone-800 mt-4 '>
          {/* logo */}
          <h1
          className='text-4xl text-center font-bold p-2'>
            <span className='text-stone-300'>Just</span>
            <span className='text-white'>'</span>
            <span className="text-orange-500 italic"
            style={{"textShadow": "-1px 0 white, 1px 0 white, 0 1px white, 0 -1px white"}}>Creative</span>
          </h1>
      </footer>
    </div>
  )
}

export default HomePage