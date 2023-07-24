import { createReducer, on } from '@ngrx/store';
import { ITodo } from '../types';

import { FilterTypes } from '../types/filter-types.enum';
import * as TodoActions from './todos.actions';

export interface ITodosState {
  todos: ITodo[];
  error: string;
  filter: FilterTypes;
}

export const initialTodosState: ITodosState = {
  todos: [],
  error: '',
  filter: FilterTypes.All
}

export const todosReducer = createReducer(
  initialTodosState,

  on(TodoActions.UpdateIsCompleteSuccess, (s, { todos }) => {
    return {
      ...s,
      todos
    }
  }),

  on(TodoActions.UpdateIsCompleteFailure, (s) => {
    return {
      ...s,
      error: 'Update Is Complete Unsuccessful'
    }
  }),

  on(TodoActions.AddTodoSuccess, (s, { todos }) => {
    return {
      ...s,
      todos
    }
  }),

  on(TodoActions.AddTodoFailure, (s) => {
    return {
      ...s,
      error: 'Add Todo was unsuccesful'
    }
  }),

  on(TodoActions.GetAllTodos, (s) => {
    return {
      ...s,
      error: ''
    }
  }),

  on(TodoActions.GetAllTodosSuccess, (s, { todos }) => {
    return {
      ...s,
      todos
    }
  }),

  on(TodoActions.GetAllTodosFailure, (s) => {
    return {
      ...s,
      todos: [],
      error: 'Failed to load todos!'
    }
  }),

  on(TodoActions.ClearCompletedTodosSucccess, (s, { todos }) => {
    return {
      ...s,
      todos
    }
  }),

  on(TodoActions.ClearCompletedTodosFailure, (s) => {
    return {
      ...s,
      error: 'Clearing Completed todos was unsuccessful'
    }
  }),

  on(TodoActions.SetFilterType, (s, { filter }) => {
    return {
      ...s,
      filter
    }
  })
);
