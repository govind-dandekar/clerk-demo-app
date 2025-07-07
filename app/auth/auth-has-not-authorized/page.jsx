import { auth } from "@clerk/nextjs/server";

import HomeButton from "../../components/ui/home-button";

export default async function HomePage(){

    const { orgRole } = await auth();

    return (
        <>
            <div className="-mt-16">
                <p>Redirected to this page because user does not have the 'org:admin' role</p>
                {orgRole ? 
                    <p>User Role: {orgRole}</p> :
                    <p>User has no assigned role</p>
                }
            </div>
            <HomeButton />
        </>
    )
}