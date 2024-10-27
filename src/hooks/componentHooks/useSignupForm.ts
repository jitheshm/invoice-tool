import { useState } from 'react';
import { validateFormData } from '@/lib/utils/validations/signupValidation';
import { FormData, ValidationErrors } from '@/types/UserTypes';
import { useRouter } from 'next/navigation'

const useSignupForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState<ValidationErrors>({});
    const router = useRouter()


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validateFormData(formData);

        if (formData.password !== formData.confirmPassword) {
            validationErrors.confirmPassword = 'Passwords do not match.';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            try {
                const result = await fetch('/api/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        password: formData.password,
                    }),
                })

                const res = await result.json()
                console.log(res)
                if (res.status != 201) {
                    setErrors({ form: res.message })

                } else {
                    router.push('/login')
                }
            } catch (error) {
                console.log(error)
            }

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
