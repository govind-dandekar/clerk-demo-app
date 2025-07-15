"use client"

import { useReverification, useSession } from '@clerk/nextjs'

import { singleFactorAction, multiFactorAction, secondFactorAction } from  '../actions/actions';

import { useRouter } from 'next/navigation'

export default function ReverificationPage(){

  // console.log("userId: " + userId);

  // page is protected by middleware and requires a logged-in session 
  const { session } = useSession();
  console.log(session?.factorVerificationAge);

  const performOneFactorAction  = useReverification(singleFactorAction)
  const performMultiFactorAction  = useReverification(multiFactorAction)
  const performSecondFactorAction = useReverification(secondFactorAction);

  const router = useRouter();

  const handleOneFactorReverificationClick = async () => {
    
    const myData = await performOneFactorAction();
    // If `myData` is null, the user cancelled the reverification process
    // You can choose how your app responds. This example returns null.
    if (myData) {
      router.push('/reverification-page')
    } else {
      // add failure logic here
      return
    }
  }

  const handleTwoFactorReverificationClick = async () => {
    
    const myData = await performMultiFactorAction();
    // If `myData` is null, the user cancelled the reverification process
    // You can choose how your app responds. This example returns null.
    if (myData) {
      router.push('/reverification-page')
    } else {
      // add failure logic here
      return
    }
  }

  const handleSecondFactorReverificationClick = async () => {
    const myData = await performSecondFactorAction();
    // If `myData` is null, the user cancelled the reverification process
    // You can choose how your app responds. This example returns null.
    if (myData) {
      router.push('/reverification-page')
    } else {
      // add failure logic here
      return
    }
  }

  

  const factorOneAgeText = session?.factorVerificationAge[0] === 1 ? "minute" : "minutes"
  const factorTwoAgeText = session?.factorVerificationAge[1] === 1 ? "minute" : "minutes"

  return (
    <div className="-mt-16">
        <button className="bg-blue-600 text-white mt-6 px-6 py-2 hover:bg-blue-800 hover:scale-105" onClick={handleOneFactorReverificationClick}>
            useReverification() test
        </button>
        {/* verification age auto-updates with re-issue of session cookie */}
        <p className="mt-4">First Factor Verification Age: {session?.factorVerificationAge[0]} {factorOneAgeText}</p>
        <button className="bg-blue-600 text-white mt-6 px-6 py-2 hover:bg-blue-800 hover:scale-105" onClick={handleTwoFactorReverificationClick}>
            useReverification() MFA test
        </button>
        <p className="mt-4">Second Factor Verification Age: {session?.factorVerificationAge[1]} {factorTwoAgeText}</p>
        <button className="bg-blue-600 text-white mt-6 px-6 py-2 hover:bg-blue-800 hover:scale-105" onClick={handleSecondFactorReverificationClick}>
            useReverification() Second Factor Test
        </button>
    </div>

  )




}
