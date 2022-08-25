import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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


export const {setItems, clearItems, addClothes} = clothesSlice.actions;

export const selectClothes = (state) => state.clothes;


export default clothesSlice.reducer;