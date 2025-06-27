import { auth } from "@clerk/nextjs/server";

export default async function HomePage(){
    
    const { sessionClaims, orgRole } = await auth();

    console.log(sessionClaims);
    
    // const orgRole = sessionClaims?.orgRole;
    console.log(orgRole)

    return (
        <div>
            <p>Redirected to this page because user does not have the 'org:admin' role</p>
            {orgRole ? 
                <p>User Role: {orgRole}</p> :
                <p>User has no assigned role</p>
            }
        </div>
    )
}