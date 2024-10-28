import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
});

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return new NextResponse("No file uploaded", { status: 400 });
        }

        const fileBuffer = Buffer.from(await file.arrayBuffer());

        const uploadParams = {
            Bucket: process.env.S3_BUCKET_NAME!,
            Key: file.name, 
            Body: fileBuffer,
            ContentType: file.type,
            ACL: 'public-read',
        };

        await s3.send(new PutObjectCommand(uploadParams));

        const fileUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${file.name}`;
        console.log(fileUrl)
        return NextResponse.json({ fileUrl });
    } catch (error) {
        console.error("Error uploading file to S3:", error);
        return new NextResponse("Failed to upload file to S3", { status: 500 });
    }
}
