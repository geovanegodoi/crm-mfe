import { useEffect, useState } from 'react';
import { useGeolocated } from 'react-geolocated';
import { getWeatherData, WeatherData } from './weather-report.data';

export function useWeather(): {
  weather: WeatherData;
  isLoading: boolean;
} {
  const { coords: coordinates } = useGeolocated();
  const [currentWeather, setCurrentWeather] = useState<WeatherData>({
    temperature: 0,
    weathercode: 0,
  });

  useEffect(() => {
    if (coordinates) {
      const getData = async () => {
        const data = await getWeatherData(
          coordinates.latitude,
          coordinates.longitude
        );
        setCurrentWeather(data);
      };
      getData();
    }
  }, [coordinates]);

  return {
    weather: currentWeather,
    isLoading: currentWeather?.temperature === 0,
  };
}
