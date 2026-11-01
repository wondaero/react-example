import type { CSSProperties } from "react";
import { getWeather } from '@/components/Weather'


type IconProps = {
  type: number;
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
      src={getWeather(type).icon}
      width={size ?? width}
      height={size ?? height}
    >
    </img>
  );
}

export default WeatherIcon;
