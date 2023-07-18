"use client"
import { useContext } from "react"
import { AuthContext } from "@/app/contexts/AuthContext"

export default function Login() {
    const { setUser } = useContext(AuthContext)
    return (
        <main className="bg-violet-900 min-h-screen text-orange-50 px-4 py-8 text-center">
            <h1>Home</h1>
            <button onClick={() => setUser()}>Log Out</button>
        </main>
    )
}