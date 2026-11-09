// src/constants/weather.ts
import sunny from '@/assets/sunny.svg'
import cloudy from '@/assets/cloudy.svg'
import rainy from '@/assets/rainy.svg'
import snowy from '@/assets/snowy.svg'

import type { Weather } from "@/types/daily";

export const WEATHER: Record<Weather, {label: string, icon: string}> = {
  1: {label: '맑음', icon: sunny },
  2: {label: '흐림', icon: cloudy },
  3: {label: '비',   icon: rainy },
  4: {label: '눈',   icon: snowy },
}