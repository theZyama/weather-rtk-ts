import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {WeatherInfo} from "../../utils/types";


const initialState: WeatherInfo = {}
const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        putWeatherInfo: (_state, action: PayloadAction<string>) => action.payload
    }
})

export const {putWeatherInfo} = weatherSlice.actions
export default weatherSlice.reducer