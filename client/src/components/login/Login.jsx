import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Axios } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';


const LoginRegister = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [errors, setErrors] = useState('')
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const loginFormik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email format').required('Email is required'),
            password: Yup.string().min(6, 'Password should be at least 6 characters').required('Password is required'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await Axios.post('/user/login', values);

                const { token, user } = response.data;
                

                localStorage.setItem('token', token);

                if (user.isAdmin) {
                    navigate('/admin/add')
                }
            } catch (error) {
                console.error("Login failed:", error);
            }
        },
    })

    const registerFormik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First name is required'),
            lastName: Yup.string().required('Last name is required'),
            email: Yup.string().email('Invalid email format').required('Email is required'),
            password: Yup.string().min(6, 'Password should be at least 6 characters').required('Password is required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                setLoading(true)
                await Axios.post('/user/register', values)

                setIsLogin(true)
                setLoading(false)
                toast.success('Registered successfully') 
                //zeaeaze
                resetForm({ firstName: '', lastName: '', email: '', password: '' });


            } catch (error) {
                setLoading(false)
                setErrors(error.response?.data?.message || 'Something went wrong. Please try again.')
            }

        },
    })

    return (
        <div className="p-6 w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">{isLogin ? 'Login' : 'Create Account'}</h2>
            {isLogin ? (
                <form onSubmit={loginFormik.handleSubmit} className="flex flex-col">
                    <input
                        className="border rounded-md p-2 mb-3"
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={loginFormik.values.email}
                        onChange={loginFormik.handleChange}
                        onBlur={loginFormik.handleBlur}
                    />
                    {loginFormik.touched.email && loginFormik.errors.email && (
                        <div className="text-red-500 text-sm">{loginFormik.errors.email}</div>
                    )}

                    <input
                        className="border rounded-md p-2 mb-3"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={loginFormik.values.password}
                        onChange={loginFormik.handleChange}
                        onBlur={loginFormik.handleBlur}
                    />
                    {loginFormik.touched.password && loginFormik.errors.password && (
                        <div className="text-red-500 text-sm">{loginFormik.errors.password}</div>
                    )}

                    <div className="flex justify-between text-sm text-gray-600 mt-3">
                        <a href="#" className="hover:underline">Forgot your password?</a>
                        <span
                            className="cursor-pointer hover:underline"
                            onClick={() => setIsLogin(false)}
                        >
                            Create account
                        </span>
                    </div>

                    <button className="bg-gray-400 text-white rounded-md py-2 mt-5" type="submit">
                        Sign In
                    </button>
                </form>
            ) : (
                <form onSubmit={registerFormik.handleSubmit} className="flex flex-col">
                    <input
                        className="border rounded-md p-2 mb-3"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={registerFormik.values.firstName}
                        onChange={registerFormik.handleChange}
                        onBlur={registerFormik.handleBlur}
                    />
                    {registerFormik.touched.firstName && registerFormik.errors.firstName && (
                        <div className="text-red-500 text-sm">{registerFormik.errors.firstName}</div>
                    )}

                    <input
                        className="border rounded-md p-2 mb-3"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={registerFormik.values.lastName}
                        onChange={registerFormik.handleChange}
                        onBlur={registerFormik.handleBlur}
                    />
                    {registerFormik.touched.lastName && registerFormik.errors.lastName && (
                        <div className="text-red-500 text-sm">{registerFormik.errors.lastName}</div>
                    )}

                    <input
                        className="border rounded-md p-2 mb-3"
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={registerFormik.values.email}
                        onChange={registerFormik.handleChange}
                        onBlur={registerFormik.handleBlur}
                    />
                    {registerFormik.touched.email && registerFormik.errors.email && (
                        <div className="text-red-500 text-sm">{registerFormik.errors.email}</div>
                    )}

                    <input
                        className="border rounded-md p-2 mb-3"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={registerFormik.values.password}
                        onChange={registerFormik.handleChange}
                        onBlur={registerFormik.handleBlur}
                    />
                    {registerFormik.touched.password && registerFormik.errors.password && (
                        <div className="text-red-500 text-sm">{registerFormik.errors.password}</div>
                    )}

                    <div className="flex justify-between text-sm text-gray-600 mt-3">

                        <span
                            className="cursor-pointer underline hover:text-blue-500 "
                            onClick={() => {
                                setIsLogin(true)
                            }
                            }
                        >
                            I already got an account
                        </span>
                        {errors && <div className="text-red-500 text-sm mb-3">{errors}</div>}

                    </div>

                    <button className={`bg-gray-400 text-white rounded-md py-2 mt-5  ${loading ? 'disabled ' : ''}   `} type="submit">
                        {loading ? <Spin className='text-white' indicator={<LoadingOutlined spin />} size="medium" />

                            : 'Create Account'}
                    </button>
                </form>
            )}
        </div>
    )
}

export default LoginRegister
