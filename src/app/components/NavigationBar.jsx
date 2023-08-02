"use client"
import { useState } from "react"
import Link from "next/link"

export default function NavigationBar() {
  const [showFullNav, setShowFullNav] = useState(true)
  
  const toggleNav = () => {
    setShowFullNav(!showFullNav);
  };
  /*
 TODO
   - Put arrow in navigation and build smaller navigation
   - Create smaller navigation
 */
  return (
    <>
      <div className= {`relative ${showFullNav ? "block lg:block w-80": "w-15 text-hidden"} h-screen shadow-lg h-100vh`}>
      {/* <div className= {`relative w-20 text-hidden h-screen shadow-lg h-100vh`}> */}
        <div className="h-full flex flex-col bg-white dark:bg-gray-700">
          <div className="flex items-center justify-center pt-6">
            <svg width="35" height="30" viewBox="0 0 256 366" version="1.1" preserveAspectRatio="xMidYMid">
              <defs>
                <linearGradient x1="12.5189534%" y1="85.2128611%" x2="88.2282959%" y2="10.0225497%" id="linearGradient-1">
                  <stop stopColor="#FF0057" stopOpacity="0.16" offset="0%">
                  </stop>
                  <stop stopColor="#FF0057" offset="86.1354%">
                  </stop>
                </linearGradient>
              </defs>
              <g>
                <path d="M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z" fill="#001B38">
                </path>
                <circle fill="url(#linearGradient-1)" transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) " cx="147.013244" cy="147.014675" r="78.9933938">
                </circle>
                <circle fill="url(#linearGradient-1)" opacity="0.5" transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) " cx="147.013244" cy="147.014675" r="78.9933938">
                </circle>
              </g>
            </svg>
          </div>

          <nav className="mt-6 h-full flex grow flex-col justify-between">
            <div>
              <div>
                {/* AgendaTab */}
                <Link className="flex items-center justify-start w-full p-4 my-4 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500 cursor-pointer" href="/agenda">
                  <span className="text-left">
                    <svg fill="currentColor" width="20" height="20" className="m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                    </svg>
                  </span>
                  <span className= {`${showFullNav ? "block": "hidden"} mx-4 text-m font-normal`}>
                    Agenda
                  </span>
                </Link>
                {/* Material Tab */}
                <Link className="flex items-center justify-start w-full p-4 my-4 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500 cursor-pointer" href="/material">
                  <span className="text-left">
                    <svg width="20" height="20" fill="currentColor" className="m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                    </svg>
                  </span>
                  <span className={`${showFullNav ? "block": "hidden"} mx-4 text-m font-normal`}>
                    Material
                  </span>
                </Link>
              </div>
            </div>
            <span className="w-full flex justify-end">
              {/* Arrow */}
              <div className={`${showFullNav ? "rotate-0": "rotate-180"} arrow p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500 cursor-pointer`} href="#"
              onClick={toggleNav}>
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 512 512">
                  <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
                </svg>
              </div>
            </span>
          </nav>
        </div>
      </div>
    </>
  )
}