import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { todosReducer } from "./store/todos.reducers";
import { TodoRoutingModule } from "./todo.routes";
import { StateKeys } from "src/app/types/state-key.enum";
import { TodoEffects } from "./store/todos.effects";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  imports: [
    TodoRoutingModule,
    StoreModule.forFeature(StateKeys.todoState, todosReducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
})
export class TodoModule {}
