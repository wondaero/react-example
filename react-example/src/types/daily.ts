export type WeatherFilter = 0 | 1 | 2 | 3 | 4;
export type Daily = {
    id: string,
    title: string,
    content: string,
    date: number | ''
    weather: number,
}

export type Actions = {
    onCreate: (daily: Daily) => void
    onDelete: (id: string) => void
    onUpdate: (daily: Daily) => void
}

export type DailyFilter = {
    weather: WeatherFilter,
    month: number
}