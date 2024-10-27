import { FormData, ValidationErrors } from "@/types/UserTypes";
import { z } from "zod";

const loginSchema = z.object({
    email: z.string().trim().email({ message: "Invalid email address" }),
    password: z.string().trim().min(6, { message: "Password must be at least 6 characters long" }),
});

export const validateFormData = (data: Partial<FormData>): ValidationErrors => {
    try {
        loginSchema.parse(data);
        return {};
    } catch (error) {
        if (error instanceof z.ZodError) {
            const validationErrors: ValidationErrors = {};
            error.errors.forEach((err) => {
                validationErrors[err.path[0] as keyof ValidationErrors] = err.message;
            });
            return validationErrors;
        }
        return {};
    }
};