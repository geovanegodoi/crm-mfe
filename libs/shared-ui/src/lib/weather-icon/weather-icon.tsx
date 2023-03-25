import styles from './weather-icon.module.css';
import cloudImg from '../assets/weather/cloud.png';
import cloudyImg from '../assets/weather/cloudy.png';
import drizzleImg from '../assets/weather/drizzle.png';
import fogImg from '../assets/weather/fog.png';
import rainyImg from '../assets/weather/rainy.png';
import snowImg from '../assets/weather/snow.png';
import snowyImg from '../assets/weather/snowy.png';
import sunnyImg from '../assets/weather/sunny.png';
import thunderImg from '../assets/weather/thunder.png';
import { useGeolocated } from 'react-geolocated';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface WeatherIconProps {
  variant:
    | 'cloud'
    | 'cloudy'
    | 'drizzle'
    | 'fog'
    | 'rainy'
    | 'snow'
    | 'snowy'
    | 'sunny'
    | 'thunder';
  label?: string;
}

const images = {
  cloud: cloudImg,
  cloudy: cloudyImg,
  drizzle: drizzleImg,
  fog: fogImg,
  rainy: rainyImg,
  snow: snowImg,
  snowy: snowyImg,
  sunny: sunnyImg,
  thunder: thunderImg,
};

export function WeatherIcon({ variant, label }: WeatherIconProps) {
  return (
    <div className={styles['weather-icon']}>
      <img src={images[variant]} alt={variant} />
      <label>{label || variant}</label>
    </div>
  );
}

export default WeatherIcon;
