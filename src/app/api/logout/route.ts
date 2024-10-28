import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET() {
    const cookieStore = cookies()
    cookieStore.delete('invoicetool')
    return NextResponse.json({ message: "logout successfully" }, { status: 200 })
}
