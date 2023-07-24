import { createAction, props } from '@ngrx/store';
import { ITodo } from '../types';
import { FilterTypes } from '../types/filter-types.enum';

export const GetAllTodos = createAction(
  '[Todo] Get All Todos'
)

export const GetAllTodosSuccess = createAction(
  '[Todo] Get All Todos Success',
  props<{ todos: ITodo[] }>()
)

export const GetAllTodosFailure = createAction(
  '[Todo] Get All Todos Failure'
)

export const AddTodo = createAction(
  '[Todo] Add Todo',
  props<{ title: string }>()
)

export const AddTodoSuccess = createAction(
  '[Todo] Add Todo Success',
  props<{ todos: ITodo[] }>()
)

export const AddTodoFailure = createAction(
  '[Todo] Add Todo Failure'
)

export const UpdateIsComplete = createAction(
  '[Todo] Update Is Complete',
  props<{ id: string, isComplete: boolean }>()
)

export const UpdateIsCompleteSuccess = createAction(
  '[Todo] Update Is Complete Success',
  props<{ todos: ITodo[] }>()
)

export const UpdateIsCompleteFailure = createAction(
  '[Todo] Update Is Complete Failure'
)

export const UpdateTodo = createAction(
  '[Todo] Update Todo',
  props<{ todo: ITodo }>()
)

export const DeleteTodo = createAction(
  '[Todo] Delete Todo',
  props<{ id: string }>()
)

export const ClearCompletedTodos = createAction(
  '[Todo] Clear Completed Todos'
)

export const ClearCompletedTodosSucccess = createAction(
  '[Todo] Clear Completed Success',
  props<{ todos: ITodo[] }>()
)

export const ClearCompletedTodosFailure = createAction(
  '[Todo] Clear Completed Failure',
  props<{ error: string }>()
)

export const SetFilterType = createAction(
  '[Todo] Set Filter Status',
  props<{ filter: FilterTypes }>()
);
