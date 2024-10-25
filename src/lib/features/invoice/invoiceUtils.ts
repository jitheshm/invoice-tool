import { InvoiceState } from '@/types/InvoiceTypes';
import { setInvoiceField } from './invoiceSlice';
import { AppDispatch } from '@/lib/store';

export const updateField = (dispatch: AppDispatch, field: keyof InvoiceState, key: 'label' | 'value', input: string) => {
    dispatch(setInvoiceField({ field, [key]: input }));
};
