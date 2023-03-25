import { useEffect, useState } from 'react';
import { useGeolocated } from 'react-geolocated';
import { getWeatherData, WeatherData } from './weather-report.data';

export function useWeather(): {
  weather: WeatherData;
  isLoading: boolean;
} {
  const { coords } = useGeolocated();
  const [currentWeather, setCurrentWeather] = useState<WeatherData>({
    temperature: 0,
    weathercode: 0,
  });

  console.log(coords);

  useEffect(() => {
    if (coords) {
      const getData = async () => {
        const data = await getWeatherData(coords.latitude, coords.longitude);
        setCurrentWeather(data);
      };
      getData();
    }
  }, []);

  return {
    weather: currentWeather,
    isLoading: currentWeather?.temperature === 0,
  };
}
