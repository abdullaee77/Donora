"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import { useSession,signIn,signOut } from 'next-auth/react'
const Navbar = () => {
    const { data: session } = useSession()
  //   if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }
const [showDropdown, setshowDropdown] = useState(false)
  return (
    <nav suppressHydrationWarning className='bg-gray-900 text-white flex justify-between items-center h-16 px-4 z-50 relative'>
      <Link href={"/"} className='font-bold flex logo justify-center items-center'>
        <img width={44} src="tea.gif" alt="" />
        <span>Donora!</span>
      </Link>

      
          <div className='relative flex justify-center items-center  md:block gap-4'>
        {session && <>
          <button onClick={() => setshowDropdown(!showDropdown)}  id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white mx-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center dark:bg-gradient-to-br dark:from-purple-600 dark:to-blue-500 dark:hover:bg-gradient-to-bl dark:focus:ring-blue-800" type="button">Account<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          <div id="dropdown" className={`z-10 ${showDropdown ? "" : "hidden"} absolute left-[15px] top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/Dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
              </li>
              <li>
                <Link onClick={() => signOut()} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div></>
        }
       {!session && <Link
          href="/login"
          className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl  font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 inline-block">
          Login
        </Link>}
          {session && <Link
          href="/login"
          onClick={()=>{signOut()}}
          className="text-white mx-1 bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl  font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 inline-block">
          Logout
        </Link>}
       
      </div>
    </nav>
  )
}

export default Navbar
