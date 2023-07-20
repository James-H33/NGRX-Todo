import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";
import { ITodo } from "../types";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos = [
    {
      id: '123',
      title: 'Test 1',
      isComplete: false
    },
    {
      id: '233',
      title: 'Test 2',
      isComplete: true
    }
  ];

  public getAll() {
    return of([...this.todos]).pipe(delay(200));
  }

  public add(title: string) {
    let newTodo: ITodo = {
      id: (Math.random() * 10000).toString(),
      title,
      isComplete: false
    }

    this.todos = [...this.todos, newTodo];

    return this.getAll();
  }

  public deleteAllCompleted() {
    let updatedTodos = this.todos.filter(todo => !todo.isComplete);

    this.todos = updatedTodos;

    return this.getAll();
  }

  public updateOne(id: string, isComplete: boolean) {
    let updatedTodos = this.todos.map((todo: ITodo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isComplete
        }
      }

      return todo;
    });

    this.todos = updatedTodos;

    return this.getAll();
  }

  public deleteOne(id: string) {
    let updatedTodos = this.todos.filter((todo: ITodo) => todo.id !== id);

    this.todos = updatedTodos;

    return this.getAll();
  }
}
