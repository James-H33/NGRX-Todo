import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, exhaustMap, map, of } from 'rxjs';
import { TodoService } from '../services/todo.service';
import { ITodo } from '../types';
import * as TodoActions from './todos.actions';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) { }

  public loadAllTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.GetAllTodos),
      exhaustMap(() => {
        return this.todoService.getAll();
      }),
      map((todos: ITodo[]) => {
        return TodoActions.GetAllTodosSuccess({ todos })
      }),
      catchError(() => of(TodoActions.GetAllTodosFailure()))
    ))

  public addTodo$ = createEffect(() =>
      this.actions$.pipe(
        ofType(TodoActions.AddTodo),
        concatMap(({ title }) => {
          return this.todoService.add(title);
        }),
        map((todos: ITodo[]) => TodoActions.AddTodoSuccess({ todos })),
        catchError(() => of(TodoActions.AddTodoFailure()))
      )
  )

  public updateIsComplete$ = createEffect(() =>
      this.actions$.pipe(
        ofType(
          TodoActions.UpdateIsComplete
        ),
        concatMap(({ id, isComplete }) => {
          return this.todoService.updateOne(id, isComplete);
        }),
        map((todos: ITodo[]) => TodoActions.UpdateIsCompleteSuccess({ todos })),
        catchError(() => of(TodoActions.UpdateIsCompleteFailure()))
      )
  )

  public deleteTodo$ = createEffect(() =>
      this.actions$.pipe(
        ofType(
          TodoActions.DeleteTodo
        ),
        concatMap(({ id }) => {
          return this.todoService.deleteOne(id);
        }),
        map((todos: ITodo[]) => TodoActions.UpdateIsCompleteSuccess({ todos })),
        catchError(() => of(TodoActions.UpdateIsCompleteFailure()))
      )
  )

  public clearTodos$ = createEffect(() =>
      this.actions$.pipe(
        ofType(TodoActions.ClearCompletedTodos),
        concatMap(() => {
          return this.todoService.deleteAllCompleted();
        }),
        map((todos: ITodo[]) => TodoActions.AddTodoSuccess({ todos })),
        catchError(() => of(TodoActions.AddTodoFailure()))
      )
  )
}
