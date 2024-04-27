import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';

export const todoConstance = {
	ADD_TODO: "ADD_TODO",
	TOGGLE_TODO: "TOGGLE_TODO",
	REMOVE_TODO: "REMOVE_TODO",
	LOAD_TODO: "LOAD_TODO",
}
// the props<T>() equals to payload in react, so when call these action function, just pass the T type payload as single argument
export const addTodo = createAction(todoConstance.ADD_TODO, props<{ todo: Todo }>());

export const toggleTodo = createAction(todoConstance.TOGGLE_TODO, props<{ id: string | number }>());

export const removeTodo = createAction(todoConstance.REMOVE_TODO, props<{ id: string | number }>());

export const loadTodo = createAction(todoConstance.LOAD_TODO, props<{ todos: Todo[] }>());

