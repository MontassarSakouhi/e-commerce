import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './Products/productsSlice'
import filtersReducer from './Filters/filtersSlice'
import searchReducer from './search/searchSlice'

export const store = configureStore({
    reducer: {
        products: productsReducer,
        filters: filtersReducer,
        search: searchReducer,
    },
})