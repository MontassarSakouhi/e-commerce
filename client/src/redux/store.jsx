import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './Products/productsSlice'

export const store = configureStore({
    reducer: {
        products: productsReducer,
    },
})