"use client"
import { useRouter } from 'next/navigation'
import { useContext, useEffect } from "react"
import { AuthContext } from "@/app/contexts/AuthContext"

export default function Login() {
    const { user } = useContext(AuthContext)
    const router = useRouter()
    
    useEffect(()=>{
        if (user) {
            router.push("/material")
        }
    },[])

    return(<></>)
}