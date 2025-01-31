import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isAuth:false,
    profileDrawerVisible:false
}

export const authSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {

        toggleIsAuth: (state, action) => {
            state.isAuth = action.payload

        },
        toggleDrawer: (state, action) => {
            state.profileDrawerVisible = action.payload

        },
        
       
       

    },
})

export const { toggleIsAuth,toggleDrawer } = authSlice.actions

export default authSlice.reducer