import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/types/app-state.interface';
import * as TodoActions from '../../store/todos.actions';
import { selectAllTodos } from '../../store/todos.selectors';
import { ITodo } from '../../types';
import { TodoListItemComponent } from "../todo-list-item/todo-list-item.component";

@Component({
  standalone: true,
  selector: 'TodoContainer',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TodoListItemComponent
  ]
})
export class TodoContainerComponent implements OnInit {
  public todos$: Observable<ITodo[]> = this.store.select(selectAllTodos);

  public trackById = (i: number, todo: ITodo) => {
    return todo.id;
  };

  constructor(
    private store: Store<IAppState>
  ) { }

  public ngOnInit() {
    this.store.dispatch(TodoActions.GetAllTodos());
  }

  public addTodo(inputRef: HTMLInputElement) {
    let value = inputRef.value;

    if (!value) {
      return;
    }

    inputRef.value = '';

    this.store.dispatch(TodoActions.AddTodo({ title: value }));
  }

  public clearAllCompleted() {
    this.store.dispatch(TodoActions.ClearCompletedTodos());
  }

  public updateCompleted(todo: ITodo) {
    const isComplete = !todo.isComplete;

    this.store.dispatch(TodoActions.UpdateIsComplete({
      id: todo.id,
      isComplete
    }));
  }

  public deleteTodo(todo: ITodo) {
    this.store.dispatch(TodoActions.DeleteTodo({ id: todo.id }));
  }
}
