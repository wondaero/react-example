import { createContext } from "react";
import type { Todo, Actions } from "@/types/todo";

export const TodoContext = createContext<Todo[]>([]);
export const TodoActionsContext = createContext<Actions | null>(null);
