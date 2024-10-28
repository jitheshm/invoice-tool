"use client"
import useUpload from '@/hooks/componentHooks/useUpload';
import React from 'react'
import { FaFolderOpen } from "react-icons/fa";



function FileInput() {
    const {handleImageChange,loading,upload,logo} = useUpload()

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