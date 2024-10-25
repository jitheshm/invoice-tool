import { InvoiceState, Item } from "@/types/InvoiceTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState: InvoiceState = {
    invoiceId: { label: 'INVOICE', value: '' },
    invoiceDate: { label: 'Invoice Date', value: '' },
    dueDate: { label: 'Due Date', value: '' },
    from: { label: 'Invoice from', value: '' },
    to: { label: 'Invoice to', value: '' },
    items: [],
    terms: { label: 'Terms', value: '' },
    note: { label: 'Note', value: '' },
    subtotal: { label: 'Subtotal', value: 0 },
    discount: { label: 'Discount', value: 0 },
    shipping: { label: 'Shipping', value: 0 },
    tax: { label: 'Tax', value: 0 },
    paid: { label: 'Paid', value: 0 }
};

const invoiceSlice = createSlice({
    name: 'invoice',
    initialState,
    reducers: {
        setInvoiceField: (state, action: PayloadAction<{ field: keyof InvoiceState; label?: string; value?: number | string }>) => {
            const { field, label, value } = action.payload;
            if (state[field] && field != 'items') {
                if (label !== undefined) {
                    state[field].label = label;
                }
                if (value !== undefined) {
                    state[field].value = value;
                }
            }
        },
        addItem: (state) => {
            state.items.push({});
        },
        updateItem: (state, action: PayloadAction<{ index: number; item: Partial<AppDispatch> }>) => {
            const { index, item } = action.payload;
            state.items[index] = { ...state.items[index], ...item };
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items.splice(action.payload, 1);
        },

        resetInvoice: () => initialState,
    },
});

export const { setInvoiceField, addItem, updateItem, removeItem, resetInvoice } = invoiceSlice.actions;

export default invoiceSlice.reducer;
