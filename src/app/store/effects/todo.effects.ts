import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, exhaustMap } from 'rxjs/operators';
import { TodoService } from 'src/app/services/todo.service';
import * as TodoActions from 'src/app/store/actions/todo.actions';
import { Todo } from 'src/app/models/todo.model';

@Injectable()
export class TodoEffects {
	constructor(private actions: Actions, private todoService: TodoService) { }
	loadTodos = createEffect(() =>
		this.actions.pipe(
			ofType(TodoActions.loadTodo),
			exhaustMap(() =>
				this.todoService
					.getTodoList()
					.pipe(map((todos: Todo[]) => TodoActions.loadTodo({ todos }))))
		));
	
	//My current understanding is: The effects keep listening the dispatch function from the store,
	//once the assigned action has been dispatched, the corresponding effect 
	//will process its logic and pass the result to the corresponding reducer to update the store;
	
	//If above is the case, then effects in ngrx is quite similar to redux saga;
}