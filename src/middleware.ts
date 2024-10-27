import { NextRequest, NextResponse } from 'next/server'
import { decryptToken } from './lib/utils/token'


const protectedRoutes = ['/']
const publicRoutes = ['/login', '/signup']

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    const cookieData = req.cookies.get('invoicetool')
    console.log(cookieData)
    if (!cookieData) {
        if (isPublicRoute) {
            return NextResponse.next()
        } else {
            return NextResponse.redirect(new URL('/login', req.nextUrl))
        }
    }

    // 3. Decrypt the session from the cookie
    try {

        const session = cookieData ? await decryptToken(cookieData?.value) : null
        // 4. Redirect to /login if the user is not authenticated
        if (isProtectedRoute && !session?.id) {
            return NextResponse.redirect(new URL('/login', req.nextUrl))
        }

        // 5. Redirect to /dashboard if the user is authenticated
        if (
            isPublicRoute &&
            session?.id
        ) {
            return NextResponse.redirect(new URL('/', req.nextUrl))
        }

        return NextResponse.next()

    } catch (error) {
        const response = NextResponse.redirect(new URL('/login', req.url))
        response.cookies.set('invoicetool', '', {
            httpOnly: true,
            path: '/',
            maxAge: -1, // This effectively deletes the cookie
        })
        return response
    }
}



// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}