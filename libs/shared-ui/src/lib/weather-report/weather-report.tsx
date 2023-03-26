import styles from './weather-report.module.css';
import { useWeather } from './weather-report.hooks';
import WeatherReportSkeleton from './weather-report.skeleton';
import { getWeatherIconProps } from './weather-report.helper';
import WeatherIcon from '../weather-icon/weather-icon';
import Icon from '../icon/icon';

/* eslint-disable-next-line */
export interface WeatherReportProps {}

export function WeatherReport(props: WeatherReportProps) {
  const { weather, isLoading } = useWeather();
  const weatherProps = getWeatherIconProps(weather.weathercode);

  return (
    <div className={`${styles['weather-report']} card-padding`}>
      {isLoading ? <WeatherReportSkeleton /> : <WeatherReportComponent />}
    </div>
  );

  function WeatherReportComponent(props: WeatherReportProps) {
    return (
      <>
        <h2>
          Welcome, <span>Geovane</span>
        </h2>
        <div className={styles['weather-text']}>
          <p>
            I've prepared a quick weather report for <span>you</span> today.
          </p>
          <p>Hope you're having a great day =)</p>
        </div>
        <div className={styles['weather-temperature']}>
          <Icon variant="temperature-high" color="secondary" />
          <p>Outdoor Temperature: {weather.temperature}C</p>
        </div>
        <div className={styles['weather-icon']}>
          {<WeatherIcon {...weatherProps!} />}
        </div>
      </>
    );
  }
}

export default WeatherReport;
