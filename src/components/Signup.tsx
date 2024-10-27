"use client";
import React, { useEffect } from 'react';
import InputField from './common/InputField';
import Link from 'next/link';
import useSignupForm from '@/hooks/componentHooks/useSignupForm';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { useRouter } from 'next/navigation';

const SignupForm: React.FC = () => {
    const { formData, errors, handleChange, handleSubmit } = useSignupForm();

    const { userInfo } = useSelector((state: RootState) => state.user);
    const router = useRouter()
    useEffect(() => {
        if (userInfo.verified) {
            router.push('/')
        }
    }, [userInfo.verified])

    return (
        <>
            {
                !userInfo.verified && <div className="flex items-center justify-center min-h-screen">
                    <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
                        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
                        {
                            errors.form && <p className="text-red-500 text-sm text-center">{errors.form}</p>
                        }
                        <form onSubmit={handleSubmit} method="post">
                            <div className="mb-4">
                                <InputField
                                    type="text"
                                    inputClass={`p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring focus:ring-blue-300`}
                                    value={formData.name}
                                    placeholder="John Doe"
                                    name="name"
                                    onChange={handleChange}
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            </div>

                            <div className="mb-4">
                                <InputField
                                    type="email"
                                    inputClass={`p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring focus:ring-blue-300`}
                                    value={formData.email}
                                    placeholder="you@example.com"
                                    name="email"
                                    onChange={handleChange}
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>

                            <div className="mb-4">
                                <InputField
                                    type="password"
                                    inputClass={`p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring focus:ring-blue-300`}
                                    value={formData.password}
                                    placeholder="********"
                                    name="password"
                                    onChange={handleChange}
                                />
                                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                            </div>

                            <div className="mb-4">
                                <InputField
                                    type="password"
                                    inputClass={`p-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring focus:ring-blue-300`}
                                    value={formData.confirmPassword}
                                    placeholder="Confirm Password"
                                    name="confirmPassword" // New input field
                                    onChange={handleChange}
                                />
                                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                            </div>

                            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-200">
                                Sign Up
                            </button>
                        </form>
                        <p className="mt-4 text-center text-sm text-gray-600">
                            Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
                        </p>
                    </div>
                </div>
            }
        </>
    );
};

export default SignupForm;
