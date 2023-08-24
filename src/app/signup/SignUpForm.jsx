"use client"
import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";

const firebaseConfig = { 
    apiKey: "AIzaSyAvfGpds67h1nC0sFw_sZ9Y8dL1tr35bfA",
    authDomain: "lms-web-yc.firebaseapp.com",
    projectId: "lms-web-yc",
    storageBucket: "lms-web-yc.appspot.com",
    messagingSenderId: "612000957833",
    appId: "1:612000957833:web:87ce4b1010c1bd87accd58"
  };

// To check for multiple apps. Currently working without this.
// Import needed for compatibility with Next
// import firebase from 'firebase/compat/app';
// const app = !firebase.apps?.length
//     ? initializeApp(firebaseConfig, "auth")
//     : firebase.app()

// Other is needed because its currently connecting to two projects
const app = initializeApp(firebaseConfig, "other");
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
        <section className="m-8 p-6 bg-white border border-gray-100 shadow-sm rounded-lg w-[500px] flex flex-col items-center">
            <form onSubmit={handleSignUp} className="flex w-[420px] flex-col items-start justify-around min-h-[30vh]">
                <label htmlFor="email" className="flex flex-col w-full">
                    <span className="text-zinc-900 text-left"> Email </span>
                    <input required type="email" name="email" className="rounded-lg border
                 border-gray-300 shadow-sm py-2 px-4 text-zinc-700 placeholder-zinc-400 
                 text-base "/>
                </label>
                <label htmlFor="password" className="flex flex-col w-full">
                    <span className="text-zinc-900 text-left">Password</span>
                    <input required type="password" name="password" className="rounded-lg border
                 border-gray-300 shadow-sm py-2 px-4 text-zinc-700 placeholder-zinc-400 
                 text-base"/>
                </label>
                <input type="submit" value="Sign Up" className="bg-violet-700 text-white py-2 px-8 
            rounded-lg shadow-lg transition duration-300 hover:bg-violet-300 hover:shadow-sm 
            cursor-pointer w-full" />
            </form>
            <div class="inline-flex items-center justify-center w-[420px]">
                <hr class="w-64 h-px my-8 bg-gray-200 border-0" />
                <span class="px-3 font-medium text-gray-900 bg-white left-1/2 whitespace-nowrap">Or continue with</span>
                <hr class="w-64 h-px my-8 bg-gray-200 border-0" />
            </div>
            <button onClick={handleGoogle} className="bg-blue-500 flex items-center text-white py-2 px-8 
            rounded-lg shadow-lg transition duration-300 hover:bg-violet-300 hover:shadow-sm 
            cursor-pointer relative mx-auto">
                <svg className="fill-white mr-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
                Google
            </button>
            <br />
        </section>
    )

    // return (
    //     <section className="bg-violet-950 p-6 rounded-lg max-w-[420px] w-full">
    //         <form onSubmit={handleSignUp} className="flex flex-col items-start justify-around min-h-[30vh]">
    //             <label htmlFor="email" className="flex justify-between w-full">
    //                 <span>Email</span>
    //                 <input required type="email" name="email" className="rounded-lg border-transparent border
    //                  border-violet-500 py-2 px-4 bg-zinc-50 text-zinc-700 placeholder-zinc-400 
    //                  text-base focus:ring-2 focus:ring-violet-600 focus:border-transparent"/>
    //             </label>
    //             <br />
    //             <label htmlFor="password" className="flex justify-between w-full">
    //                 Password
    //                 <input required type="password" name="password" className="rounded-lg border-transparent border
    //                  border-violet-500 py-2 px-4 bg-zinc-50 text-zinc-700 placeholder-zinc-400 
    //                  text-base focus:ring-2 focus:ring-violet-600 focus:border-transparent" />
    //             </label>
    //             <br />
    //             <input type="submit" value="Sign Up" className="bg-sky-300 text-violet-950 py-2 px-8 
    //             rounded-lg shadow-lg transition duration-300 hover:bg-violet-300 hover:shadow-sm 
    //             cursor-pointer" />
    //         </form>
    //         <button onClick={handleGoogle} className="bg-sky-300 text-violet-950 py-2 px-8 
    //             rounded-lg shadow-lg transition duration-300 hover:bg-violet-300 hover:shadow-sm 
    //             cursor-pointer">Signup With Google</button>
    //         <br />
    //     </section>
    // )
}