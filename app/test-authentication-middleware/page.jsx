export default function HomePage(){
    return (
        <div>
            <p>Test No Auth Page - Set with Middleware</p>
            <p>Since this route is NOT set as part of isPublicRoute in middleware.ts, it's NOT accessible without authentication</p>
            <p>If the user is not Authenticated, the page will automatically redirect to sign-in</p>
            <p>NextJS cannot pre-fetch with Link if user is no Logged-In</p>
        </div>
    )
}