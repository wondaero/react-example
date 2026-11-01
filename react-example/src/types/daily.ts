export type Daily = {
    id: string,
    title: string,
    content: string,
    date: number | ''
    weather: number,
}

export type Actions = {
    onCreate: (Daily) => void
    onDelete: (id: string) => void
    onUpdate: (id: string, Daily) => void
}
