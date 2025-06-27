import Link from "next/link"


export default async function AuthPage(){

    return (
      <div className="-mt-16">
      <div className="text-3xl mt-10">
            Auth Implementation Test Pages 
      </div>
      <div className="mt-3 grid grid-col-1 space-4">
        <Link href="/test-no-authentication-middleware" className="bg-blue-600 text-white mt-6 px-6 py-2 hover:bg-blue-800 hover:scale-105">
            No Authentication in Middleware
        </Link>
        <Link href="/test-authentication-middleware" className="bg-blue-600 text-white mt-6 px-6 py-2 hover:bg-blue-800 hover:scale-105">
            Authentication Set In Middleware
        </Link> 
        <Link href="/test-component-authentication" className="bg-blue-600 text-white mt-6 px-6 py-2 hover:bg-blue-800 hover:scale-105">
            auth() Set In Component
        </Link>
        <Link href="/test-component-authorization-has" className="bg-blue-600 text-white mt-6 px-6 py-2 hover:bg-blue-800 hover:scale-105">
            org:admin Set in Component with has
        </Link>  
      </div>
      </div>
    )
}