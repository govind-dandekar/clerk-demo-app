import { auth } from "@clerk/nextjs/server"

export default async function HomePage(){
    
     const { userId, redirectToSignIn } = await auth();

     if (!userId) return redirectToSignIn();

    return (
        <div className="-mt-16">
            <p>Page is set as public in middleware.ts but includes auth() for component level protection </p>
            <p>non logged-in users will be redirected to sign-in with redirectToSignIn()</p>
        </div>
    )
}