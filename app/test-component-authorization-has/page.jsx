import { auth, getAuth } from "@clerk/nextjs/server"

import { redirect } from 'next/navigation'

export default async function HomePage(){

    const { has, sessionClaims} = await auth();

    const canAccess = has({ role: 'org:admin' })

    if (!canAccess){
        redirect('/auth-has-not-authorized')
    } 

    return (
        <div>
            <p>Page is set as private in middleware.ts but include has role: 'org:admin'</p>
            <p>Non-org:admin users will be redirected to '/auth-has-not-authorized'</p>
            <p className="mt-4">org level from sessionClaims: {sessionClaims?.orgRole}</p>
        </div>
    )
}