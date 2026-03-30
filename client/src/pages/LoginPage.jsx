import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast"

function LoginPage() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState(false);

  const handleSubmit = async ()=>{
    if(mail === "" || password === "") return toast.error("complete Date")
    try{
      toast.success("Login Success")
      setMail(""), setPassword("")
    } catch(error){
      console.log("-- error in handleSubmit --", error)
      toast.error("fail to logIn")
    }
  }

  return (
    <div className="w-90 h-screen">
      <main className="w-full h-full flex flex-col items-center justify-center">
        <article
          className="w-80 h-80 shadow-xl shadow-black inset-shadow-xs inset-shadow-white
                rounded-box relative"
        >
          <div
            className="BG w-full h-full absolute top-0 left-0 rounded-box opacity-60 -z-10
          bg-linear-to-b from-black to-base-200"
          ></div>
          {/* authentication Form */}
          <form onSubmit={e=>e.preventDefault()} className="p-4 flex flex-col gap-2">
            <h1 className="text-center text-4xl font-bold">LogIn</h1>
            <label>
              Mail
              <input
                type="text"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                className="input"
                placeholder="request..."
              />
            </label>
            <label>
              Password
              {view === true ? (
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input"
                  placeholder="request..."
                />
              ) : (
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input"
                  placeholder="request..."
                />
              )}
              <span className="flex gap-2">
                view
                <input
                  type="checkbox"
                  checked={view === true}
                  onChange={() =>
                    view === true ? setView(false) : setView(true)
                  }
                />
              </span>
            </label>
            <div className="flex justify-center">
              <button
                onClick={()=>{handleSubmit()}}
                type="submit"
                className="btn bg-linear-to-r from-indigo-500 to-sky-300 rounded-box
              border-2 border-black"
              >
                Login
              </button>
            </div>
          </form>

          <section className="flex justify-between pl-5 pr-5">
            <Link className="">-register-</Link>
            <Link to={"/home"}>Skip</Link>
          </section>
        </article>
      </main>
    </div>
  );
}

export default LoginPage;
