import { Field, InvoiceState, Item } from "@/types/InvoiceTypes";
import mongoose, { Schema, Types } from "mongoose";

const FieldSchema = new Schema<Field>({
    label: { type: String, required: true },
    value: { type: Schema.Types.Mixed }
});

const ItemSchema = new Schema<Item>({
    item: { type: String },
    quantity: { type: Number },
    rate: { type: Number }
});

interface InvoiceWithUserId extends InvoiceState {
    userId: Types.ObjectId;
}

const InvoiceSchema = new Schema<InvoiceWithUserId>({
    userId: { type: Schema.Types.ObjectId, required: true },
    invoiceId: { type: FieldSchema, required: true },
    invoiceDate: { type: FieldSchema, required: true },
    dueDate: { type: FieldSchema, required: true },
    from: { type: FieldSchema, required: true },
    to: { type: FieldSchema, required: true },
    items: { type: [ItemSchema], required: true },
    terms: { type: FieldSchema, required: true },
    note: { type: FieldSchema, required: true },
    subtotal: { type: FieldSchema, required: true },
    discount: { type: FieldSchema, required: true },
    shipping: { type: FieldSchema, required: true },
    tax: { type: FieldSchema, required: true },
    paid: { type: FieldSchema, required: true },
    balance: { type: FieldSchema, required: true },
    logo: { type: String, required: true }
});

const InvoiceModel = mongoose.model<InvoiceWithUserId>('Invoice', InvoiceSchema);
export default InvoiceModel;
