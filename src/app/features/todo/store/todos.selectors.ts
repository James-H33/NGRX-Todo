import { createSelector } from "@ngrx/store";
import { IAppState } from "src/app/types/app-state.interface";
import { ITodosState } from "./todos.reducers";

const selectTodosState = (state: IAppState) => state.todoState

export const selectAllTodos = createSelector(
  selectTodosState,
  (s: ITodosState) => s.todos
)
