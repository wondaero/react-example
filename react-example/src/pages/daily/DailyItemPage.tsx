import "@/App.css";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import Button from "@/components/Button";
import LinkButton from "@/components/LinkButton";
import WeatherIcon from "@/components/WeatherIcon";
import { useState, useEffect, useContext, memo, useCallback } from "react";
import { useNavigate, useParams } from "react-router";

import { DailyContext, DailyActionsContext } from "@/contexts/DailyContext";
import useContextCheck from "@/hooks/useContextCheck";

import type { Daily, Weather } from "@/types/daily";

import { getYYYYMMDD } from "@/utils/date";

type Props = { mode: "new" | "view" | "edit" };

const weathers: Weather[] = [1, 2, 3, 4];

const WeatherButton = memo(function WeatherButton({
  type,
  selected,
  onSelect,
}: {
  type: Weather;
  selected: boolean;
  onSelect: (type: Weather) => void;
}) {
  return (
    <Button
      className="w-12"
      bg={selected ? "var(--color1)" : "#eee"}
      onClick={() => {
        onSelect(type);
      }}
    >
      <WeatherIcon type={type} height={30}></WeatherIcon>
    </Button>
  );
});

const createEmptyItem = (): Daily => ({
  id: "",
  title: "",
  content: "",
  date: Date.now(),
  weather: 1,
});

function DailyItemPage({ mode }: Props) {
  const dailyAction = useContextCheck(DailyActionsContext);
  const dailyList = useContext(DailyContext);

  const navigate = useNavigate();
  const { id } = useParams();

  const found = dailyList.find((d) => d.id === id);

  useEffect(() => {
    if (mode !== "new" && !found) {
      alert("존재하지 않는 일기입니다.");
      navigate("/daily", { replace: true });
    }
  }, [mode, found, navigate]);

  const [dailyItem, setDailyItem] = useState<Daily>(() => {
    if (mode === "new") return createEmptyItem();

    return found ?? createEmptyItem();
  });

  const setData = useCallback(
    <K extends keyof Daily>(key: K, value: Daily[K]) => {
      setDailyItem((prev) => {
        return {
          ...prev,
          [key]: value,
        };
      });
    },
    [],
  );

  const controlBtn = () => {
    switch (mode) {
      case "new":
        return (
          <Button
            className="flex-1"
            onClick={() => {
              const newId = crypto.randomUUID();
              dailyAction.onCreate({ ...dailyItem, id: newId });
              navigate(`/daily/${newId}`, { replace: true });
            }}
          >
            추가
          </Button>
        );
      case "edit":
        return (
          <>
            <Button
              className="flex-1"
              onClick={() => {
                if (!id) return;
                dailyAction.onUpdate({ ...dailyItem, id: id });
                navigate(`/daily/${id}`);
              }}
            >
              저장
            </Button>
            <Button
              className="flex-1"
              bg="#f00"
              color="#fff"
              onClick={() => {
                if (!id) return;
                if (!window.confirm("삭제할까요?")) return;
                dailyAction.onDelete(id);
                navigate(`/daily`);
              }}
            >
              삭제
            </Button>
          </>
        );
      case "view":
        return (
          <LinkButton to={`/daily/${id}/edit`} className="flex-1">
            수정
          </LinkButton>
        );
    }
  };

  const handleWeather = useCallback(
    (type: Weather) => {
      if (mode === "view") return;
      setData("weather", type);
    },
    [mode, setData],
  );

  return (
    <div className="px-5 max-w-100 my-0 mx-auto w-full">
      <section className="mb-4">
        <div className="flex gap-2 justify-center mb-4">
          {weathers.map((idx) => (
            <WeatherButton
              key={idx}
              type={idx}
              selected={dailyItem.weather === idx}
              onSelect={handleWeather}
            ></WeatherButton>
          ))}
        </div>
        <Input
          type="date"
          wrapperClass="flex justify-center mb-4"
          className="w-full"
          value={getYYYYMMDD(dailyItem.date)}
          onChange={(e) => {
            if (!e.target.value) return;
            setData("date", new Date(e.target.value + "T00:00").getTime());
          }}
          readonly={mode === "view"}
        />
        <Input
          placeholder="오늘의 날씨(기분)는 어땠나요?"
          wrapperClass="flex justify-center mb-4"
          className="w-full"
          onChange={(e) => {
            setData("title", e.target.value);
          }}
          readonly={mode === "view"}
          value={dailyItem.title}
        />
        <Textarea
          placeholder="좀더 구체적으로..."
          wrapperClass="flex justify-center"
          className="h-50 w-full"
          onChange={(e) => {
            setData("content", e.target.value);
          }}
          readonly={mode === "view"}
          value={dailyItem.content}
        ></Textarea>
      </section>
      <section className="flex items-center gap-2 pt-4 border-t-1 border-[var(--border-color1)]">
        <LinkButton
          bg="#ddd"
          className="flex-1"
          to={`/daily${mode === "edit" ? "/" + id : ""}`}
        >
          {mode === "edit" ? "뒤로" : "목록으로"}
        </LinkButton>
        {controlBtn()}
      </section>
    </div>
  );
}

export default DailyItemPage;
