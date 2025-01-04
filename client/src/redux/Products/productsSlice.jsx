import { createSlice, current } from '@reduxjs/toolkit'
import { products } from '../../assets/assets/assets'

const initialState = {
    products,
    currency: 'TND',
    delivery_fee: 10

}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

        // incrementByAmount: (state, action) => {
        //   state.value += action.payload
        // },
    },
})

// export const { incrementByAmount } = productsSlice.actions

export default productsSlice.reducer