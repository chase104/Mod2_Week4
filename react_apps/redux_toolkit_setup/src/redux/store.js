
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'

// create store
const store = configureStore({
    reducers: {
        counter: counterReducer
    }
})

// export store
export default store;