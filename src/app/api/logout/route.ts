import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET() {
    const cookieStore = cookies()
    cookieStore.delete('invoicetool')  // Effectively deletes the cookie
    return NextResponse.redirect('/login')
}
