import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./PostSlice";
//import { AddPosts } from "./PostSlice";


export const Store = configureStore({
    reducer: {
        insta: PostSlice,
    },
});