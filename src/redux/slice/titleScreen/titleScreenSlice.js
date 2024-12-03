import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    screenId: "",
};

const titleScreenSlice = createSlice({
    name: "titleScreen",
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setScreenId: (state, action) => {
            state.screenId = action.payload;
        },
    },
});

export const { setTitle, setScreenId } = titleScreenSlice.actions;
export default titleScreenSlice.reducer;