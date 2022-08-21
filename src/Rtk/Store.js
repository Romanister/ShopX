import {configureStore} from "@reduxjs/toolkit";
import  clothesReducer  from "./clothes/slice";

const store = configureStore({
    reducer: {
        clothes: clothesReducer,
        
    }
})

export default store