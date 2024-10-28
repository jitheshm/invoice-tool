import { setImage } from "@/lib/features/invoice/invoiceSlice";
import { RootState } from "@/lib/store";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useUpload = () => {
    const [upload, setUpload] = useState({
        processing: false,
        success: false,
        error: false

    })
    const [loading, setLoading] = useState(true);
    const { logo } = useSelector((state: RootState) => state.invoice);
    const dispatch = useDispatch()
    useEffect(() => {
        setLoading(false)
    }, [])


    const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUpload((prev) => {
            return {
                success: false,
                error: false,
                processing: true
            }
        })
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {

                const result = await response.json()
                console.log(result)
                dispatch(setImage(result.fileUrl))
                setUpload((prev) => {
                    return {
                        error: false,
                        processing: false,
                        success: true
                    }
                })
                console.log("File uploaded successfully!");
            } else {


                setUpload((prev) => {
                    return {
                        error: true,
                        processing: false,
                        success: false
                    }
                })
                console.error("File upload failed.");
            }
        } catch (error) {
            console.error("Error uploading file:", error);
            setUpload((prev) => {
                return {
                    error: true,
                    processing: false,
                    success: false
                }
            })
        }
    }

    return {
        loading,logo,upload,handleImageChange
    }

}

export default useUpload