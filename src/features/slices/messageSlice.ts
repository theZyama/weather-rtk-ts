import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "./weatherSlice.ts";

const initialState: string = "Enter city name";

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        putMessage: (_state, action) => action.payload,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, () => "Pending...")
            .addCase(fetchWeather.fulfilled, () => "")
            .addCase(fetchWeather.rejected, () => "Enter correct city name");
    },
});

export const { putMessage } = messageSlice.actions;
export default messageSlice.reducer;