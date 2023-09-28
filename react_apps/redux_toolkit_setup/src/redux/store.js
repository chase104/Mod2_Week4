
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'
import moviesReducer from "./slices/moviesSlice";

// create store
const store = configureStore({
    reducer: {
        counter: counterReducer,
        movies: moviesReducer
    }
})

// export store
export default store;