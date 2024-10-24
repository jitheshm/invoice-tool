import React from 'react'
import { FaFolderOpen } from "react-icons/fa";


function FileInput() {
    return (
        <div>
            <div className='border border-[#dddddd] shadow-sm  w-full min-h-32 p-5 rounded-md '>
                <label htmlFor='dropzone-file' className='border border-dashed border-[#aaaaaa] w-full min-h-20 flex justify-center hover:border-2 active:border-[#5acde2] active:border-solid'>
                    <img src="/default.png" alt="" />
                    <input
                        id={`dropzone-file`}
                        type="file"
                        accept="image/*"
                        // onChange={handleImageChange}
                        className="hidden"
                    />
                </label>
            </div>
            <div className='flex justify-center mt-2'>
                <label htmlFor='dropzone-file' className='w-16 h-10 bg-[#6450c2] rounded-full flex justify-center items-center hover:bg-[#E9605A]'>
                    <FaFolderOpen className='text-xl text-white' />
                </label>
            </div>
        </div>
    )
}

export default FileInput