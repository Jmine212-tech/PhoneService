import React, { useState } from 'react'

import AndroidLogo from "../assets/androidLogo.png"

const AndroidProductPage = () => {
  const [search, setSearch] = useState("")

  return (
    <div
      className='w-90 min-h-screen bg-base-300'
      data-theme="dark">
      <nav
        className='w-full h-15 flex items-center justify-between pl-5 pr-10 text-xl font-bold font-serif
      rounded-br-full bg-linear-to-r from-orange-500 to-amber-500'>
        <label>
          <input type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className='input rounded-2xl bg-black' />
        </label>
        <h1>Android</h1>
      </nav>

      <main
        className='mt-5'>
        {/* A-1 */}
        <article
          className='flex flex-col items-center relative z-1 mt-10'>
          <section
            className='AndroidLogo w-40 h-40 bg-linear-to-b from-black to-base-300 border rounded-box 
            rotate-45 shadow-xl shadow-black'>
            <div
              className='w-full h-full -rotate-45'
              style={{
                "backgroundImage": `url(${AndroidLogo})`,
                "backgroundSize": "cover",
                "backgroundPosition": "center"
              }}></div>
          </section>

          <section
            className="LogoBox mt-5 flex flex-col items-center">
            <ul
              className='grid grid-flow-row grid-cols-3 gap-5 mt-10'>
              <li
                className='w-15 h-15 border bg-linear-to-r from-black to-base-100 rounded-box'></li>
              <li
                className='w-15 h-15 border bg-linear-to-r from-black to-base-100 rounded-box'></li>
              <li
                className='w-15 h-15 border bg-linear-to-r from-black to-base-100 rounded-box'></li>
            </ul>
          </section>

          <section
            className='w-9/10 h-80 absolute -z-20 bg-base-100 translate-y-20 rounded-box overflow-hidden
                inset-shadow-xs inset-shadow-white shadow-2xl shadow-black'>
            <div
              className='w-100 h-100 rounded-full flex items-center justify-center translate-10
                  bg-linear-to-b from-orange-500 to-amber-500'>
              <div
                className='
                    w-8/10 h-8/10 bg-base-100 absolute rounded-full'></div>
            </div>
          </section>
        </article>
      </main>
    </div>
  )
}

export default AndroidProductPage
