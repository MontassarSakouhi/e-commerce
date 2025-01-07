import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    filters: []

}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {

        updateFilters: (state, action) => {
            state.filters = action.payload
        },
    },
})

export const { updateFilters } = filtersSlice.actions

export default filtersSlice.reducer