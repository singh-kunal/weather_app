import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = '42e3a7870ba7665486acc3aa94cac837';
export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });
    return data;
}