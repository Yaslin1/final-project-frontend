"use client"
import { useContext } from "react";  // way to use information accross multiple componenets without passing it through props
import creds from "../../../creds";
// import { useNavigate } from "react-router-dom"; // Go from one page to another
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthContext } from "@/app/contexts/AuthContext"

const app = initializeApp(creds); //connecting to firebase using firebaseConfig
const auth = getAuth(app); //getting authorization client using the app connection I created

export default function LoginForm() {
    const { setUser } = useContext(AuthContext); //Getting set user from auth context

    const handleGoogle = () => {
        const provider = new GoogleAuthProvider();// creating a new instance of GoogleAuthProvider and saving it into provider
        signInWithPopup(auth, provider) //Taking firebase and google and putting it in a popup
            .then(response => {   //Takes that response and passes it to a call back function
                setUser(response.user) //taking that response and setting the user
            })
            .catch(err => alert(err.message)) //Provide error message
    }

    const handleLogin = (e) => {
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
        <section className="bg-white p-6 rounded-lg max-w-[420px] w-full items-center">
            <form onSubmit={handleLogin} className="flex flex-col items-start justify-around min-h-[30vh]">
                <label htmlFor="email" className="flex flex-col w-full">
                    <span className="text-zinc-900 text-left"> Email </span>
                    <input required type="email" name="email" className="rounded-lg border-transparent border
                     border-violet-500 py-2 px-4 bg-zinc-50 text-zinc-700 placeholder-zinc-400 
                     text-base focus:ring-2 focus:ring-violet-600 focus:border-transparent"/>
                </label>
                <label htmlFor="password" className="flex flex-col w-full">
                    <span className="text-zinc-900 text-left">Password</span>
                    <input required type="password" name="password" className="rounded-lg border-transparent border
                     border-violet-500 py-2 px-4 bg-zinc-50 text-zinc-700 placeholder-zinc-400 
                     text-base focus:ring-2 focus:ring-violet-600 focus:border-transparent"/>
                </label>
                <input type="submit" value="Login" className="bg-violet-700 text-white py-2 px-8 
                rounded-lg shadow-lg transition duration-300 hover:bg-violet-300 hover:shadow-sm 
                cursor-pointer w-full" />
            </form>
            <div class="inline-flex items-center justify-center w-full">
                <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                    <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">Or continue with</span>
                <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
            </div>
            <button onClick={handleGoogle} className="bg-sky-300 text-white py-2 px-8 
                rounded-lg shadow-lg transition duration-300 hover:bg-violet-300 hover:shadow-sm 
                cursor-pointer">Google</button>
            <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
            <br />
        </section>
    )
}