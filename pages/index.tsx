import type { NextPage } from 'next'
import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { prependOnceListener } from 'process'

const Home: NextPage = () => {
  let Links =[
    {name:"Home",link:"/"},
    {name:"Events",link:"/"},
    {name:"Blog",link:"/"},
    {name:"Team",link:"/"}
  ]
  let [open,setOpen]=useState(false);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>She-Code-Nairobi</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      {/* Navbar */}
      <div className=" w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
          <div className="cursor-pointer">
            <Image src="/images/logo.svg" width={85} height={85}/>
          </div> 
          <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          <Image src={open ? "/images/close.svg":"/images/menu.svg"} width={32.5} height={19.5} />
          </div>         
          <ul className={`md:flex justify-center md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] w-full md:w-auto md:pl-0 pl-9 transition-all duration--500 ease-in ${open ? 'top-10 text-center transform translate-x-6 -translate-y-5':'top-[-490px] '}`}>
            {/* {left-40  */
              Links.map((link)=>(
                <li key={link.name} className={`md:ml-8 text-primary text-lg md:my-0 my-7 ${open ? 'text-primary':'text-darkAccent  transform md:-translate-x-16 lg:-translate-x-44 xl:-translate-x-64 2xl:-translate-x-96'}`}>
                  <a href={link.link} className="hover:text-primary">{link.name}</a>
                </li>
              ))
            }
            <li><button className={`${open ? 'bg-white text-primary border-2 border-primary py-3 px-12 rounded-full md:ml-20 ':'bg-primary text-white py-3 px-12 rounded-full md:ml-20'}`}>              
              Be a partner              
            </button></li>
            <li><button className="bg-primary text-white py-3 px-12 rounded-full md:ml-20 md:hidden transform translate-y-6">              
              Be a member             
            </button></li>
          </ul>          
        </div>
      </div>

      {/* navbar end */}

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-4xl font-bold text-primary">She-Code-Nairobi</h1>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let build with 💖{' '}
        </a>
      </footer>
    </div>
  )
}

export default Home
