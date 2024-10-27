import { useState } from 'react';
import { FormData, ValidationErrors } from '@/types/UserTypes';
import { useRouter } from 'next/navigation'
import { validateFormData } from '@/lib/utils/validations/loginValidation';

const useLoginForm = () => {
    const [formData, setFormData] = useState<Partial<FormData>>({
        email: '',
        password: '',
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

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            try {
                const result = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password,
                    }),
                })
                if (result.status != 200) {
                    const res = await result.json()
                    console.log(res)
                    setErrors({ form: res.message })

                } else {
                    router.push('/')
                }


            } catch (error) {
                console.log(error)
                setErrors({ form: "Something went wrong. Try again later" })
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

export default useLoginForm;
