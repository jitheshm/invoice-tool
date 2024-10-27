"use client"
import { RootState } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const { userInfo } = useSelector((state: RootState) => state.user);
    const router = useRouter()
    useEffect(() => {
        if (!userInfo.verified) {
            router.push('/login')
        }
    }, [userInfo.verified])

    return (
        <>
            {
                userInfo.verified && children
            }
        </>
    );
}
