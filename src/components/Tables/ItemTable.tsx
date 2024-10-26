"use client"
import React, { useEffect, useState } from 'react';
import Button from '../common/Button';
import { IoIosAdd } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { addItem } from '@/lib/features/invoice/invoiceSlice';
import TableRow from './TableRow';



function ItemTable() {
    const { items } = useSelector((state: RootState) => state.invoice);
    const error = useSelector((state: RootState) => state.errors);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    }, []);

    if (!loading) return null;

    return (
        <div className="w-full">
            <table className="w-full table-fixed">
                <thead className='border-y-2 border-gray-300'>
                    <tr>
                        <th className="w-1/12 px-4 py-2">#</th>
                        <th className="w-1/5 px-4 py-2">Item</th>
                        <th className="w-1/5 px-4 py-2">Quantity</th>
                        <th className="w-1/5 px-4 py-2">Rate</th>
                        <th className="w-1/5 px-4 py-2">Amount</th>
                    </tr>
                </thead>
                <tbody className='group'>
                    {items.map((ele, index) => (
                        <TableRow key={index} index={index} ele={ele} dispatch={dispatch} />
                    ))}
                </tbody>
            </table>
            {
                error.errors.items &&( typeof (error.errors.items) === 'string' ? <div className="text-red-600 text-sm">{error.errors.items}</div> : <div className="text-red-600 text-sm">All fields required</div>)
            }
            <div className='mt-4'>
                <Button onClick={() => dispatch(addItem())} className='w-24 h-8 text-sm' icon={<IoIosAdd />} name='Add Item' />
            </div>
        </div>
    );
}

export default ItemTable;
