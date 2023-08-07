import Link from "next/link"
import SignUpForm from "./SignUpForm"

export default function SignUpPage () {
  return (
    <main className="bg-zinc-100 min-h-screen text-orange-50 px-4 py-8 text-center">
            <img alt="ecommerce" className="mix-blend-darken mx-auto md:w-70 md:h-20 block" src="/images/Logo2.png" />
            <h1 className="text-gray-900 font-semibold text-2xl mt-8">Create a LearnX account</h1>
      <div className="flex flex-col items-center">
            <SignUpForm />
            <p className="mt-4 text-gray-600">Already a user? <Link href="/" className="text-violet-700 font-semibold">Sign In</Link>
            </p>
            </div>
          </main>
  )
}