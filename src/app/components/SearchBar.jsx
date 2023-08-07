"use client"
// use clients is because we are using a hook. Rendered client side and cannot use hooks on servers.
import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"

export default function SearchBar() {
  const { user, setUser } = useContext(AuthContext); //Getting set user from auth context
  const [logoutMenu, setLogoutMenu] = useState(false)

  return (
    <>

      <header className="z-40 items-center w-full h-16 bg-white shadow-lg">
        <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
          <div className="relative flex items-center w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
            <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full">
              <div className="relative flex items-center w-full h-full lg:w-64 group">
                <div className="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                  <svg fill="none" className="relative w-5 h-5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                    </path>
                  </svg>
                </div>
                <svg className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                  </path> 
                </svg>
                <input type="text" className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 text-gray-400 aa-input" placeholder="Search" />
                <div className="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                  +
                </div>
              </div>
            </div>
            <div className="relative flex items-center w-1/4 justify-end p-1 ml-5 mr-4 sm:mr-0 sm:right-auto">
              <div className="flex items-center">
                <div className="w-px h-6 bg-gray-300">
                </div>
              </div>
              {/* Profile */}
              <span className="relative flex items-center cursor-pointer" onClick={() => setLogoutMenu(prev => !prev)}>
                <img onError={e => e.target.src = "/images/profile.png"} alt="profil" src={user?.photoURL || "/images/profile.png"} className="ml-4 mr-2 object-cover rounded-full h-10 w-10 " />
                <p>{user?.displayName || "Welcome"}</p>
              </span>
              {
                logoutMenu &&
                <div className="flex hover:text-blue-800 justify-center w-[150px] absolute border  top-14 right-0 whitespace-nowrap bg-white cursor-pointer py-4" onClick={()=> setUser()} >
                  Logout
                </div>
              }
            </div>
          </div>
        </div>
      </header>
    </>
  )
}