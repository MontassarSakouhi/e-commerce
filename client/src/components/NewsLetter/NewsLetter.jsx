import { useFormik } from 'formik';
import * as Yup from 'yup';
import SignNewsLetter from './SignNewsLetter';
import { useState } from 'react';
import { Axios } from "../../services/api";

const NewsLetter = () => {
    const [active, setActive] = useState(false);
    const [loading, setLoading] = useState(false);
    const [handleSubmit, setHandleSubmit] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');  // New error message state

    const formik = useFormik({
        initialValues: {
            email: '',
            topic: '',
            birthdayDay: '',
            birthdayMonth: '',
            consent: false,
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
            topic: Yup.string().required('Please select a topic'),
            birthdayDay: Yup.number().min(1, 'Invalid day').max(31, 'Invalid day').required('Please enter your birth day'),
            birthdayMonth: Yup.number().min(1, 'Invalid month').max(12, 'Invalid month').required('Please enter your birth month'),
            consent: Yup.boolean().oneOf([true], '').required('You must accept the terms'),
        }),
        onSubmit: async (values) => {
            setErrorMessage('');

            try {
                const response = await Axios.post('/voucher/add', values);

                setLoading(true);
                setTimeout(() => {
                    setHandleSubmit(false);
                }, 3000);
            } catch (error) {
                if (!error.response) {
                    console.error("Network error. Please try again later.");
                }

                if (error.response && error.response.status === 400) {
                    setErrorMessage(error.response.data.message || 'Bad Request. Please check your input.');
                } else {
                    setErrorMessage('Something went wrong, please try again!');
                }
            }
        }
    });

    return (
        <div>
            {handleSubmit ? (
                <div className="flex justify-center items-center flex-col mt-[80px] sm:mt-[130px] w-[350px] mx-auto">
                    <h1 className="text-center sm:py-2 sm:text-2xl suse tracking-wide">
                        THE MOST MonStyle OF THE SEASON
                    </h1>
                    <h1 className="text-center pb-2 suse sm:text-2xl">
                        YOU’RE IN OUR NEWSLETTER!
                    </h1>
                    <p className="text-gray-700 text-center text-sm py-2 px-4">
                        Get ready to discover all the trends, collaborations, and exclusive low prices!
                    </p>
                    <form onSubmit={formik.handleSubmit} className="w-full">
                        <div className='mb-5'>
                            <input
                                onFocus={() => setActive(true)}
                                placeholder="Type your email"
                                className="w-full bg-gray-200 text-gray-700 px-1 pl-4 py-2 rounded-lg"
                                type="text"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.email && formik.touched.email && <p className="text-red-500 ml-4 text-[15px] ">{formik.errors.email}</p>}
                        </div>
                        <div className={`transition-all duration-1000 ease-in-out max-h-0 opacity-0 ${active ? 'max-h-[500px] opacity-100' : ''}`}>
                            {active && <SignNewsLetter formik={formik} />}
                        </div>

                        {errorMessage && <p className="text-red-500 ml-4 text-[15px] mb-3 ">{errorMessage}</p>}

                        <button
                            type="submit"
                            className="w-full bg-black py-2 text-lg text-white rounded-full"
                        >
                            {loading ? <p>Loading <span className="blinking-dots"><span>.</span><span>.</span><span>.</span></span></p> : "I'm in"}
                        </button>
                    </form>
                </div>
            ) : (
                <div className='flex flex-col justify-center items-center mt-[80px] sm:mt-[130px]'>
                    <h1 className='font-semibold text-2xl my-5'>THANK YOU FOR SUBSCRIBING!</h1>
                    <p>You will be informed of all the trends, collaborations, and exclusive promotions.</p>
                    <hr className='w-full h-[2px] bg-gray-400 mt-[100px]' />
                </div>
            )}
        </div>
    );
};

export default NewsLetter;
