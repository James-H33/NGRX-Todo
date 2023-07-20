import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../../types';
import { IconComponent } from "../icon/icon.component";
import { CompleteTodoButtonComponent } from "../complete-todo-button/complete-todo-button.component";

@Component({
  standalone: true,
  selector: 'TodoListItem',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  imports: [
    CommonModule,
    IconComponent,
    CompleteTodoButtonComponent
  ]
})
export class TodoListItemComponent {
  @Input()
  public todo: ITodo | null = null;

  @Output()
  public completeChanged = new EventEmitter<ITodo>();

  @Output()
  public delete = new EventEmitter<ITodo>();

  public onCompletedChange() {
    this.completeChanged.emit(this.todo as ITodo);
  }

  public onDelete() {
    this.delete.emit(this.todo as ITodo);
  }
}
