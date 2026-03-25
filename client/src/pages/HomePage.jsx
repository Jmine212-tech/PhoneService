import React from 'react'
import { Link } from 'react-router-dom'

// icon
import {PencilIcon} from "lucide-react"

import IphoneLogo from "../assets/iphoneLogo.jpg"
import AndroidLogo from "../assets/androidLogo.png"

const HomePage = () => {

  return (
    <div
      className='w-90 sm:w-180 lg:w-full min-h-screen overflow-x-hidden'
      data-theme="dark" >
      <nav
        className='w-full h-15 bg-linear-to-r from-orange-500 to-amber-500 relative z-99'></nav>

      <main
        className='relative z-1'>
        {/* A-1 */}
        <article
          className='Intro pt-5 bg-linear-to-b from-black'>
          <div
            className='Intro-bg h-40 absolute top-0 left-0 -z-10'></div>

          <section
            className='Intro-text text-center font-serif'>
            <h1 className='text-4xl'>Welcome</h1>
            <p className='text-3xl font-semibold p-2 bg-black rounded-tl-full rounded-br-full ml-4 mr-4'>ICrazy</p>
          </section>

          <section>
            <div className='flex gap-4 justify-center mt-4 mb-4'>
              <span className='w-8 h-8 bg-base-100 rounded-full inset-shadow-2xs inset-shadow-black'></span>
              <span className='w-8 h-8 bg-base-100 rounded-full inset-shadow-2xs inset-shadow-black'></span>
              <span className='w-8 h-8 bg-base-100 rounded-full inset-shadow-2xs inset-shadow-black'></span>
            </div>
          </section>

          <section
            className='border-b'>
            <div
              className='bg-base-300 h-5 blur-md'></div>
          </section>
        </article>

        {/* A-2 */}
        <article
          className='B-light pt-15 pb-15 relative'>
          <section
            className='w-full h-full absolute -z-20 flex items-center justify-center -translate-y-10'>
            <div
              className='BG w-full h-full bg-black -translate-y-5'></div>
            <div
              className='w-90 h-90 bg-white rounded-full absolute blur-3xl opacity-40'></div>
            <div
              className='w-30 h-30 bg-black rounded-full absolute blur-xl'></div>
          </section>

          <section
            className='IphoneLogo relative w-full flex items-center'>
            <div
              className='ILogoBg w-50 h-50 bg-linear-to-l from-black to-base-300 -z-10 rotate-45
              flex items-center justify-center border'>
              <div
                className='w-40 h-40 -rotate-45'
                style={{
                  "backgroundImage": `url(${IphoneLogo})`,
                  "backgroundSize": "cover",
                  "backgroundPosition": "center"
                }}></div>
            </div>

            <div
              className='ILogoText relative z-10 text-lg'>
              <span>
                <h1 className='text-center text-4xl font-serif -translate-x-8'
                  style={{
                    "textShadow": "-1px 0 black, 1px 0 black, 0 1px black, 0 -1px black"
                  }}>IPHONE</h1>
              </span>
            </div>
          </section>

          <section
            className='textBetweenLogo text-center p-4'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam non ad, tempora facere
              odit et eaque quam ipsam nesciunt illo.</p>
          </section>

          <section
            className='AndroidLogo relative w-full flex items-center'>
            <div
              className='ILogoText relative z-10 text-lg'>
              <span>
                <h1 className='text-center text-4xl font-serif translate-x-8'
                  style={{
                    "textShadow": "-1px 0 black, 1px 0 black, 0 1px black, 0 -1px black"
                  }}>ANDROID</h1>
              </span>
            </div>

            <div
              className='ILogoBg w-50 h-50 bg-linear-to-r from-black to-base-300 -z-10 rotate-45
              flex items-center justify-center border'>
              <div
                className='w-40 h-40 -rotate-45 absolute'
                style={{
                  "backgroundImage": `url(${AndroidLogo})`,
                  "backgroundSize": "cover",
                  "backgroundPosition": "center",
                }}></div>
            </div>
          </section>
        </article>

        {/* A-3 */}
        <article
          className='LinkPage border-t min-h-50 w-full relative mb-5'>
          <section>
            <div
              className='absolute top-0 left-0 w-full h-50 bg-linear-to-b from-black -z-10 rounded-b-4xl
               border-b-4 border-black'></div>
          </section>

          <h1 className='text-center text-lg font-bold italic bg-black p-4 rounded-2xl'>- available services -</h1>

          <section
            className='p-4 flex justify-center gap-10 '>
            {/* iphone */}
            <Link
              to={"/IphoneProductPage"}
              className='w-20 h-20 bg-linear-to-r from-black to-base-100 border rounded-box flex items-center justify-center'>
              <div
                className='w-full h-full'
                style={{
                  "backgroundImage": `url(${IphoneLogo})`,
                  "backgroundSize": "cover",
                  "backgroundPosition": "center"
                }}></div>
            </Link>
            {/* android */}
            <Link
              to={"/AndroidProductPage"}
              className='w-20 h-20 bg-linear-to-r from-black to-base-100 border rounded-box flex items-center justify-center'>
              <div
                className='w-full h-full'
                style={{
                  "backgroundImage": `url(${AndroidLogo})`,
                  "backgroundSize": "cover",
                  "backgroundPosition": "center"
                }}></div>
            </Link>
          </section>

          <section
            className='mt-10 flex justify-center gap-5'>
            <div
              className='w-10 h-10 rounded-full bg-base-300 inset-shadow-xs inset-shadow-black'></div>
            <div
              className='w-10 h-10 rounded-full bg-base-300 inset-shadow-xs inset-shadow-black'></div>
            <div
              className='w-10 h-10 rounded-full bg-base-300 inset-shadow-xs inset-shadow-black'></div>
          </section>
        </article>

        <section
        className='p-5'>
          <h1 className='text-xl'>Hello everyone!</h1>
          <p>Welcome to our phone repairing service. If your phone has any problem, we are here to help you.
            We repair both software and hardware issues. Whether your phone has system problems, broken parts, or other errors, our technicians can fix them.
            Our workplace is equipped with professional tools that allow us to repair almost any phone problem.
            We also offer our services at a sweet and affordable price, so you can get your phone fixed without spending too much.
          </p>
          <p>
            If you have any problems with your phone or need help, please feel free to ask us anytime. We are always happy to assist you.
          </p>
          <p>Thank you for choosing our service!</p>
        </section>
      </main>
      
      {/* admin */}
      <div
      className='AdminOnly fixed bottom-10 right-5 z-99'>
        <Link
        to={"/AdminPage"}
        className='w-15 h-15 rounded-full flex items-center 
        justify-center text-black border shadow-lg shadow-black inset-shadow-sm inset-shadow-white'> <PencilIcon /> </Link>
      </div>

      <footer
        className='w-full bg-linear-to-r from-orange-500 to-amber-800 rounded-t-4xl pt-4 border-t-3 border-t-black'>
        <div
          className='w-full min-h-40 bg-base-300 rounded-t-4xl border-t-2 flex flex-col items-center'>
          <article
            className='LOGO text-4xl font-bold font-serif p-4'>
            <span>J'</span>
            <span className='text-amber-600'>Creative</span>
          </article>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
