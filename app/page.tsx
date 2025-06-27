import Image from "next/image";

import Link from "next/link";

import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <>
      <Image
          src="/mountains.png"
          width={300}
          height={300}
          alt="mountains outline"
        />
      <div className="text-3xl mt-10">
        Whistler Ski Student Meal Portal 
      </div>
      {/* <SignedIn>
          <button className="bg-blue-600 text-white mt-6 px-6 py-2 hover:bg-blue-800 hover:scale-105">
            <Link href="/organization">
              Organization Page
            </Link>
          </button>
      </SignedIn> */}
      <SignedOut>
        <div className="grid grid-cols-2 gap-4">
          <span className="bg-blue-600 text-white mt-6 px-6 py-2 hover:bg-blue-800 hover:scale-105"><SignInButton/></span>
          <span className="bg-blue-600 text-white mt-6 px-6 py-2 hover:bg-blue-800 hover:scale-105"><SignUpButton/></span>
        </div>
      </SignedOut>
      <button className="bg-blue-600 text-white mt-6 px-6 py-2 hover:bg-blue-800 hover:scale-105">
        <Link href="/auth">
          Auth Tests
        </Link>
      </button>
      <button className="bg-blue-600 text-white mt-6 px-6 py-2 hover:bg-blue-800 hover:scale-105">
        <Link href="/reverification">
          Reverification Test
        </Link>
      </button>
    </>
  );
}