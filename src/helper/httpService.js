import axios from 'axios';
import { ROOT_API_URL, APPID } from './constant';

export function getWeather(city) {
    const link_weather_url = `${ROOT_API_URL}?q=${city}&cnt=6&appid=${APPID}`;
    return axios({ method: "GET", url: link_weather_url.trim(), headers: { 'Content-Type': 'application/json; charset=utf-8' } })
}