import Link from "next/link"

import { useReverification } from '@clerk/nextjs'

export default async function AuthPage(){

  const performAction  = useReverification(myAction)

  const handleReverificationClick = async () => {
    const myData = await performAction();
    // If `myData` is null, the user cancelled the reverification process
    // You can choose how your app responds. This example returns null.
    if (myData) {
      router.push('/meal-order')
    } else {
      // add failure logic here
      return
    }
  }

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
        <Link href="/test-component-auth" className="bg-blue-600 text-white mt-6 px-6 py-2 hover:bg-blue-800 hover:scale-105">
            auth() Set In Component
        </Link>
        <Link href="/test-component-auth-protect" className="bg-blue-600 text-white mt-6 px-6 py-2 hover:bg-blue-800 hover:scale-105">
            auth.protect() Set In Component
        </Link>
        <button className="bg-blue-600 text-white mt-6 px-6 py-2 hover:bg-blue-800 hover:scale-105" onClick={handleReverificationClick}>
          useReverification() test
        </button>      
      </div>
      </div>
    )
}