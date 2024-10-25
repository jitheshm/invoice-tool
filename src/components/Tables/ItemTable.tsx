import React from 'react'
import InputField from '../common/InputField'
import Button from '../common/Button'
import { IoIosAdd } from "react-icons/io";

function ItemTable() {
    return (
        <div className="w-full">
            <table className="w-full table-fixed ">
                <thead className=' border-y-2 border-gray-300'>
                    <tr>
                        <th className="w-1/12 px-4 py-2 ">#</th> {/* Index column */}
                        <th className="w-1/5 px-4 py-2 ">Item</th>
                        <th className="w-1/5 px-4 py-2 ">Quantity</th>
                        <th className="w-1/5 px-4 py-2 ">Rate</th>
                        <th className="w-1/5 px-4 py-2 ">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-2 py-1  text-center">1</td>
                        <td className="px-2 py-1  truncate">
                            <InputField className='border-[#ffca58] border-solid border-[1px] rounded-sm !py-0 h-[25px] flex' type='text' placeholder='Description' inputClass='h-full' />
                        </td>
                        <td className="px-2 py-1  truncate">
                            <InputField className='border-[#ffca58] border-solid border-[1px] rounded-sm !py-0 h-[25px] flex' type='text' placeholder='Quantity' />
                        </td>
                        <td className="px-2 py-1  truncate">
                            <InputField className='border-[#ffca58] border-solid border-[1px] rounded-sm !py-0 h-[25px] flex' type='text' placeholder='Rate' />
                        </td>
                        <td className="px-2 py-1  truncate">
                        </td>

                    </tr>

                </tbody>
            </table>
            <div className='mt-4'>
                <Button className='w-24 h-8 text-sm' icon={<IoIosAdd />} name='Add Item'/>
            </div>
        </div>
    )
}

export default ItemTable
