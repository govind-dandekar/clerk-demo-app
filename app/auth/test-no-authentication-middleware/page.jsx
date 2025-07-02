export default function HomePage(){
    return (
        <div className="-mt-16">
            <p>Test No Auth Page - Set with Middleware</p>
            <p>Since this route is set as part of isPublicRoute in middleware.ts, it's accesible without authentication</p>
        </div>
    )
}