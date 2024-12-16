export const base_url:string = 'https://api.openweathermap.org/data/2.5/weather';
export const api_key:string = '31f99b262592f512e6a7b53896f003c5';

export interface WeatherApiResponse {
    sys: {
        country: string;
        sunset: number;
    };
    name: string;
    main: {
        temp: number;
        pressure: number;
    };
}