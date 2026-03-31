import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function LoginPage() {
  const [ hasAcc, setHasAcc ] = useState(true)
  //Login
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState(false);

  const handleSubmit = async () => {
    if (mail === "" || password === "") return toast.error("complete Date");
    try {
      toast.success("Login Success");
      (setMail(""), setPassword(""));
    } catch (error) {
      console.log("-- error in handleSubmit --", error);
      toast.error("fail to logIn");
    }
  };

  //register
  const [registerMail, setRegisterMail] = useState("");
  const [registerPw, setRegisterPw] = useState("");
  const [registerComFirmPw, setRegisterConFirmPw] = useState("");
  
  const handleSaveRegister = async ()=>{
    if ( registerMail === "" || registerPw === ""){
      return toast.error("complete Data")
    } else if( registerPw !== registerComFirmPw){
      return toast.error("Password and Confirm Password are not same!")
    }
    try{
      toast.success("registered successfully")
    }catch(error){
      console.error("--error in handleSaveRegister-- ", error)
    }
  }
  
  return (
    <div className="w-90 h-screen flex items-center justify-center">
      <main className={`w-full h-full flex flex-col items-center justify-center ${ hasAcc === true ? ``:`hidden`}`}>
        <article
          className="w-80 h-80 shadow-xl shadow-black inset-shadow-xs inset-shadow-white
                rounded-box relative"
        >
          <div
            className="BG w-full h-full absolute top-0 left-0 rounded-box opacity-60 -z-10
          bg-linear-to-b from-black to-base-200"
          ></div>
          {/* login Form */}
          <section className="p-4 flex flex-col gap-2">
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
                onClick={() => {
                  handleSubmit();
                }}
                className="btn bg-linear-to-r from-indigo-500 to-sky-300 rounded-box
              border-2 border-black"
              >
                Login
              </button>
            </div>
          </section>

          <section className="flex justify-between pl-5 pr-5">
            <p onClick={()=>{setHasAcc(false)}}>-register-</p>
            <Link to={"/home"}>Skip</Link>
          </section>
        </article>
      </main>
      {/* register */}
      <main className={`w-80 h-80 shadow-2xl shadow-black inset-shadow-xs inset-shadow-white p-4
      bg-linear-to-b from-black to-base-200 rounded-box ${ hasAcc === true ? `hidden`:``}`}>
        <h1 className="text-center text-4xl font-semibold">Register</h1>
        <article>
          <section className="">
            {/* mail */}
            <label className="text-md">
              Mail
              <input
                type="text"
                value={registerMail}
                onChange={(e) => setRegisterMail(e.target.value)}
                className="input"
              />
            </label>
            {/* password */}
            <label className="text-md">
              password
              <input
                type="text"
                value={registerPw}
                onChange={(e) => setRegisterPw(e.target.value)}
                className="input"
              />
            </label>
            {/* confirm Password */}
            <label className="text-md">
              confirm Password
              <input
                type="text"
                value={registerComFirmPw}
                onChange={(e) => setRegisterConFirmPw(e.target.value)}
                className="input"
              />
            </label>
          </section>
          <section className="flex justify-center mt-2">
            <button onClick={()=>{handleSaveRegister()}} className="btn bg-indigo-500">Confirm</button>
          </section>
          <section>
            <p onClick={()=>setHasAcc(true)}>back</p>
          </section>
        </article>
      </main>
    </div>
  );
}

export default LoginPage;
