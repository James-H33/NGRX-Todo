import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponent } from "../icon/icon.component";

@Component({
    standalone: true,
    selector: 'CompleteTodoBtn',
    templateUrl: './complete-todo-button.component.html',
    styleUrls: ['./complete-todo-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        IconComponent
    ]
})
export class CompleteTodoButtonComponent {
  @Input()
  public isComplete = false;
}
