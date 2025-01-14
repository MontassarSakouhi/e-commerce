import { Trash2 } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../../redux/cart/cartSlice';
import { message } from 'antd';

const DeleteCartItem = ({ _id, size }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteFromCart({ _id, size }));
        message.success('Item deleted successfully');
    };

    return (
        <div>
            <button
                onClick={handleDelete}
                className="bg-gray-100 font-bold ml-4 border-[1px] rounded-full p-[5px]"
            >
                <Trash2 />
            </button>
        </div>
    );
};

export default DeleteCartItem;
