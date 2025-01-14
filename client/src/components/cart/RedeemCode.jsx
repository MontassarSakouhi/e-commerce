import React, { useState } from 'react';
import { Button, Modal, Input, message } from 'antd';
import { TicketPercent, ChevronRight, BookCheck } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setValidCode } from '../../redux/cart/cartSlice';
import { Axios } from '../../services/api';


const RedeemCode = () => {
    const [code, setCode] = useState('');
    const dispatch = useDispatch();
    const validCode = useSelector((state) => state.cart.validCode);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');



    const handleClick = () => {
        if (!validCode) {
            setIsModalOpen(true);
        }

    };

    const handleOk = async () => {


        try {
            const response = await Axios.post('/voucher/verify', { voucher: code })
            if (response.status === 200) {
                dispatch(setValidCode(true));
                setIsModalOpen(false);
                setErrorMessage('');
            }

        } catch (error) {
            if (!error.response) {
                console.error("Network error. Please try again later.");
            }

            else if (error.response.data.message === 'Invalid voucher' && error.response.status === 404) {
                setErrorMessage(error.response.data.message || 'Bad Request. Please check your input.');
            }
            else if (error.response.data.message === 'Voucher has expired' && error.response.status === 404) {
                setErrorMessage(error.response.data.message || 'Bad Request. Please check your input.');
            }
            else if (error.response.data.message === 'Voucher is already used' && error.response.status === 404) {
                setErrorMessage(error.response.data.message || 'Bad Request. Please check your input.');
            }
            else {
                setErrorMessage('Something went wrong, please try again!');
            }


        }

    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div onClick={handleClick} className={`flex gap-3 items-center py-2 pl-4 border-b-[1px]  montserrat ${!validCode && 'cursor-pointer'} `} >
                {validCode ? <BookCheck /> : <TicketPercent />}
                <span className='text-[13px] flex items-center justify-between w-full font-medium text-black'>
                    {validCode ? 'Code valid!' : 'Do you have a promotional code?'}
                    {!validCode && <ChevronRight size={20} />}
                </span>
            </div>

            <Modal
                title="Redeem Code"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Validate Code"
                cancelText="Cancel"
                footer={[
                    <Button
                        key="submit"
                        className="w-full rounded-full bg-gray-600 text-white py-5"
                        onClick={handleOk}
                    >
                        Validate Code
                    </Button>
                ]}
                style={{
                    top: '50%',
                    transform: 'translateY(-50%)',
                }}
            >
                <Input
                    placeholder="Enter code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
                {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
            </Modal>
        </div>
    );
};

export default RedeemCode;
