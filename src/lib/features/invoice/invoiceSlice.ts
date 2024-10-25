import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Field {
    label: string;
    value: string | number;
}

interface Item {
    item?: string;
    quantity?: number;
    rate?: number;

}

interface InvoiceState {
    invoiceId: Field;
    invoiceDate: Field;
    dueDate: Field;
    from: Field;
    to: Field;
    items: Item[];
    terms: Field;
    note: Field;
    subtotal: Field;
    discount: Field;
    shipping: Field;
    tax: Field;
    paid: Field;
}

const initialState: InvoiceState = {
    invoiceId: { label: 'Invoice ID', value: 'INVOICE' },
    invoiceDate: { label: 'Invoice Date', value: '' },
    dueDate: { label: 'Due Date', value: '' },
    from: { label: 'From', value: '' },
    to: { label: 'To', value: '' },
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
        updateItem: (state, action: PayloadAction<{ index: number; item: Partial<Item> }>) => {
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
