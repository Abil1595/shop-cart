import { configureStore } from "@reduxjs/toolkit";
import { getTotals } from "./cartSlice";
import cartSlice from "./cartSlice";
const store=configureStore({
    reducer:{
        cart:cartSlice,
    }
});
store.dispatch(getTotals());
export default store