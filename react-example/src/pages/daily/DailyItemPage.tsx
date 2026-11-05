import "@/App.css";
import Button from "@/components/Button";
import WeatherIcon from "@/components/WeatherIcon";

import { useState, createContext, useMemo, useReducer } from "react";

import DailyBrowser from "@/components/daily/DailyBrowser";

import type { Daily, Actions } from "@/types/daily";

function DailyItemPage() {
  return (
    <>
      <div>
        <Button>
          <WeatherIcon type={1}></WeatherIcon>
        </Button>
        <Button>
          <WeatherIcon type={2}></WeatherIcon>
        </Button>
        <Button>
          <WeatherIcon type={3}></WeatherIcon>
        </Button>
        <Button>
          <WeatherIcon type={4}></WeatherIcon>
        </Button>
      </div>
    </>
  );
}

export default DailyItemPage;
