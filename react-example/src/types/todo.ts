export type Todo = {
    id: string,
    title: string,
    completed: boolean,
    date: number | ''
}

export type Actions = {
    addTodo: (title: string) => void
    deleteTodo: (id: string) => void
    toggleTodo: (id: string) => void
}