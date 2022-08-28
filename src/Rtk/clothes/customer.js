import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [], 
    },
    reducers: {
        pushItems(state,action) {
            state.items.push(action.payload)
        },
        removeItems(state) {
            state.items = []
        }
    }
})


export const {removeItems, pushItems} = cartSlice.actions;




export default cartSlice.reducer;