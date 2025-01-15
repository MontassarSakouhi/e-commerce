import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Title from '../components/title/Title';
import { useSelector } from 'react-redux';
import { assets } from '../assets/assets/assets';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    phone: ''
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    street: Yup.string().required('Street is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zipcode: Yup.string().required('Zipcode is required'),
    phone: Yup.string().required('Phone number is required')
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  const { currency } = useSelector(state => state.products)
  const { totalPrice, shippingFee } = useSelector(state => state.cart)
  const [paymentMethod, setPaymentMethod] = useState('cash')
const navigate=useNavigate()

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className='flex flex-col sm:flex-row sm:justify-between  sm:items-start p-4'>
          <div className="mb-4">
            <div className="mr-[100px]"><Title text1={'DELIVERY'} text2={'INFORMATION'} /></div>

            <div className='flex space-x-4 mb-4'>
              <div className="flex flex-col w-1/2">
                <Field
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="border rounded-lg p-2 mb-2"
                  placeholder="First Name"
                />
                <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="flex flex-col w-1/2">
                <Field
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="border rounded-lg p-2 mb-2"
                  placeholder="Last Name"
                />
                <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <Field
                type="email"
                name="email"
                id="email"
                className="border rounded-lg p-2 mb-2"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="flex flex-col mb-4">
              <Field
                type="text"
                name="street"
                id="street"
                className="border rounded-lg p-2 mb-2"
                placeholder="Street Address"
              />
              <ErrorMessage name="street" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="flex space-x-4 mb-4">
              <div className="flex flex-col w-1/2">
                <Field
                  type="text"
                  name="city"
                  id="city"
                  className="border rounded-lg p-2 mb-2"
                  placeholder="City"
                />
                <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="flex flex-col w-1/2">
                <Field
                  type="text"
                  name="state"
                  id="state"
                  className="border rounded-lg p-2 mb-2"
                  placeholder="State"
                />
                <ErrorMessage name="state" component="div" className="text-red-500 text-sm" />
              </div>
            </div>
            <div className="flex space-x-4 mb-4">
              <div className="flex flex-col w-1/2">
                <Field
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  className="border rounded-lg p-2 mb-2"
                  placeholder="Zipcode"
                />
                <ErrorMessage name="zipcode" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="flex flex-col w-1/2">
                <Field
                  type="text"
                  name="phone"
                  id="phone"
                  className="border rounded-lg p-2 mb-2"
                  placeholder="Phone Number"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
              </div>
            </div>
          </div>
          <div className='w-[500px] sm:mt-16 ' >
            <div className='mr-[300px] '  >
              <Title text1={'CART'} text2={'TOTALS'} style={{ marginTop: '1rem', marginBottom: '1rem' }} />
            </div>
            <div>
              <div className=' flex justify-between py-2 border-b-[1px]' >
                <p> Subtotal </p>
                <p> {totalPrice} <span className='text-[13px] font-semibold ' >{currency}</span>   </p>
              </div>
              <div className=' flex justify-between py-2 border-b-[1px]' >
                <p> Shipping Fee </p>
                <p> {shippingFee} <span className='text-[13px] font-semibold ' >{currency}</span>  </p>
              </div>
              <div className=' flex justify-between py-2 ' >
                <p className='font-bold' > Total </p>
                <p> {totalPrice ? totalPrice + 7 : '0'}  <span className='text-[13px] font-semibold ' >{currency}</span></p>
              </div>
              <div  className='flex gap-3 justify-around py-4 flex-row' >
                <div onClick={() => setPaymentMethod('cash')} className='flex items-center gap-3 border rounded-xl px-5 py-2 cursor-pointer ' >
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'cash' && 'bg-green-400'} `} ></p>
                  <p className='font-semibold' >CASH ON DELIVERY</p>
                </div>
                <div onClick={() => setPaymentMethod('razorpay')} className='flex items-center gap-3 border rounded-xl px-5 py-2 cursor-pointer ' >
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'razorpay' && 'bg-green-400'} `} ></p>
                  <img src={assets.razorpay_logo} alt="" />
                </div>
              </div>
              <div className='flex justify-center' >
                <button onClick={()=>{
                  if(paymentMethod){
                    navigate('/orders')
                  }
                }} className='w-[350px] bg-gray-400 active:bg-gray-500 py-2 rounded-full font-semibold text-white align-middle ' >PLACE ORDER</button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>


  );
};

export default PlaceOrder;
