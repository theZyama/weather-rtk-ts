
import {api_key, base_url} from "../../utils/constants.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
    "weather/fetchWeather",
    async (city: string) => {
        const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
        if (!response.ok) {
            throw new Error("Enter correct city name");
        }
        const data = await response.json();
        return {
            country: data.sys.country,
            city: data.name,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: data.sys.sunset * 1000,
        };
    }
);

//     return async (dispatch: AppDispatch) => {
//         dispatch(putMessage('Pending...'))
//         try {
//             const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
//             if (!response.ok) {
//                 throw new Error('Enter correct city name');
//             }
//             const data = await response.json();
//             dispatch(putWeatherInfo({
//                 country: data.sys.country,
//                 city: data.name,
//                 temp: data.main.temp,
//                 pressure: data.main.pressure,
//                 sunset: data.sys.sunset * 1000
//             }));
//             dispatch(putMessage(''));
//         } catch (e) {
//             console.log(e);
//             if (e instanceof Error) {
//                 dispatch(putMessage(e.message));
//             }
