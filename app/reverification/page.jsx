"use client"

import { useReverification } from '@clerk/nextjs'

import { myAction } from  '../actions';

import { useRouter } from 'next/navigation'

export default function ReverificationPage(){
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
    <button className="bg-blue-600 text-white mt-6 px-6 py-2 hover:bg-blue-800 hover:scale-105" onClick={handleReverificationClick}>
        useReverification() test
    </button>
  )




}
