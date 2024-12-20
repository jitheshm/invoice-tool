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
    subtotal: { label: 'Subtotal' },
    discount: { label: 'Discount', value: '' },
    shipping: { label: 'Shipping', value: '' },
    tax: { label: 'Tax', value: 0 },
    paid: { label: 'Paid', value: 0 },
    balance: { label: 'Balance Due' },
    logo: ''
};

const invoiceSlice = createSlice({
    name: 'invoice',
    initialState,
    reducers: {
        setInvoiceField: (state, action: PayloadAction<{ field: keyof InvoiceState; label?: string; value?: number | string }>) => {
            const { field, label, value } = action.payload;
            if (state[field] && field != 'items' && field != 'logo') {
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
        setImage: (state, action: PayloadAction<string>) => {
            state.logo = action.payload
        },

        resetInvoice: () => initialState,
    },
});

export const { setInvoiceField, addItem, updateItem, removeItem, resetInvoice,setImage } = invoiceSlice.actions;

export default invoiceSlice.reducer;
