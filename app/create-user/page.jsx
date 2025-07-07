import { createClerkClient } from '@clerk/backend'

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY })

export default async function CreateUser(){
    const response = await clerkClient.users.createUser({
    // add user data
    
    });

    return (
        <div>Hello World!</div>
    )
}


