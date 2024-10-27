"use client"
import { setImage } from '@/lib/features/invoice/invoiceSlice';
import { RootState } from '@/lib/store';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { FaFolderOpen } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';


function FileInput() {
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


    return (
        <div>
            <div className='border border-[#dddddd] shadow-sm  w-5/6 mx-auto min-h-32 p-5 rounded-md '>
                {
                    !loading && <label htmlFor='dropzone-file' className='border border-dashed border-[#aaaaaa] w-full min-h-20 max-h-44 flex justify-center hover:border-2 active:border-[#5acde2] active:border-solid'>
                        <img src={logo ? logo : "/default.png"} alt="" />
                        <input
                            id={`dropzone-file`}
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </label>
                }
            </div>
            <div className='flex justify-center flex-col items-center mt-2'>
                {
                    upload.processing && <div className='text-[#09a183]'>Processing...</div>
                }
                {
                    upload.error && <div className='text-red-600'>upload failed</div>
                }
                {
                    upload.success && <div className='text-[#09a183]'>success</div>
                }
                <label htmlFor='dropzone-file' className='w-16 h-10 bg-[#6450c2] rounded-full flex justify-center items-center hover:bg-[#E9605A]'>
                    <FaFolderOpen className='text-xl text-white' />
                </label>
            </div>
        </div>
    )
}

export default FileInput