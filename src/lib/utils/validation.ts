import { z } from 'zod';
import { InvoiceState } from '@/types/InvoiceTypes';
import { IError } from '../features/errors/errorSlice';

const dateRegex = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

const FieldSchema = z.object({
    label: z.string().nonempty('Label is required'),
    value: z.string().nonempty('Value is required'),
});

const FieldNumberSchema = z.object({
    label: z.string().nonempty('Label is required'),
    value: z.number().nonnegative('Rate cannot be negative'),
});

const WithoutValueSchema = z.object({
    label: z.string().nonempty('Label is required'),
});

const DateFieldSchema = z.object({
    label: z.string().nonempty('Label is required'),
    value: z
        .string()
        .nonempty('Date is required')
        .regex(dateRegex, 'Date must be in dd/mm/yyyy format'),
});

const ItemSchema = z.object({
    item: z.string().nonempty('Item name is required'),
    quantity: z.number().positive('Quantity must be greater than zero'),
    rate: z.number().nonnegative('Rate cannot be negative'),
});

const InvoiceSchema = z.object({
    invoiceId: FieldSchema,
    invoiceDate: DateFieldSchema,
    dueDate: DateFieldSchema,
    from: FieldSchema,
    to: FieldSchema,
    items: z.array(ItemSchema).min(1, 'At least one item is required'),
    terms: FieldSchema,
    note: FieldSchema,
    subtotal: WithoutValueSchema,
    discount: WithoutValueSchema,
    shipping: WithoutValueSchema,
    tax: FieldNumberSchema,
    paid: WithoutValueSchema,
    balance: WithoutValueSchema,
});

export const validateInvoice = (invoice: InvoiceState) => {
    const result = InvoiceSchema.safeParse(invoice);
    const errors: IError = {};

    if (!result.success) {
        result.error.errors.forEach((error) => {
            let current = errors;
            error.path.forEach((segment, index) => {
                // Convert array indices to strings to allow for dynamic object keys
                const key = typeof segment === 'number' ? `[${segment}]` : segment;

                if (index === error.path.length - 1) {
                    // Assign the error message at the final path segment
                    current[key] = error.message;
                } else {
                    // Initialize nested objects if they don't exist
                    current[key] = current[key] || {};
                    current = current[key] as IError;
                }
            });
        });
    }

    return { errors };
};
