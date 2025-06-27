export default function HomePage(){
    return (
        <div>
            <p>Test No Auth Page - Set with Middleware</p>
            <p>Since this route is set as part of isPublicRoute in middleware.ts, it's accesible without authentication</p>
        </div>
    )
}