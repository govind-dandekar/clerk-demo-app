import Link from "next/link"

import { House } from 'lucide-react';

export default function HomeButton(){
    return (
        <div className="mt-8 bg-blue-600 py-2 px-6 rounded-2xl">
            <Link href="/">
                <button className="mt-1">
                    <House
                        color="white"
                    />
                </button>
            </Link>
        </div>
    )
}