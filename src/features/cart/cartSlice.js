import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data:localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[],
    itemCount:localStorage.getItem("itemCount")?parseInt(localStorage.getItem("itemCount"),10):0,
}
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addTocart: (state, action) => {
            const newItem = action.payload;  
      state.data.push(newItem);
      state.itemCount += 1;
      localStorage.setItem("data",JSON.stringify(state.data));
      localStorage.setItem("itemCount",JSON.stringify(state.itemCount));
          },
        deleteCart:(state,action)=>{
            const{id}=action.payload;
            const itemtoDelete=state.data.find(item=>item.id===id)
            if(itemtoDelete)
                {
                    state.data=state.data.filter(item=>item.id!==id);
                    state.itemCount-=1;
                }
        }
    }
})
export const {addTocart,deleteCart}=cartSlice.actions;
export default cartSlice.reducer