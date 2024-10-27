import { dbConnection } from "@/config/db/dbConnect";
import { validateFormData } from "@/lib/utils/validations/loginValidation";
import { NextRequest, NextResponse } from "next/server";
import UserModel from '@/models/UserModel'
import { verifyPassword } from "@/lib/utils/bycrypt";
import { generateToken } from "@/lib/utils/token";
import { cookies } from 'next/headers'

export async function POST(req: NextRequest) {
    try {
        const cookieStore = await cookies()
        await dbConnection()
        const formData = await req.json();
        const validationErrors = validateFormData(formData);
        if (Object.keys(validationErrors).length > 0) {
            return NextResponse.json({ errors: validationErrors }, { status: 400 });
        }
        const existUser = await UserModel.findOne({ email: formData.email })
        if (existUser) {
            const status = await verifyPassword(formData.password, existUser.password)
            if (status) {
                const token = generateToken({ id: existUser._id!, name: existUser.name })

                cookieStore.set({
                    name: 'invoicetool',
                    value: token,
                    httpOnly: true,
                    path: '/',
                })

                return NextResponse.json({ message: "user login successfully" }, { status: 200 });
            } else {
                return NextResponse.json({ message: "email or password is incorrect" }, { status: 401 });
            }
        } else {
            return NextResponse.json({ message: "email or password is incorrect" }, { status: 401 });
        }

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
}