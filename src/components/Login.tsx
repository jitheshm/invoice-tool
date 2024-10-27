"use client";
import React from 'react';
import InputField from './common/InputField';
import Link from 'next/link';
import useLoginForm from '@/hooks/componentHooks/useLoginForm';

const Login: React.FC = () => {
    const { formData, errors, handleChange, handleSubmit } = useLoginForm();

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Login to Your Account</h2>
                {
                    errors.form && <p className="text-red-500 text-sm text-center">{errors.form}</p>
                }
                <form onSubmit={handleSubmit} method="post">
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

                    <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-200">
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don’t have an account? <Link href="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
