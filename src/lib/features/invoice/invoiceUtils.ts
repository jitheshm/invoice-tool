import { InvoiceState, Item } from '@/types/InvoiceTypes';
import { setInvoiceField, updateItem } from './invoiceSlice';
import { AppDispatch } from '@/lib/store';

export const updateField = (dispatch: AppDispatch, field: keyof InvoiceState, key: 'label' | 'value', input: string) => {
    dispatch(setInvoiceField({ field, [key]: input }));
};

export const updateItemData = (dispatch: AppDispatch, index: number, item: Partial<Item>) => {
    dispatch(updateItem({ index, item }))
}
