// src/constants/weather.ts
import sunny from '@/assets/sunny.svg'
import cloudy from '@/assets/cloudy.svg'
import rainy from '@/assets/rainy.svg'
import snowy from '@/assets/snowy.svg'

export const WEATHER_LIST = [
  { code: 1, label: '맑음', icon: sunny },
  { code: 2, label: '흐림', icon: cloudy },
  { code: 3, label: '비',   icon: rainy },
  { code: 4, label: '눈',   icon: snowy },
] as const

export const getWeather = (code: number) => {
    return WEATHER_LIST.find(w => w.code === code);
}