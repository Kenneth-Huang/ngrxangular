import { createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo, toggleTodo, loadTodo} from '../actions/todo.actions';
import { Todo } from 'src/app/models/todo.model'

export interface TodoState {
	todos: Todo[];
}

export const initialState: TodoState = {
	todos: [
		// {
		// 	id: '1',
		// 	title: 'todo 1',
		// 	completed: false,
		// 	userId: '1',
		// }
	],
};

//when the action is 'addTodo', the state will be updated to the new state, which is:
	// {
	// 	...state,
	// 	todos: [
	// 		...state.todos,
	// 		todo,
	// 	]
	// }

export const TodosReducer = createReducer(initialState,
	// on(action, (state, props) => (newState))
	on(addTodo, (state, { todo }) => ({
	...state,
	todos: [
		...state.todos,
		todo,
	]
	})),
	on(removeTodo, (state, { id }) => ({
		...state,
		todos: state.todos.filter(todo => todo.id !== id)
	})),
	on(toggleTodo, (state, { id }) => ({
		...state,
		todos: state.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed}: todo)
	})),
	on(loadTodo, (state, { todos }) => ({
		...state,
		todos
	}))
);