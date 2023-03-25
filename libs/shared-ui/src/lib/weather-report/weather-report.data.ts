export interface WeatherData {
  temperature: number;
  weathercode: number;
}

export async function getWeatherData(
  latitude: number,
  longitude: number
): Promise<WeatherData> {
  const weatherApi =
    'https://api.open-meteo.com/v1/forecast?' +
    `latitude=${latitude}&` +
    `longitude=${longitude}&` +
    'current_weather=true';

  const res = await fetch(weatherApi);
  const json = await res.json();
  const { temperature, weathercode } = json.current_weather;
  await sleep(1000);

  return { temperature, weathercode };
}

const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
