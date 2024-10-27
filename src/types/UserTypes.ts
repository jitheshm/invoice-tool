export interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface ValidationErrors {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    form?: string
}