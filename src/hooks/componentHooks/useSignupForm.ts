import { useState } from 'react';
import { validateFormData } from '@/lib/utils/validations/signupValidation';
import { FormData, ValidationErrors } from '@/types/UserTypes';

const useSignupForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState<ValidationErrors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validateFormData(formData);

        if (formData.password !== formData.confirmPassword) {
            validationErrors.confirmPassword = 'Passwords do not match.';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log("Form submitted successfully:", formData);
            setErrors({});
        }
    };

    return {
        formData,
        errors,
        handleChange,
        handleSubmit,
    };
};

export default useSignupForm;
