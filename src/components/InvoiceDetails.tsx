"use client"
import React from 'react'
import InputGroup from './common/InputGroup'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/store';
import { updateField } from '@/lib/features/invoice/invoiceUtils';
import { IError } from '@/lib/features/errors/errorSlice';

function InvoiceDetails() {

    const { invoiceId, invoiceDate, dueDate } = useSelector((state: RootState) => state.invoice);
    const error = useSelector((state: RootState) => state.errors);
    const dispatch = useDispatch();

    return (
        <>
            <InputGroup
                error={error.errors.invoiceId as IError | undefined}
                type='text'
                fOnChange={(e) => updateField(dispatch, "invoiceId", "label", e.target.value)}
                lOnChange={(e) => updateField(dispatch, "invoiceId", "value", e.target.value)}
                fValue={invoiceId.label}
                lValue={invoiceId.value as string}>
                <div className='w-[30px] flex-shrink-0 flex-grow-0 border-[#ffca58] border-solid border-[1px] text-center text-[#495057]'>#</div>
            </InputGroup>
            <InputGroup
                error={error.errors.invoiceDate as IError | undefined}
                type='date'
                fOnChange={(e) => updateField(dispatch, "invoiceDate", "label", e.target.value)}
                lOnChange={(e) => updateField(dispatch, "invoiceDate", "value", e.target.value)}
                fValue={invoiceDate.label}
                lValue={invoiceDate.value as string}
            />
            <InputGroup
                error={error.errors.dueDate as IError | undefined}
                type='date'
                fOnChange={(e) => updateField(dispatch, "dueDate", "label", e.target.value)}
                lOnChange={(e) => updateField(dispatch, "dueDate", "value", e.target.value)}
                fValue={dueDate.label}
                lValue={dueDate.value as string}
            />
        </>
    );
}

export default InvoiceDetails;
