import { createSlice } from "@reduxjs/toolkit";
// state right now is 57
const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: (currentState) => currentState+1,
        decrement: (currentState) => currentState-1,
        reset: () => 0
    
    }
})
// export all reducers (named exports)
export const { increment, decrement, reset } = counterSlice.actions;
// export default counterSlice.reducer
export default counterSlice.reducer;


