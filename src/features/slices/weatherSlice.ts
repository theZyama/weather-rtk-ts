import {fetchWeather} from "../api/asyncWeatherAction.ts";
import {createSlice} from "@reduxjs/toolkit";


const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (_state) => {"loading"} )
            .addCase(fetchWeather.fulfilled,
                (_state, action) => action.payload)
            .addCase(fetchWeather.rejected, () => "failed");
    },
});

export default weatherSlice.reducer;
