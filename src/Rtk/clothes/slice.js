import { createSlice } from "@reduxjs/toolkit";

export const clothesSlice = createSlice({
    name: "clothes",
    initialState: {
        items: [],
    },
    reducers: {
        setItems(state,action) {
            state.items = action.payload
        },
        clearItems(state) {
            state.items = []
        }
    }
})

export const {setItems, clearItems} = clothesSlice.actions;

export const selectClothes = (state) => state.clothes;


export default clothesSlice.reducer;