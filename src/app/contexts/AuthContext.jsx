"use client"  //telling next this will be run on the user computers because we are using hooks.
import Link from "next/link"
import { usePathname } from "next/navigation"
import { createContext, useState, useEffect } from "react" // react hooks
import LoginForm from "@/app/components/LoginForm"

export const AuthContext = createContext() //creating context to use for Authroization

export default function AuthContextComponent({ children }) { //children between react components

  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false)
  const [user, setUserState] = useState() //store user info as usestate
  const setUser = (user) => { //store in session and in state so it doesn't logout person
    sessionStorage.setItem("user", JSON.stringify(user))
    setUserState(user)
  }

  useEffect(() => { //it runs when the page renders
    if (user) {
      setIsReady(true)
      return
    }//if the user is already there just stop
    const sessionUser = sessionStorage.getItem("user") //retrieving the value user
    if (sessionUser && sessionUser !== "undefined") { //checking if we got something back and it is not undefined. Make sure what we got back is valid JSON
      setUserState(JSON.parse(sessionUser)) //Parsing what we got back from session and putting it in state
    }
    setIsReady(true)

  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }} > {/* Provider gives values to the rest of the children */}
      {
        (isReady && !user && pathname !== '/signup')
          ? <main className="min-h-screen text-orange-50 px-4 py-8 text-center">
            <h1 className="text-gray-900 font-semibold text-2xl">Sign in to your account</h1>
            <LoginForm />
            <p className="mt-4 text-gray-600">Not a user? <Link href="/signup" className="text-violet-500 font-semibold">Sign Up</Link>
            </p>
          </main>
          : isReady && <>{children}</>
      }
    </AuthContext.Provider>
  )
}

