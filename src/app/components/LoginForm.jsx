"use client"
import { useContext } from "react";  // way to use information accross multiple componenets without passing it through props
// import { useNavigate } from "react-router-dom"; // Go from one page to another
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthContext } from "@/app/contexts/AuthContext"
import { useRouter } from "next/navigation";

const firebaseConfig = {   //Credentials for firebase app
    apiKey: "AIzaSyBCxIyAShmt2H9GFCic4oUj5b53gTEwMSw",
    authDomain: "chekov-yc.firebaseapp.com",
    projectId: "chekov-yc",
    storageBucket: "chekov-yc.appspot.com",
    messagingSenderId: "861407056407",
    appId: "1:861407056407:web:935c2cc40563f9b0f7c252"
};
const app = initializeApp(firebaseConfig); //connecting to firebase using firebaseConfig
const auth = getAuth(app); //getting authorization client using the app connection I created

export default function LoginForm() { 
    const { setUser } = useContext(AuthContext); //Getting set user from auth context
    
    const router = useRouter()  //next.js useRouter hook returns an object that allows us to navigate between pages and is being stored in router
    const navigate = (path) => router.push(path) //next.js creating navigate function to avoid rewriting the original react code.

    const handleGoogle = () => {
        const provider = new GoogleAuthProvider();// creating a new instance of GoogleAuthProvider and saving it into provider
        signInWithPopup(auth, provider) //Taking firebase and google and putting it in a popup
        .then(response => {   //Takes that response and passes it to a call back function
            setUser(response.user) //taking that response and setting the user
        })
        .catch(err => alert(err.message)) //Provide error message
}

    const handleLogin= (e) => {
        e.preventDefault(); //taking an event and preventing it from doing default behavior
        const email = e.target.email.value;  //values from the form. e = event listener; target= form; email= email section; value = is property
        const password = e.target.password.value; // values from the form

        signInWithEmailAndPassword(auth, email, password) //
            .then(response => {
                setUser(response.user)
                //now send them back to "/"
            })
            .catch(err => alert(err.message))
    }

    return (
        <section className="bg-violet-950 p-6 rounded-lg max-w-[420px] w-full">
            <form onSubmit={handleLogin} className="flex flex-col items-start justify-around min-h-[30vh]">
                <label htmlFor="email" className="flex justify-between w-full">
                   <span> Email </span>
                    <input required type="email" name="email" className="rounded-lg border-transparent border
                     border-violet-500 py-2 px-4 bg-zinc-50 text-zinc-700 placeholder-zinc-400 
                     text-base focus:ring-2 focus:ring-violet-600 focus:border-transparent"/>
                </label>
                <label htmlFor="password" className="flex justify-between w-full">
                    <span>Password</span>
                    <input required type="password" name="password" className="rounded-lg border-transparent border
                     border-violet-500 py-2 px-4 bg-zinc-50 text-zinc-700 placeholder-zinc-400 
                     text-base focus:ring-2 focus:ring-violet-600 focus:border-transparent"/>
                </label>
                <input type="submit" value="Login" className="bg-green-300 text-violet-950 py-2 px-8 
                rounded-lg shadow-lg transition duration-300 hover:bg-violet-300 hover:shadow-sm 
                cursor-pointer w-full" />
            </form>
            <button onClick={handleGoogle} className="bg-sky-300 text-violet-950 py-2 px-8 
                rounded-lg shadow-lg transition duration-300 hover:bg-violet-300 hover:shadow-sm 
                cursor-pointer">Login With Google</button> 
            <br/>
        </section>
    )
}