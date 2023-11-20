import React from "react";
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value: 0,
    POSTS: [],
    // liked: false,
    Count: 0,



}
export const PostSlice = createSlice({
    name: 'insta',
    initialState,
    reducers: {
        postCreation: (state, action) => {
            const { author, images, caption, likesCount } = action.payload;
            const post = [...state.POSTS, { author, images, caption, likesCount }];
            state.POSTS = post;
            state.likesCount = likesCount;
        },
        updatedPost: (state, action) => {
            const { likesCount, index } = action.payload;
            const updateLikes = [...state.POSTS, { likesCount, index }];
            state.POSTS[index].likesCount = likesCount;
        },
        Increment: (state, action) => {
            state.Count +=1;

        },
        Decrement: (state, action) => {
            state.Count -= 1;
        },

    }
});
export const { postCreation, updatedPost, Increment, Decrement } = PostSlice.actions
export default PostSlice.reducer