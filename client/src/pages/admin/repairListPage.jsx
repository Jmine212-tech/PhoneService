import React, { useState } from "react";
import "cally";
// import repairLists from "../../config/data"

function RepairListPage() {
  const [searchById, setSearchById] = useState("");
  // const [selectDate, setSelectDate] = useState("");
  const [ OpAddList, setOpAddList ] = useState(false)

  return (
    <div className="w-90">
      <div className="TopBar w-full h-15 bg-linear-to-r from-orange-500 to-amber-500"></div>

      <main className="flex flex-col items-center mt-5 gap-3">
        {/* A-0 Daily Cash */}
        <article>
          <h1 className="text-4xl font-semibold text-center font-serif">Total</h1>
          <section className="flex text-center">
            <div className="w-1/2 p-2 bg-linear-to-b from-green-900 to-green-400">
              <h3 className="text-2xl font-semibold">Income</h3>
              <p>100000</p>
            </div>
            <div className="w-1/2 p-2 bg-linear-to-b from-red-900 to-red-400">
              <h3 className="text-2xl font-semibold">Expense</h3>
              <p>35000</p>
            </div>
          </section>
          <section className="p-2 bg-base-300">
            <h3 className="text-center text-2xl font-bold font-serif">
              <p>Result</p>
              <p>65000</p>
            </h3>
          </section>
        </article>

        {/* A-1 calender */}
        <article className="shadow-xl shadow-black">
          <calendar-date className="cally bg-base-100 border border-base-300 shadow-lg rounded-box">
            <svg
              aria-label="Previous"
              className="fill-current size-4"
              slot="previous"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
            </svg>
            <svg
              aria-label="Next"
              className="fill-current size-4"
              slot="next"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
            <calendar-month></calendar-month>
          </calendar-date>

          <section className="flex justify-center">
            <button className="btn w-full bg-linear-to-r from-indigo-800 to-sky-700">
              Go
            </button>
          </section>
        </article>
        {/* A-2 Table-repairList */}
        <article
          className="w-80 h-120 shadow-xl shadow-black inset-shadow-xs inset-shadow-white rounded-box
        p-2"
        >
          <h3 className="text-center text-2xl">RepairList</h3>
          <section className="Table-repairList w-full">
            <label className="flex justify-between gap-2 mt-4 mb-4">
              <button onClick={()=>{setOpAddList(true)}} className="BTN-AddList btn bg-base-300 w-1/3">
                create list
              </button>
              <input
                type="text"
                value={searchById}
                onChange={(e) => setSearchById(e.target.value)}
                className="SearchById input w-1/3"
                placeholder="SearchById..."
              />
              <span className="Date w-1/3 p-2 rounded-2xl bg-base-300 text-center">
                20.1.2020
              </span>
            </label>
            <div className="TH flex bg-base-300 pl-2 pr-2">
              <span className="Td w-1/7">no</span>
              <span className="Td w-2/7">model</span>
              <span className="Td w-2/7">fault</span>
              <span className="Td w-2/7">Id</span>
            </div>
            <div className="h-80 w-full border mt-3">
              <div className="Tr flex pl-2 pr-2">
                <span className="Td w-1/7">1</span>
                <span className="Td w-2/7">vivo</span>
                <span className="Td w-2/7">lcd</span>
                <span className="Td w-2/7">220</span>
              </div>
            </div>
          </section>
        </article>
        {/* A-3 Table-TotalExpense */}
        <article
          className="w-80 min-h-40 bg-base-100 shadow-xl shadow-black inset-shadow-xs inset-shadow-white
        rounded-box p-2"
        >
          <h3 className="text-center text-2xl font-semibold">Expense List</h3>
          <section className="Table-ExpenseList w-full mt-2">
            <div className="TH flex bg-base-300 pl-2 pr-2">
              <span className="Td w-1/8">no</span>
              <span className="Td w-3/8">model</span>
              <span className="Td w-2/8">item</span>
              <span className="Td w-2/8">price</span>
            </div>
            <div className="h-40 w-full border mt-3">
              <div className="Tr flex pl-2 pr-2">
                <span className="Td w-1/8">1</span>
                <span className="Td w-3/8">vivo</span>
                <span className="Td w-2/8">LCD</span>
                <span className="Td w-2/8">35000</span>
              </div>
            </div>
          </section>
          <section className="p-2">
            <h3 className="TotalExpense text-center text-2xl font-bold">
              TotalExpense: 35000
            </h3>
          </section>
        </article>
        {/* A-3 Table-Finished */}
        <article
          className="w-80 min-h-40 bg-base-100 shadow-xl shadow-black inset-shadow-xs inset-shadow-white
        rounded-box p-2"
        >
          <h3 className="text-center text-2xl font-semibold">Finished List</h3>
          <section className="Table-FinishedList w-full mt-2">
            <div className="TH flex bg-base-300 pl-2 pr-2">
              <span className="Td w-1/7">no</span>
              <span className="Td w-2/7">model</span>
              <span className="Td w-2/7">fault</span>
              <span className="Td w-2/7">price</span>
            </div>
            <div className="h-40 w-full border mt-3">
              <div className="Tr flex pl-2 pr-2">
                <span className="Td w-1/7">1</span>
                <span className="Td w-2/7">vivo</span>
                <span className="Td w-2/7">lcd</span>
                <span className="Td w-2/7">100000</span>
              </div>
            </div>
          </section>
          <section className="p-2">
            <h3 className="TotalIncome text-center text-2xl font-bold">
              TotalIncome: 100000
            </h3>
          </section>
        </article>
      </main>
    </div>
  );
}

export default RepairListPage;
