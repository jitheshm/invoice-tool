import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { dbConnection } from '@/config/db/dbConnect';
import { validateServerInvoice } from '@/lib/utils/validations/invoiceServerValidation';
import Invoice from '@/models/InvoiceModel';
import { decryptToken } from '@/lib/utils/token';
import { Types } from 'mongoose';

export async function POST(req: NextRequest) {
    try {
        await dbConnection()
        const cookieStore = await cookies()
        const cookieData = cookieStore.get('invoicetool')
        if (!cookieData) {
            return NextResponse.json({ message: "unauthorized" }, { status: 401 });
        }

        const session = await decryptToken(cookieData?.value)
        if (!session) {
            return NextResponse.json({ message: "unauthorized" }, { status: 401 });
        }

        const data = await req.json();
        console.log(data)
        data.userId = new Types.ObjectId(session.id)
        const validationErrors = validateServerInvoice(data);
        if (Object.keys(validationErrors.errors).length > 0) {
            console.log(validationErrors)
            return NextResponse.json({ errors: validationErrors }, { status: 400 });
        }

        const existInvoice = await Invoice.findOne({ "invoiceId.value": data.invoiceId.value })
        if (existInvoice) {
            return NextResponse.json({ message: "Invoice id already exist" }, { status: 409 });
        }

        const invoice = await new Invoice(data)
        await invoice.save()

        return NextResponse.json({ message: "Invoice save successfully" }, { status: 201 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    try {

        await dbConnection()
        const cookieStore = await cookies()
        const cookieData = cookieStore.get('invoicetool')
        if (!cookieData) {
            return NextResponse.json({ message: "unauthorized" }, { status: 401 });
        }

        const session = await decryptToken(cookieData?.value)
        if (!session) {
            return NextResponse.json({ message: "unauthorized" }, { status: 401 });
        }

        const data = await Invoice.find({ userId: new Types.ObjectId(session.id) })
        return NextResponse.json({ message: "fetched successfully", data: data }, { status: 200 });

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
}
