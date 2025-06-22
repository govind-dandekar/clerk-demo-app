import Link from "next/link"

export default function AuthPage(){
    return (
      <div className="-mt-16">
      <div className="text-3xl mt-10">
            Auth Implementation Test Pages 
      </div>
      <div className="mt-3 grid grid-col-1 space-4">
        <Link href="/test-no-auth-middleware" className="bg-blue-600 text-white mt-6 px-6 py-2 hover:bg-blue-800 hover:scale-105">
            No Auth Middleware
        </Link>
        <Link href="/test-auth-middleware" className="bg-blue-600 text-white mt-6 px-6 py-2 hover:bg-blue-800 hover:scale-105">
            Auth Set In Middleware
        </Link>                
      </div>
      </div>
    )
}