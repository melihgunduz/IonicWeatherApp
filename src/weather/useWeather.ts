import { Geolocation } from '@capacitor/geolocation'


import { ref } from "vue";
import { OneWeather } from "./oneWeather.model";


const weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly&appid=1cd380e1bcc99f7074f67b5ee20de24c'

const weather = ref<OneWeather>();

async function fetchWeather(): Promise<void> {

    const { coords } = await Geolocation.getCurrentPosition();

    const res = await fetch(`${weatherUrl}&lat=${coords.latitude}&lon=${coords.longitude}&units=metric`);

    weather.value = await res.json()
}

function formatTemperature(value: number, format: 'F' | 'C') {
    return `${Math.round(value)}° ${format}`
}

function getWeatherImageUrl(iconName: string, size: '2x' | '4x') {
    return `http://openweathermap.org/img/wn/${iconName}@${size ? size : '1x'}.png`
}

setInterval(fetchWeather, 12000);

export function useWeather() {
    return {
        weather,
        fetchWeather,
        formatTemperature,
        getWeatherImageUrl
    }
}
