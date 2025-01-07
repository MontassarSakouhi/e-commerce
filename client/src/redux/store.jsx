import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './Products/productsSlice'
import filtersReducer from './Filters/filtersSlice'

export const store = configureStore({
    reducer: {
        products: productsReducer,
        filters: filtersReducer,
    },
})