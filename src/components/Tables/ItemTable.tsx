"use client"
import React, { useEffect, useState } from 'react'
import InputField from '../common/InputField'
import Button from '../common/Button'
import { IoIosAdd } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { updateItemData } from '@/lib/features/invoice/invoiceUtils';
import { addItem } from '@/lib/features/invoice/invoiceSlice';

function ItemTable() {

    const { items } = useSelector((state: RootState) => state.invoice);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    }, []);

    if (!loading) return null;

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
                    {
                        items.map((ele, index) => {
                            return (
                                <tr key={index + ele.item}>
                                    <td className="px-2 py-1  text-center">{index + 1}</td>
                                    <td className="px-2 py-1  truncate">
                                        <InputField
                                            className='border-[#ffca58] border-solid border-[1px] rounded-sm !py-0 h-[25px] flex'
                                            type='text'
                                            placeholder='Description'
                                            inputClass='h-full'
                                            value={ele.item}
                                            onChange={(e) => updateItemData(dispatch, index, { item: e.target.value })}
                                        />
                                    </td>
                                    <td className="px-2 py-1  truncate">
                                        <InputField
                                            className='border-[#ffca58] border-solid border-[1px] rounded-sm !py-0 h-[25px] flex'
                                            type='number'
                                            placeholder='Quantity'
                                            value={ele.quantity}
                                            onChange={(e) => updateItemData(dispatch, index, { quantity: e.target.value ? parseFloat(e.target.value) : undefined })}
                                        />
                                    </td>
                                    <td className="px-2 py-1  truncate">
                                        <InputField
                                            className='border-[#ffca58] border-solid border-[1px] rounded-sm !py-0 h-[25px] flex'
                                            type='text'
                                            placeholder='Rate'
                                            value={ele.rate}
                                            onChange={(e) => updateItemData(dispatch, index, { rate: e.target.value ? parseFloat(e.target.value) : undefined })}
                                        />
                                    </td>
                                    <td className="px-2 py-1  truncate text-end">
                                        {ele.quantity && ele.rate ? ele.quantity * ele.rate : 0.00}
                                    </td>

                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>
            <div className='mt-4'>
                <Button onClick={() => dispatch(addItem())} className='w-24 h-8 text-sm' icon={<IoIosAdd />} name='Add Item' />
            </div>
        </div>
    )
}

export default ItemTable
