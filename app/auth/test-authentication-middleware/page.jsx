export default function HomePage(){
    return (
        <div className="-mt-16">
            <p>Test No Auth Page - Set with Middleware</p>
            <p>Since this route is NOT set as part of isPublicRoute in middleware.ts, it's NOT accessible without authentication</p>
            <p>If the user is not Authenticated, the page will automatically redirect to sign-in</p>
            <p>NextJS cannot pre-fetch with Link if user is not logged-in</p>
        </div>
    )
}