import {configureStore} from "@reduxjs/toolkit";
import  clothesReducer  from "./clothes/slice";
import  cartReducer  from "./clothes/customer";

const store = configureStore({
    reducer: {
        clothes: clothesReducer,
        cart: cartReducer
    }
})

export default store