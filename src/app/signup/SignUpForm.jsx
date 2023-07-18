"use client"
import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";

const firebaseConfig = {
    apiKey: "AIzaSyBCxIyAShmt2H9GFCic4oUj5b53gTEwMSw",
    authDomain: "chekov-yc.firebaseapp.com",
    projectId: "chekov-yc",
    storageBucket: "chekov-yc.appspot.com",
    messagingSenderId: "861407056407",
    appId: "1:861407056407:web:935c2cc40563f9b0f7c252"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function SignUpForm() {
    const { setUser } = useContext(AuthContext);
    
    const router = useRouter()  //next.js useRouter hook returns an object that allows us to navigate between pages and is being stored in router
    const navigate = (path) => router.push(path) //next.js creating navigate function to avoid rewriting the original react code.

    const handleGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(response => {
            setUser(response.user)
            navigate("/");
        })
        .catch(err => alert(err.message))
}

    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
            .then(response => {
                setUser(response.user)
                //now send them back to "/"
                navigate("/");
            })
            .catch(err => alert(err.message))
    }

    return (
        <section className="bg-violet-950 p-6 rounded-lg max-w-[420px] w-full">
            <form onSubmit={handleSignUp} className="flex flex-col items-start justify-around min-h-[30vh]">
                <label htmlFor="email" className="flex justify-between w-full">
                    <span>Email</span>
                    <input required type="email" name="email" className="rounded-lg border-transparent border
                     border-violet-500 py-2 px-4 bg-zinc-50 text-zinc-700 placeholder-zinc-400 
                     text-base focus:ring-2 focus:ring-violet-600 focus:border-transparent"/>
                </label>
                <br />
                <label htmlFor="password" className="flex justify-between w-full">
                    Password
                    <input required type="password" name="password" className="rounded-lg border-transparent border
                     border-violet-500 py-2 px-4 bg-zinc-50 text-zinc-700 placeholder-zinc-400 
                     text-base focus:ring-2 focus:ring-violet-600 focus:border-transparent" />
                </label>
                <br />
                <input type="submit" value="Sign Up" className="bg-sky-300 text-violet-950 py-2 px-8 
                rounded-lg shadow-lg transition duration-300 hover:bg-violet-300 hover:shadow-sm 
                cursor-pointer" />
            </form>
            <button onClick={handleGoogle}  className="bg-sky-300 text-violet-950 py-2 px-8 
                rounded-lg shadow-lg transition duration-300 hover:bg-violet-300 hover:shadow-sm 
                cursor-pointer">Signup With Google</button> 
            <br/>
        </section>
    )
}