import { ITodosState } from "../features/todo/store/todos.reducers";
import { StateKeys } from "./state-key.enum";

export interface IAppState {
  [StateKeys.todoState]: ITodosState
}
