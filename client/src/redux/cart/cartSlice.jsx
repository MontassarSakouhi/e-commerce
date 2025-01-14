import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
    cart: {},
    cartCount: 0,
    validCode: false, 

}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        updateCart: (state, action) => {
            const { size, _id } = action.payload;
            if (size) {
                if (state.cart[_id]) {
                    if (state.cart[_id][size]) {
                        state.cart[_id][size] += 1;
                    } else {
                        state.cart[_id][size] = 1;
                    }
                } else {
                    state.cart[_id] = { [size]: 1 };
                }
                state.cartCount += 1
            }
            else {
                toast.error('Select a size')
            }
        },

        updateCartQuantity: (state, action) => {
            const { _id, size, quantity } = action.payload
            if (state.cart[_id]) {
                if (state.cart[_id][size]) {
                    state.cart[_id][size] = quantity

                    state.cartCount = Object.values(state.cart).reduce((total, sizes) => {
                        return total + Object.values(sizes).reduce((sum, qty) => sum + qty, 0);
                    }, 0);
                }
            }
        },

        deleteFromCart: (state, action) => {
            const { _id, size } = action.payload;
            if (state.cart[_id] && state.cart[_id][size]) {
                const quantityToRemove = state.cart[_id][size];
                delete state.cart[_id][size];

               

                state.cartCount -= quantityToRemove;
            }
        },

        setValidCode: (state, action) => {
            state.validCode = action.payload;
        },

    },
})


export const { updateCart, updateCartQuantity,deleteFromCart,setValidCode  } = cartSlice.actions

export default cartSlice.reducer