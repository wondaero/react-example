import "@/App.css";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import Button from "@/components/Button";
import WeatherIcon from "@/components/WeatherIcon";
import { useState, createContext, useMemo, useReducer } from "react";

import DailyBrowser from "@/components/daily/DailyBrowser";

import type { Daily, Actions } from "@/types/daily";

const getYYYYMMDD = (timestamp: number | '') => {
  const d = new Date(timestamp);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`

}

function DailyItemPage() {
  const [dailyItem, setDailyItem] = useState<Daily>({
    id: "",
    title: "",
    content: "",
    date: Date.now(),
    weather: 1,
  });

  const setData = <K extends keyof Daily>(key: K, value: Daily[K]) => {
    setDailyItem(prev => {
      return {
        ...prev,
        [key]: value
      }
    });
  }

  // const 
  return (
    <div className="px-5 max-w-100 my-0 mx-auto w-full">
      <div className="flex gap-2 justify-center mb-2">
        {[1,2,3,4].map(idx => (
          <Button key={idx} className="w-12" bg={dailyItem.weather === idx ? 'var(--color1)' : '#eee'} onClick={() => {setData('weather', idx)}}>
            <WeatherIcon type={idx} height={30}></WeatherIcon>
          </Button>
        ))}
      </div>
      <Input
        type="date"
        wrapperClass="flex justify-center mb-4"
        className="w-full"
        value={getYYYYMMDD(dailyItem.date)}
        onChange={(e) => {
          if(!e.target.value) return;
          setData('date', new Date(e.target.value + "T00:00").getTime())}
        }
      />
      <Input placeholder="오늘 하루를 표현해볼까요?" wrapperClass="flex justify-center mb-4" className="w-full" onChange={(e) => {setData('title', e.target.value)}} />
      <Textarea placeholder="좀더 자세히..." wrapperClass="flex justify-center" className="h-50 w-full" onChange={(e) => {setData('content', e.target.value)}}></Textarea>
    </div>
  );
}

export default DailyItemPage;
