import { dbConnection } from "@/config/db/dbConnect";
import { validateFormData } from "@/lib/utils/validations/signupValidation";
import { NextRequest, NextResponse } from "next/server";
import UserModel from '@/models/UserModel'
import { passwordHash } from "@/lib/utils/bycrypt";


export async function POST(req: NextRequest) {
    try {
        await dbConnection()
        const formData = await req.json();
        const validationErrors = validateFormData(formData);
        if (Object.keys(validationErrors).length > 0) {
            return NextResponse.json({ errors: validationErrors }, { status: 400 });
        }
        const existUser = await UserModel.findOne({ email: formData.email })
        if (existUser) {
            return NextResponse.json({ message: "User already exist" }, { status: 409 });
        }
        
        formData.password = await passwordHash(formData.password)
        const newUser = new UserModel(formData);
        await newUser.save();
        return NextResponse.json({ message: "User registered successfully!" }, { status: 201 });

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
}
