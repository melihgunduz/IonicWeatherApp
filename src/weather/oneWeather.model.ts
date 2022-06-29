interface weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface feelsLike {
    day: number,
    night: number,
    eve: number,
    morn: number,
}

interface temperature extends feelsLike {
    max: number;
    min: number;

}

interface currentWeather {
    feels_like: number;
    humidity: number;
    sunrise: number;
    sunset: number;
    temp: temperature;
    weather: weather[];
    wind_speed: number;
}

interface dailyWeather {
    feels_like: feelsLike
    humidity: number;
    sunrise: number;
    sunset: number;
    temp: temperature;
    weather: weather[];
    wind_speed: number;
}

export interface OneWeather {
    current: currentWeather;
    daily: dailyWeather[];

}