import { InvoiceState, Item } from '@/types/InvoiceTypes';
import { removeItem, setInvoiceField, updateItem } from './invoiceSlice';
import { AppDispatch } from '@/lib/store';

export const updateField = (dispatch: AppDispatch, field: keyof InvoiceState, key: 'label' | 'value', input: string|number) => {
    dispatch(setInvoiceField({ field, [key]: input }));
};

export const updateItemData = (dispatch: AppDispatch, index: number, item: Partial<Item>) => {
    dispatch(updateItem({ index, item }))
}

export const deleteItem = (dispatch: AppDispatch, index: number) => {
    dispatch(removeItem(index))
}
