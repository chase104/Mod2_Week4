import { createSlice } from "@reduxjs/toolkit";
// state right now is 57

const moviesSlice = createSlice({
    name: "movies",
    initialState: [], //starting state
    reducers: {
        addMovie: (state, action) => {
            console.log(action);
            state.push(action.payload)
        }
    }
});
// export all reducers (named exports)
export const { addMovie } = moviesSlice.actions;
// export default counterSlice.reducer
export default moviesSlice.reducer;


