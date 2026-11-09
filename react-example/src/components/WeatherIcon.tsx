import type { CSSProperties } from "react";
import { WEATHER } from '@/components/Weather'
import type { Weather } from "@/types/daily";


type IconProps = {
  type: Weather;
  className?: string;
  style?: CSSProperties;
  size?: number;
  width?: number;
  height?: number;
};

function WeatherIcon({ type, className, style, size, width, height }: IconProps) {

  const w = width ?? size;
  const h = height ?? size;
  return (
    <img
      className={className}
      style={{width: w, height: h, ...style}}
      src={WEATHER[type].icon}
      width={size ?? width}
      height={size ?? height}
    >
    </img>
  );
}

export default WeatherIcon;
