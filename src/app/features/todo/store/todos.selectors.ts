import { createSelector } from "@ngrx/store";
import { IAppState } from "src/app/types/app-state.interface";
import { ITodosState } from "./todos.reducers";
import { FilterTypes } from "../types/filter-types.enum";

const selectTodosState = (state: IAppState) => state.todoState

export const selectAllTodos = createSelector(
  selectTodosState,
  (s: ITodosState) => s.todos
)

export const selectFilterType = createSelector(
  selectTodosState,
  (s: ITodosState) => s.filter
)

export const selectAllTodoWithFilter = createSelector(
  selectTodosState,
  (s: ITodosState) =>  {
    return s.todos.filter(t => {
      switch (s.filter) {
        case FilterTypes.Active:
          return !t.isComplete
        case FilterTypes.Completed:
          return t.isComplete
        default:
          return true
      }
    })
  }
);
