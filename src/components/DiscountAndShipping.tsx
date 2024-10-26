"use client"
import React, { useEffect, useState } from 'react'
import InputGroup from './common/InputGroup'
import Button from './common/Button'
import { VscDiffAdded } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { updateField } from '@/lib/features/invoice/invoiceUtils';
import useSubtotal from '@/hooks/useSubtotal';
import { CiSquareMinus } from "react-icons/ci";
import useTotal from '@/hooks/useTotal';
import useBalance from '@/hooks/useBalance';


function DiscountAndShipping() {
    const { subtotal, discount, shipping, tax, paid, balance } = useSelector((state: RootState) => state.invoice);
    const dispatch = useDispatch();
    const subtotalValue = useSubtotal()
    const total = useTotal()
    const balanceAmount = useBalance()

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    }, []);

    if (!loading) return null;

    return (
        <>
            <div className='ps-16 md:ps-40 mt-4 w-full md:w-1/2'>
                <InputGroup type='number'
                    fClassName='!w-[120px]'
                    fValue={subtotal.label}
                    fOnChange={(e) => updateField(dispatch, "subtotal", "label", e.target.value)}
                    lValue={subtotalValue}
                />
                <div className='flex flex-wrap'>
                    {
                        typeof (discount.value) === 'string' && <Button onClick={() => updateField(dispatch, "discount", "value", parseFloat('0'))} name='Discounts' className='text-md px-2 p-2 w-fit !bg-transparent !text-[#e9605a] hover:bg-transparent hover:cursor-pointer hover:underline ' icon={<VscDiffAdded />} iconClass='text-[#AAAAAA] mx-2' />
                    }
                    {
                        typeof (shipping.value) === 'string' && <Button onClick={() => updateField(dispatch, "shipping", "value", parseFloat('0'))} name='Shipping' className='text-md px-2 p-2 w-fit !bg-transparent !text-[#e9605a] hover:bg-transparent hover:cursor-pointer hover:underline ' icon={<VscDiffAdded />} iconClass='text-[#AAAAAA] mx-2' />
                    }

                    {
                        typeof (discount.value) === "number" &&
                        <div className='w-full flex'>
                            <InputGroup type='number'
                                fClassName='!w-[120px]'
                                lClassName='rounded-e-none'
                                fValue={discount.label}
                                fOnChange={(e) => updateField(dispatch, "discount", "label", e.target.value)}
                                lValue={discount.value!}
                                lOnChange={(e) => updateField(dispatch, "discount", "value", parseFloat(e.target.value))}
                            />
                            <div className='w-10 mt-2 border-[#ffca58] border-solid border-[1px] border-s-[0.5px] rounded-e-full flex justify-center items-center'>
                                <Button onClick={() => updateField(dispatch, "discount", "value", '')} className='text-md px-2 p-2 w-fit !bg-transparent !text-[#e9605a] hover:bg-transparent hover:cursor-pointer ' icon={<CiSquareMinus />} iconClass='text-[#AAAAAA] mx-2' />
                            </div>
                        </div>



                    }
                    {
                        typeof (shipping.value) === "number" &&
                        <div className='w-full flex'>
                            <InputGroup type='number'
                                fClassName='!w-[120px]'
                                lClassName='rounded-e-none'
                                fValue={shipping.label}
                                fOnChange={(e) => updateField(dispatch, "shipping", "label", e.target.value)}
                                lValue={shipping.value!}
                                lOnChange={(e) => updateField(dispatch, "shipping", "value", parseFloat(e.target.value))}
                            />
                            <div className='w-10 mt-2 border-[#ffca58] border-solid border-[1px] border-s-[0.5px] rounded-e-full flex justify-center items-center'>
                                <Button onClick={() => updateField(dispatch, "shipping", "value", '')} className='text-md px-2 p-2 w-fit !bg-transparent !text-[#e9605a] hover:bg-transparent hover:cursor-pointer hover:underline ' icon={<CiSquareMinus />} iconClass='text-[#AAAAAA] mx-2' />
                            </div>
                        </div>

                    }
                </div>





                <div className='w-full flex'>
                    <InputGroup
                        fValue={tax.label}
                        lValue={tax.value!}
                        type='text'
                        fClassName='!w-[120px]'
                        lClassName='rounded-e-none'
                        fOnChange={(e) => updateField(dispatch, "tax", "label", e.target.value)}
                        lOnChange={(e) => updateField(dispatch, "tax", "value", e.target.value ? parseFloat(e.target.value) : 0)}
                    />
                    <div className='w-10 mt-2 border-[#ffca58] border-solid border-[1px] border-s-[0.5px] rounded-e-full flex justify-center items-center'>
                        <p className='text-center'>%</p>
                    </div>
                </div>
                <div className='flex w-full justify-between mt-6 font-bold'>
                    <p>Total</p>
                    <p>{total}</p>
                </div>

                <div className='mt-4'>
                    <InputGroup
                        fValue={paid.label}
                        lValue={paid.value!}
                        fOnChange={(e) => updateField(dispatch, "paid", "label", e.target.value)}
                        lOnChange={(e) => updateField(dispatch, "paid", "value", e.target.value ? parseFloat(e.target.value) : 0)}
                        type='text'
                        fClassName='!w-[120px]'
                    />
                </div>
                <div className='mt-4'>
                    <InputGroup
                        type='text'
                        fClassName='!w-[120px]'
                        fValue={balance.label}
                        fOnChange={(e) => updateField(dispatch, "balance", "label", e.target.value)}
                        lValue={balanceAmount}
                    />
                </div>
            </div>
        </>
    )
}

export default DiscountAndShipping