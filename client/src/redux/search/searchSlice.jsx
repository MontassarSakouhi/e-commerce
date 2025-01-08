import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    showSearch: false,
    search: ''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {

        toggleSearch: (state, action) => {
            state.showSearch = action.payload

        },
        itemsSearch: (state, action) => {
            state.search = action.payload

        },

    },
})

export const { toggleSearch, itemsSearch } = searchSlice.actions

export default searchSlice.reducer