import React, { useState } from 'react'
import { Link } from "react-router-dom"

// component
import { mdBar } from '../components/Bar'
import { TextAlignStart, UserIcon, ChevronRight, SettingsIcon, LogOutIcon, ChevronDown, MessagesSquareIcon } from "lucide-react"


const ProfilePage = () => {
    const [opMenu, setOpMenu] = useState(null)

    return (
        <div
            className='sm:w-80 min-h-screen relative overflow-x-hidden'
            data-theme="light">
            {/* bg */}
            <div
                className='ProfileBG sm:w-80 flex'>
                {/* blue circle */}
                <div
                    className='BlueCircle w-130 h-130 bg-blue-500 rounded-full absolute -top-40 -left-20'></div>
            </div>

            <main>
                <nav
                    className='absolute top-0 w-full h-15 flex items-center justify-between text-white pl-5 pr-5'>
                    {/* menu */}
                    <div>
                        <TextAlignStart />
                    </div>
                    {/* Edit */}
                    <Link>Edit</Link>

                </nav>

                {/* profile */}
                <article
                    className='w-full flex justify-center relative pt-60 z-1'>
                    {/* img */}
                    <section
                        className='w-50 h-50 bg-blue-900 rounded-full flex items-center justify-center relative'>
                        <h1
                            className='text-8xl text-white'>A</h1>
                        {/* online or offline */}
                        <div
                            className='absolute bottom-4 left-5 w-8 h-8 border-5 border-white rounded-full bg-green-600'></div>
                        {/* name */}
                        <div
                            className='absolute -bottom-20 flex flex-col items-center justify-center'>
                            <h1 className='text-3xl font-bold'>John </h1>
                            <p>Jsafkljaf@gmail.com</p>
                        </div>
                    </section>

                </article>
                {/* menu */}
                <article
                    className='relative h-auto pt-30'>
                    <span 
                    className='flex flex-col items-center justify-center pb-5'>
                        {/* my profile */}
                        <btn
                            onClick={() => { opMenu === "myProfile" ? setOpMenu(null) : setOpMenu("myProfile") }}
                            className={mdBar}>
                            <div
                                className='flex items-center justify-between w-full h-full'>
                                <p className='flex gap-3 text-xl'>
                                    <span> <UserIcon /> </span>
                                    <h3>My Profile</h3>
                                </p>
                                <span>
                                    {opMenu === "myProfile" ? <ChevronDown /> : <ChevronRight />}
                                </span>
                            </div>
                        </btn>
                        {/* MyProfileDetail */}
                        <div
                            className={`w-3/4 h-50 bg-base-300
                        ${opMenu === "myProfile" ? `` : `hidden`}`}></div>
                    </span>

                    {/* messages */}
                    <span
                    className='flex flex-col items-center justify-center pb-5'>
                        <btn
                            onClick={() => { opMenu === "message" ? setOpMenu(null) : setOpMenu("message") }}
                            className={mdBar}>
                            <div
                                className='flex items-center justify-between w-full h-full'>
                                <p className='flex gap-3 text-xl'>
                                    <span> <MessagesSquareIcon /> </span>
                                    <h3>Messages</h3>
                                </p>
                                <span>
                                    {opMenu === "message" ? <ChevronDown /> : <ChevronRight />}
                                </span>
                            </div>
                        </btn>
                        {/* messagesDetail */}
                        <div
                            className={`w-3/4 h-50 bg-base-300 mb-5
                        ${opMenu === "message" ? `` : `hidden`}`}></div>
                    </span>

                    {/* settings */}
                    <span
                    className='flex flex-col items-center justify-center pb-5'>
                        <btn
                            onClick={() => { opMenu === "setting" ? setOpMenu(null) : setOpMenu("setting") }}
                            className={mdBar}>
                            <div
                                className='flex items-center justify-between w-full h-full'>
                                <p className='flex gap-3 text-xl'>
                                    <span> <SettingsIcon /> </span>
                                    <h3>Settings</h3>
                                </p>
                                <span>
                                    {opMenu === "setting" ? <ChevronDown /> : <ChevronRight />}
                                </span>
                            </div>
                        </btn>{/* settingDetail */}
                        <div
                            className={`w-3/4 h-50 bg-base-300 mb-5
                        ${opMenu === "setting" ? `` : `hidden`}`}></div>
                    </span>
                </article>
            </main>

            <footer
                className='bg-base-300 w-full h-15'>
                <div
                    onClick={() => { alert("logOut") }}
                    className='flex items-center justify-center text-2xl font-bold pt-3'>
                    <span><LogOutIcon /> </span>
                    <h3>Log Out</h3>
                </div>
            </footer>
        </div>
    )
}

export default ProfilePage
