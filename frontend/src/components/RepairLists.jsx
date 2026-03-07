import React, { useState, useEffect } from 'react'
import toast from "react-hot-toast"

// import icon here
import { LockIcon, PhoneIcon, SmartphoneIcon, HandCoins, CheckIcon, CircleOffIcon } from "lucide-react"

const RepairLists = ({ repairLists }) => {


    //-------------------------------------------
    const [UserR, setUserR] = useState()
    const handleRepairList = async (list) => {
        try {
            setUserR(list)
        } catch (err) {
            console.error("--error in handleRepairList--", err)
            toast.error("Fail to handle Repair List!")
        }
    }
    //--------------------------------------------
    const finished = repairLists.filter((prev) => { return prev.status === true })
    const notFinish = repairLists.filter((prev) => { return prev.status === false })
    const totalIncome = finished.reduce((sum, item) => { return sum + item.price }, 0)

    const [viewList, setViewList] = useState("all")
    const [userList, setUserList] = useState([])
    useEffect(() => {
        const fetch = async () => {
            try {
                if (viewList === "all") {
                    setUserList(repairLists)
                } else if (viewList === "finished") {
                    setUserList(finished)
                } else {
                    setUserList(notFinish)
                }
            } catch (err) {
                console.error("--error in fetch/ RepairList--", err)
                toast.error("fail to fetch repairList")
            }
        }
        fetch()
    }, [viewList])

    const [search, setSearch] = useState("")
    const searchRepairList = userList.filter((prev) => {
        return (
            prev.name.toLowerCase().includes(search.toLowerCase()) || prev.model.toLowerCase().includes(search.toLowerCase())
        )
    })
    //--------------------------------------------
    const [opDetail, setOpDetail] = useState(false)

    //---------------------------------------------
    return (
        <div
            className='RepairTable sm:w-80 border-5 p-1 mt-4 rounded-box bg-base-100'>
            <section
                className='flex p-2 gap-5'>
                <h1
                    className='text-2xl font-bold'>List</h1>
                <label>
                    <input type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder='Search'
                        className='input' />
                </label>
                {/* Date */}
                <select
                    className='select w-30'>
                    <option value="">20.5.2001</option>
                </select>
            </section>

            {/* THeader */}
            <div
                className='w-full h-10 text-lg font-bold bg-orange-500 flex justify-between items-center pl-2 pr-2
                border-b-3 text-black'>
                <span className='w-1/7'>no</span>
                <span className='w-2/7'>name</span>
                <span className='w-2/7'>model</span>
                <span className='w-2/7'>fault</span>
            </div>

            {/* TBody */}
            <main
                className='h-120 overflow-y-scroll relative '>
                {
                    searchRepairList.map((list, index) => {
                        return (
                            <div
                                onClick={() => { handleRepairList(list), setOpDetail(true) }}
                                className={`flex justify-start items-center gap-4 h-15 active:bg-orange-500 pl-2 pr-2 border-l-10 border-b
                        ${list.status === true ? `border-l-green-500 ` : `border-l-red-500`}
                        ${index % 2 == 0 ? ` ` : `bg-base-300`}`}>
                                <span className='w-1/7'>{index} </span>
                                <span className='w-2/7'>{list.name} </span>
                                <span className='w-2/7'>{list.model} </span>
                                <span className='w-2/7'>{list.fault} </span>
                            </div>
                        )
                    })
                }
            </main>


            {/* TFooter */}
            <footer
                className=''>
                {/* ViewList */}
                <label
                    className='m-2 flex gap-3 justify-end'>
                    {/* Total Income */}
                    <h3
                        className='font-bold'>Total Income: <span className='text-black text-lg'>{totalIncome}</span>  </h3>
                    {/* all */}
                    <input type="checkbox"
                        checked={viewList === "all"}
                        value="all"
                        onChange={e => { setViewList(e.target.value) }}
                        className='checkbox bg-stone-400' />
                    {/* Finished  */}
                    <input type="checkbox"
                        checked={viewList === "finished"}
                        value="finished"
                        onChange={e => { setViewList(e.target.value) }}
                        className='checkbox bg-green-500' />
                    {/* not finish */}
                    <input type="checkbox"
                        checked={viewList === "notFinish"}
                        value="notFinish"
                        onChange={e => { setViewList(e.target.value) }}
                        className='checkbox bg-red-500' />
                </label>
            </footer>

            {/* // Repair Detail  */}
            {UserR ?
                <article
                    className={`absolute top-0 left-0 z-99 w-full h-screen border-10 border-black overflow-hidden
            ${opDetail === true ? ` ` : `hidden`}`}>
                    {/* bg */}
                    <div
                        className={`w-full h-full absolute top-0 left-0 opacity-95
                ${UserR.status === true ? `bg-green-900` : `bg-red-900`}`}></div>

                    <section
                        className='absolute top-0 left-0 z-99 p-4 w-full h-full'>
                        {/* close btn */}
                        <button
                            onClick={() => { setOpDetail(false) }}
                            className='btn bg-black inset-shadow-xs text-white inset-shadow-indigo-400 shadow-xs shadow-black
                    rounded-2xl'>Close</button>
                        {/* Detail text */}
                        <main
                            className='text-stone-200 text-lg flex flex-col justify-center items-center gap-5'>
                            {/* id */}
                            <div className='absolute top-2 right-4 text-2xl font-bold italic border p-2 rounded-box
                            shadow-md shadow-black inset-shadow-xs inset-shadow-black'>
                                <p>ID: {UserR.id} </p>
                            </div>
                            {/* name */}
                            <div
                                className='flex items-center'>
                                <h1
                                    className="text-4xl text-center font-bold italic p-2"
                                    style={{ 'textShadow': '-2px 0 black, 2px 0 black, 0 -2px black, 0 2px black' }}>{UserR.name} </h1>
                                {UserR.status === true ? <CheckIcon /> : <CircleOffIcon />}
                            </div>
                            {/* img */}
                            <div
                                className='w-30 h-30 border-2 rounded-box'>
                                {/* img bg */}
                                <span
                                    className='w-full h-full bg-stone-500 opacity-70'></span>
                            </div>
                            {/* model */}
                            <p
                                className='flex items-center p-2 gap-2'>
                                <SmartphoneIcon /> <span className='text-2xl font-semibold'>{UserR.model} </span>
                            </p>
                            {/* Password */}
                            <p
                                className='flex items-center gap-2'>
                                <span><LockIcon /> </span> {UserR.pw}
                            </p>
                            {/* Phone number */}
                            <p
                                className='flex items-center gap-2'>
                                <span><PhoneIcon /> </span> {UserR.phone}
                            </p>
                            {/* Fault */}
                            <p>Fault: {UserR.fault} </p>
                            {/* Price */}
                            <p
                                className='flex items-center gap-2'>
                                <span><HandCoins /> </span> {UserR.price}
                            </p>
                        </main>
                    </section>
                </article>
                :
                <div className='hidden'>
                    <h1>User not Found</h1>
                </div>}
        </div>
    )
    
}

export default RepairLists
