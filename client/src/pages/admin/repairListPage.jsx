import React, { useState, useEffect } from "react";
import "cally";
import api from "../../config/axios";
import toast from "react-hot-toast";

function RepairListPage() {
  const [searchById, setSearchById] = useState("");
  const [OpAddForm, setOpAddForm] = useState(false);
  const [OpExpenseForm, setOpExpenseForm] = useState(false);

  //add repair list form - request: {name, model, password, phone, fault, price, note};
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [fault, setFault] = useState("");
  const [price, setPrice] = useState(0);
  const [note, setNote] = useState("");

  const handleSaveRepairList = async () => {
    if (model === "" || password === "" || phone === "" || fault === "")
      return toast.error("complete requested");
    try {
      await api.post("/repairList/create", {
        name,
        model,
        password,
        phone,
        fault,
        price,
        note,
      });
      toast.success("Save...");
      (setName(""),
        setModel(""),
        setPassword(""),
        setPhone(""),
        setFault(""),
        setPrice(0),
        setNote(""));
      setOpAddForm(false);
    } catch (error) {
      console.error("--error in handleSaveRepairList--", error);
      toast.error("Fail to Save...");
    }
  };

  // Expense List form - request: phoneModel, item, ItemPrice
  const [phoneModel, setPhoneModel] = useState("");
  const [item, setItem] = useState("");
  const [itemPrice, setItemPrice] = useState(0);

  const handleSaveExpenseForm = async () => {
    if (phoneModel === "" || item === "" || itemPrice == 0)
      return toast.error("Complete requested");
    try {
      toast.success("Save");
      setPhoneModel("");
      setItem("");
      setItemPrice(0);
      setOpExpenseForm(false);
    } catch (error) {
      console.error("--error in handleSaveExpenseForm--", error);
      toast.error("Fail to save!");
    }
  };

  const [repairLists, setRepairLists] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await api.get("/repairList");
        setRepairLists(res.data);
      } catch (error) {
        console.error("--Error in fetch/repairList--", error);
      }
    };
    fetch();
  }, []);

  return (
    <div className="w-90">
      <div className="TopBar w-full h-15 bg-linear-to-r from-orange-500 to-amber-500"></div>

      <main className="flex flex-col items-center mt-5 gap-3">
        {/* A-0 Daily Cash */}
        <article>
          <h1 className="text-4xl font-semibold text-center font-serif">
            Total
          </h1>
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
              <button
                onClick={() => {
                  setOpAddForm(true);
                }}
                className="BTN-AddList btn bg-base-300 w-1/3"
              >
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
            <div className="h-80 w-full border mt-3 overflow-y-scroll overflow-x-hidden">
              {repairLists.map((repairList, index) => {
                return (
                  <div
                    className={`Tr min-h-15 flex items-center pl-2 pr-2 ${index % 2 == 0 ? `bg-base-100` : `bg-base-300`}`}
                  >
                    <span className="Td w-1/7">{index} </span>
                    <span className="Td w-2/7">{repairList.model} </span>
                    <span className="Td w-2/7">{repairList.fault} </span>
                    <span className="Td w-2/7">{repairList._id} </span>
                  </div>
                );
              })}
            </div>
          </section>
        </article>
        {/* A-3 Table-TotalExpense */}
        <article
          className="w-80 min-h-40 bg-base-100 shadow-xl shadow-black inset-shadow-xs inset-shadow-white
        rounded-box p-2"
        >
          <h3 className="text-center text-2xl font-semibold">Expense List</h3>
          <section>
            <button
              onClick={() => {
                setOpExpenseForm(true);
              }}
              className="btn btn-sm bg-indigo-500"
            >
              addList
            </button>
          </section>
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
                    <span className="Td w-3/8">vivo v9</span>
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
            <div className="h-40 w-full border mt-3 overflow-y-scroll">
              {repairLists.map((repairList, index) => {
                return (
                  <div
                    className={`Tr min-h-15 flex items-center pl-2 pr-2 
                      ${repairList.status === true ? ` ` : `hidden`}
                      ${index % 2 == 0 ? `bg-base-100` : `bg-base-300`}`}
                  >
                    <span className="Td w-1/7">{index} </span>
                    <span className="Td w-2/7">{repairList.model} </span>
                    <span className="Td w-2/7">{repairList.fault} </span>
                    <span className="Td w-2/7">{repairList.price} </span>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="p-2">
            <h3 className="TotalIncome text-center text-2xl font-bold">
              TotalIncome: 3000000
            </h3>
          </section>
        </article>
      </main>

      <div
        className={`addRepairListForm flex items-center justify-center border-5 w-90 h-screen fixed top-0 z-99
        ${OpAddForm === true ? ` ` : `hidden`}`}
      >
        <div className="BG absolute top-0 bg-black w-full h-full opacity-90 -z-1"></div>
        <main
          className="Form w-80 h-3/4 shadow-xl shadow-black inset-shadow-xs inset-shadow-white
              bg-base-300 rounded-box p-2 rela"
        >
          <section>
            <h1 className="text-center text-2xl font-semibold">
              Add Repair List
            </h1>
            <div className="flex flex-col gap-2 mt-2">
              {/* name */}
              <label className="flex gap-2">
                <span className="w-1/3 text-center font-semibold">name</span>
                <input
                  type="text"
                  className="input input-sm w-2/3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              {/* model */}
              <label className="flex gap-2">
                <span className="w-1/3 text-center font-semibold">model</span>
                <input
                  type="text"
                  placeholder="request..."
                  className="input input-sm w-2/3"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </label>
              {/* password */}
              <label className="flex gap-2">
                <span className="w-1/3 text-center font-semibold">
                  password
                </span>
                <input
                  type="text"
                  placeholder="request..."
                  className="input input-sm w-2/3"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              {/* phone */}
              <label className="flex gap-2">
                <span className="w-1/3 text-center font-semibold">phone</span>
                <input
                  type="text"
                  placeholder="request..."
                  className="input input-sm w-2/3"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
              {/* fault */}
              <label className="flex gap-2">
                <span className="w-1/3 text-center font-semibold">fault</span>
                <input
                  type="text"
                  placeholder="request..."
                  className="input input-sm w-2/3"
                  value={fault}
                  onChange={(e) => setFault(e.target.value)}
                />
              </label>
              {/* price */}
              <label className="flex gap-2">
                <span className="w-1/3 text-center font-semibold">price</span>
                <input
                  type="number"
                  className="input input-sm w-2/3"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </label>
              {/* note */}
              <label className="flex gap-2">
                <span className="w-1/3 text-center font-semibold">note</span>
                <input
                  type="textarea"
                  className="textarea textarea-sm w-2/3"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </label>
              {/* name, model, password, phone, fault, price, note */}
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    handleSaveRepairList();
                  }}
                  className="btn bg-indigo-900"
                >
                  Save
                </button>
              </div>
            </div>
          </section>
          <section>
            <p
              onClick={() => {
                setOpAddForm(false);
              }}
            >
              Back
            </p>
          </section>
        </main>
      </div>

      <div
        className={`AddExpenseForm w-full h-screen border-5 flex items-center justify-center fixed top-0 z-99
        ${OpExpenseForm === true ? ` ` : `hidden`}`}
      >
        <div className="BG w-full h-full absolute top-0 bg-black opacity-90 -z-99"></div>
        <main className="w-80 h-80 bg-base-300 rounded-box p-2 relative">
          <h1 className="text-center text-2xl font-bold">Expense</h1>
          <section className="form mt-2 flex flex-col gap-2">
            {/* Phone Model */}
            <label className="flex">
              <span className="w-1/3 text-center">model</span>
              <input
                type="text"
                placeholder="request..."
                value={phoneModel}
                onChange={(e) => setPhoneModel(e.target.value)}
                className="input input-sm w-2/3"
              />
            </label>
            {/* item */}
            <label className="flex">
              <span className="w-1/3 text-center">item</span>
              <input
                type="text"
                placeholder="request..."
                value={item}
                onChange={(e) => setItem(e.target.value)}
                className="input input-sm w-2/3"
              />
            </label>
            {/* item Price */}
            <label className="flex">
              <span className="w-1/3 text-center">price</span>
              <input
                type="text"
                placeholder="request..."
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
                className="input input-sm w-2/3"
              />
            </label>
            <div className="SaveBtn flex justify-center">
              <button
                onClick={() => handleSaveExpenseForm()}
                className="btn bg-indigo-500"
              >
                Save
              </button>
            </div>
          </section>
          <section className="absolute bottom-2">
            <p onClick={() => setOpExpenseForm(false)}>Back</p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default RepairListPage;
