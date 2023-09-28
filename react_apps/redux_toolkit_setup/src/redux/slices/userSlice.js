import { createSlice } from "@reduxjs/toolkit";
// state right now is 57

const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "Chase",
        access: "admin"
    }, //starting state
    reducers: {
        changeName: (state) => {
            state.name = "James"
        }
    }
});
// export all reducers (named exports)
export const { changeName } = userSlice.actions;
// export default counterSlice.reducer
export default userSlice.reducer;


