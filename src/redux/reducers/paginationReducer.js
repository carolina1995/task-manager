import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentPage: 1,
    pageSize: 8,
}

export const paginationReducer = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        init: (state, action) => {
            console.log("init")
           return initialState
        },
        nextPage: (state, action) => {
            state.currentPage += 1;
        },
        prevPage: (state, action) => {
            state.currentPage -= 1;
        },
    }
});

export default paginationReducer.reducer;
export const { 
    init,
    nextPage,
    prevPage,
} = paginationReducer.actions;
