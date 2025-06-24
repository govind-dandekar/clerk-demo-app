"use client"

import { useReverification, useSession } from '@clerk/nextjs'

import { myAction } from  '../actions';

import { useRouter } from 'next/navigation'

import { useEffect } from "react";

export default function ReverificationPage(){

  // page is protected by middleware and requires a logged-in session 
  const { session } = useSession();
  console.log(session?.factorVerificationAge);

  const performAction  = useReverification(myAction)

  const router = useRouter();

  const handleReverificationClick = async () => {
    
    const myData = await performAction();
    // If `myData` is null, the user cancelled the reverification process
    // You can choose how your app responds. This example returns null.
    if (myData) {
      router.push('/reverification-page')
    } else {
      // add failure logic here
      return
    }
  }

  return (
    <div className="-mt-16">
        <button className="bg-blue-600 text-white mt-6 px-6 py-2 hover:bg-blue-800 hover:scale-105" onClick={handleReverificationClick}>
            useReverification() test
        </button>
        {/* verification age auto-updates with re-issue of session cookie */}
        <p className="mt-4">First Factor Verification Age: {session?.factorVerificationAge[0]} minutes</p>
    </div>

  )




}
