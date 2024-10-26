export interface Field {
    label: string;
    value?: string | number;
}

export interface Item {
    item?: string;
    quantity?: number;
    rate?: number;

}

export interface InvoiceState {
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
    balance:Field
}