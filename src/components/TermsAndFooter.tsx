"use client"
import React from 'react'
import DescriptioGroup from './common/DescriptionGroup'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { updateField } from '@/lib/features/invoice/invoiceUtils';
import { IError } from '@/lib/features/errors/errorSlice';

function TermsAndFooter() {

    const { terms, note } = useSelector((state: RootState) => state.invoice);
    const error = useSelector((state: RootState) => state.errors);

    const dispatch = useDispatch();

    return (
        <>
            <div className='md:w-1/2 w-full'>
                <DescriptioGroup
                    error={error.errors.terms as IError | undefined}
                    placeholder='Terms and conditions - late fees, payment methods, delivery schedule'
                    labelValue={terms.label}
                    textValue={terms.value as string}
                    labelOnChange={(e) => updateField(dispatch, "terms", "label", e.target.value)}
                    textOnChange={(e) => updateField(dispatch, "terms", "value", e.target.value)}
                />
                <DescriptioGroup
                    error={error.errors.note as IError | undefined}
                    placeholder='Thank you for your business'
                    labelValue={note.label}
                    textValue={note.value as string}
                    labelOnChange={(e) => updateField(dispatch, "note", "label", e.target.value)}
                    textOnChange={(e) => updateField(dispatch, "note", "value", e.target.value)}
                />

            </div>
        </>
    )
}

export default TermsAndFooter