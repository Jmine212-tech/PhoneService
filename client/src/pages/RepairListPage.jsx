import React, { useEffect, useState } from 'react'
import { repairLists } from '../config/data'
import api from '../config/axios'
import toast from 'react-hot-toast'

const RepairListPage = () => {
    const currentDate = repairLists.map(list => list._date)
    const [selectDate, setSelectDate] = useState(currentDate[0])
    const [searchById, setSearchById] = useState("")
    const [OpDetail, setOpDetail] = useState(false)

    const [ID, setID] = useState()
    const [name, setName] = useState()
    const [model, setModel] = useState()
    const [pw, setPw] = useState()
    const [phone, setPhone] = useState()
    const [fault, setFault] = useState()
    const [price, setPrice] = useState()
    const [status, setStatus] = useState()

    const handleDetail = ({ list }) => {
        setID(list.ID)
        setOpDetail(true)
        setName(list.name),
            setModel(list.model),
            setPw(list.password),
            setPhone(list.phone),
            setFault(list.fault),
            setPrice(list.price),
            setStatus(list.status)

    }

    const [DA, setDA] = useState([])
    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await api.get("/repairList")
                setDA(res.data)
            } catch (err) {
                console.log("-- error in fetch/RepairListPage --", err)
                toast.error("fail to fetch data!")
            }
        }
        fetch()
    }, [])

    // data - id, name, model, pw, phone, fault, price, status: ([finished, not finished], [taken, not taken])

    return (
        <div
            className='min-h-screen bg-base-300'>
            <div
                className='TopBar h-15 bg-linear-to-r from-orange-500 to-amber-500 flex items-center font-bold text-2xl
      pl-5 pr-5'
                style={{ "textShadow": "-1px 0 black, 1px 0 black, 0 1px black, 0 -1px black" }}>Repair List</div>

            <main>
                {/* A-1 repairList Table */}
                <article className='mt-5'>
                    <h1 className='text-center text-4xl font-bold'>RepairList</h1>
                    <div className='flex items-center gap-4 mt-2'>
                        <select className='btn' value={selectDate} onChange={e => setSelectDate(e.target.value)}>
                            {repairLists.map(prev => {
                                return <option option value={prev._date}>{prev._date} </option>
                            })}
                        </select>
                        <label>
                            <input type="text" className='input input-sm w-40' placeholder='Search by ID...'
                                value={searchById} onChange={e => setSearchById(e.target.value)} />
                        </label>
                    </div>
                    {/* Table */}
                    {repairLists.map(({ _date, data }) => {
                        return (
                            <section className={`Table border bg-base-100 relative mt-2 ${_date === selectDate ? ` ` : `hidden`}`}>
                                <h3 className='p-2 text-md font-semibold text-end'>{_date} </h3>
                                <div className='Th flex font-bold text-lg font-serif bg-base-300 pl-2 pr-2'>
                                    <span className='Td w-1/10'>no</span>
                                    <span className='Td w-4/10'>model</span>
                                    <span className='Td w-3/10'>fault</span>
                                    <span className='Td w-2/10'>ID</span>
                                </div>
                                <div className='TB h-80 overflow-y-scroll mt-2'>
                                    {data.map((list, index) => {
                                        return (
                                            <div className={`Tr flex font-bold text-sm p-2 border-l-8
                                                ${list.status === true ? `border-green-500` : `border-red-500`}
                                                ${index % 2 == 0 ? `bg-base-100` : `bg-base-300`}`}
                                                onClick={() => { handleDetail({ list }) }}>
                                                <span className='Td w-1/10'>{index} </span>
                                                <span className='Td w-4/10'>{list.model} </span>
                                                <span className='Td w-3/10'>{list.fault} </span>
                                                <span className='Td w-2/10'>202 </span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </section>
                        )
                    })}
                </article>

                {/* A-2 detail */}
                <article className={`fixed flex-col top-0 left-0 w-full h-screen flex items-center justify-center
                    ${OpDetail === true ? ` ` : `hidden`}`}>
                    <div className='absolute top-0 left-0 w-full h-screen bg-black -z-10 opacity-80'></div>

                    <section className='w-80 h-80 border bg-black rounded-box overflow-hidden'>
                        <nav className={`TopNavCard w-full h-10 bg-linear-to-r ${status === true ? `from-green-500 to-emerald-500` : `from-red-500 to-rose-500`}`}></nav>
                        <div className='p-4'>
                            <p>Id: 202 </p>
                            <p>name: {name} </p>
                            <p>model: {model} </p>
                            <p>pw: {pw} </p>
                            <p>phone: {phone} </p>
                            <p>fault: {fault} </p>
                            <p>price: {price} </p>
                        </div>
                    </section>
                    <button className='btn' onClick={() => { setOpDetail(false) }}>close</button>
                </article>

                {/* A-3 Income and expense list */}
                <article>
                    {/* finishedList */}
                    <section className='Table-finished border mt-5'>
                        <h1 className='text-center text-3xl'>Finished</h1>
                        <div className='Th flex bg-base-100 p-1 font-semibold'>
                            <span className='Td-no w-1/5'>no</span>
                            <span className='Td-model w-2/7'>model</span>
                            <span className='Td-fault w-2/7'>fault</span>
                            <span className='Td-price w-2/7'>price</span>
                        </div>

                        <ul className='h-30 mt-2'>
                            <li className='Tr flex pl-2 pr-2'>
                                <span className='Td-no w-1/5'>1</span>
                                <span className='Td-model w-2/7'>vivo</span>
                                <span className='Td-fault w-2/7'>LCD</span>
                                <span className='Td-price w-2/7'>200</span>
                            </li>
                            <li className='Tr flex pl-2 pr-2'>
                                <span className='Td-no w-1/5'>2</span>
                                <span className='Td-model w-2/7'>vivo</span>
                                <span className='Td-fault w-2/7'>LCD</span>
                                <span className='Td-price w-2/7'>200</span>
                            </li>
                        </ul>
                        <p>TotalIncome: 1000</p>
                    </section>
                    {/* ExpenseList */}
                    <section className='Table-expense border mt-5'>
                        <h1 className='text-center text-3xl'>Expense</h1>
                        <div className='Th flex bg-base-100 p-1 font-semibold'>
                            <span className='Td-no w-1/7'>no</span>
                            <span className='Td-model w-2/7'>model</span>
                            <span className='Td-model w-2/7'>item</span>
                            <span className='Td-price w-2/7'>price</span>
                        </div>

                        <ul className='h-30 mt-2'>
                            <li className='Tr flex pl-2 pr-2'>
                                <span className='Td-no w-1/7'>1</span>
                                <span className='Td-model w-2/7'>vivo</span>
                                <span className='Td-fault w-2/7'>LCD</span>
                                <span className='Td-price w-2/7'>200</span>
                            </li>
                            <li className='Tr flex pl-2 pr-2'>
                                <span className='Td-no w-1/7'>2</span>
                                <span className='Td-model w-2/7'>vivo</span>
                                <span className='Td-fault w-2/7'>LCD</span>
                                <span className='Td-price w-2/7'>200</span>
                            </li>
                        </ul>
                        <p>TotalExpense: 300</p>
                    </section>
                </article>

            </main>
        </div>
    )
}

export default RepairListPage
