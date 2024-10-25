"use client"
import React from 'react'
import DescriptioGroup from './common/DescriptionGroup'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { updateField } from '@/lib/features/invoice/invoiceUtils';

function InvoiceDescription() {

    const { from, to } = useSelector((state: RootState) => state.invoice);
    const dispatch = useDispatch();

    return (
        <>
            <div className='w-full md:w-1/2 md:px-2'>
                <DescriptioGroup
                    placeholder='Who is this invoice from?'
                    labelValue={from.label}
                    textValue={from.value as string}
                    labelOnChange={(e) => updateField(dispatch, "from", "label", e.target.value)}
                    textOnChange={(e) => updateField(dispatch, "from", "value", e.target.value)}
                />
            </div>
            <div className='w-full md:w-1/2 md:px-2'>
                <DescriptioGroup
                    placeholder='Who is this invoice to?'
                    labelValue={to.label}
                    textValue={to.value as string}
                    labelOnChange={(e) => updateField(dispatch, "to", "label", e.target.value)}
                    textOnChange={(e) => updateField(dispatch, "to", "value", e.target.value)}
                />
            </div>
        </>
    )
}

export default InvoiceDescription