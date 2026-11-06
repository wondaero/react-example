import "@/App.css";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import Button from "@/components/Button";
import LinkButton from "@/components/LinkButton";
import WeatherIcon from "@/components/WeatherIcon";
import { useState, useContext, useReducer } from "react";
import { useNavigate, useParams } from "react-router";

// import DailyBrowser from "@/components/daily/DailyBrowser";
import { DailyContext, DailyActionsContext } from "@/pages/daily/DailyPage";

import type { Daily, Actions } from "@/types/daily";

import { getYYYYMMDD } from '@/utils/date'; 

type Props = { mode: "new" | "view" | "edit" };

function DailyItemPage({ mode }: Props) {
  const dailyAction = useContext(DailyActionsContext);
  const dailyList = useContext(DailyContext);

  const navigate = useNavigate();
  const { id } = useParams();   

  const emptyItem = {
    id: "",
    title: "",
    content: "",
    date: Date.now(),
    weather: 1,
  };

  const [dailyItem, setDailyItem] = useState<Daily>(() => {
    if(mode === 'new') return emptyItem;

    return dailyList.find(d => d.id === id) ?? emptyItem;
  });

  const setData = <K extends keyof Daily>(key: K, value: Daily[K]) => {
    setDailyItem((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const controlBtn = () => {
    switch (mode) {
      case "new":
        return <Button className="flex-1" onClick={() => {
          const newId = crypto.randomUUID();
          dailyAction.onCreate({...dailyItem, id: newId});
          navigate(`/daily/${id}`);             
        }}>추가</Button>;
        case "edit":
        return (
          <>
            <Button className="flex-1" onClick={() => {
              dailyAction.onUpdate({...dailyItem});
              navigate(`/daily/${id}`);
            }}>저장</Button>
            <Button className="flex-1" bg="#f00" color="#fff" onClick={() => {
              dailyAction.onDelete(dailyItem.id);
              navigate(`/daily`);
            }}>
              삭제
            </Button>
          </>
        );
      case "view":
        return <LinkButton to={`/daily/${id}/edit`} className="flex-1">수정</LinkButton>;
    }
  };

  return (
    <div className="px-5 max-w-100 my-0 mx-auto w-full">
      <section className="mb-4">
        <div className="flex gap-2 justify-center mb-4">
          {[1, 2, 3, 4].map((idx) => (
            <Button
              key={idx}
              className="w-12"
              bg={dailyItem.weather === idx ? "var(--color1)" : "#eee"}
              onClick={() => {
                if(mode === 'view') return;
                setData("weather", idx);
              }}
            >
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
            if (!e.target.value) return;
            setData("date", new Date(e.target.value + "T00:00").getTime());
          }}
          readonly={mode === 'view'}
        />
        <Input
          placeholder="오늘을 한줄로 표현해볼까요?"
          wrapperClass="flex justify-center mb-4"
          className="w-full"
          onChange={(e) => {
            setData("title", e.target.value);
          }}
          readonly={mode === 'view'}
          value={dailyItem.title}
        />
        <Textarea
          placeholder="좀더 자세히..."
          wrapperClass="flex justify-center"
          className="h-50 w-full"
          onChange={(e) => {
            setData("content", e.target.value);
          }}
          readonly={mode === 'view'}
          value={dailyItem.content}
        ></Textarea>
      </section>
      <section className="flex items-center gap-2 pt-4 border-t-1 border-[var(--border-color1)]">
        <LinkButton bg="#ddd" className="flex-1" to={`/daily${mode === 'edit' ? '/' + id : ''}`}>{mode === 'edit' ? '뒤로' : '목록으로'}</LinkButton>
        {controlBtn()}
      </section>
    </div>
  );
}

export default DailyItemPage;
