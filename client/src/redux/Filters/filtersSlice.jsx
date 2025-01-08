import { createSlice } from '@reduxjs/toolkit'


const initialState = {

    category: [],
    subCategory: [],
    sizes: [],
    priceSort: null,


}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {

        updateCategory: (state, action) => {
            if (state.category.includes(action.payload)) {
                state.category = state.category.filter(el => el !== action.payload)
            } else { state.category.push(action.payload) }

        },
        updateSubCategory: (state, action) => {
            if (state.subCategory.includes(action.payload)) {
                state.subCategory = state.subCategory.filter(el => el !== action.payload)
            } else { state.subCategory.push(action.payload) }

        },
        updateSizes: (state, action) => {
            if (state.sizes.includes(action.payload)) {
                state.sizes = state.sizes.filter(el => el !== action.payload)
            } else { state.sizes.push(action.payload) }

        },
        updatePriceSort: (state, action) => {
            state.priceSort = action.payload

        },
    },
})

export const { updateCategory, updateSubCategory, updateSizes, updatePriceSort } = filtersSlice.actions

export default filtersSlice.reducer