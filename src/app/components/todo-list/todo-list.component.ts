import { Todo } from 'src/app/models/todo.model';
import { addTodo, toggleTodo, removeTodo, loadTodo } from 'src/app/store/actions/todo.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoState } from 'src/app/store/reducers/todo.reducer';
import {generateRandomId} from 'src/app/util/util'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoArray!: Todo[];
  newTodoTitle: string = '';


                                    
  constructor(private store: Store<{todoState: TodoState} >) {//this "todoState" is from "StoreModule.forRoot({ todoState: TodosReducer })" in the app.module.ts
    // Once the todoState in the store is update, the callback function in the subscribe() will be called
    store.select('todoState').subscribe((todoState: TodoState) => {
      this.todoArray = todoState.todos;
      //console.log(this.todoArray);
    })
  }

  ngOnInit() {
    this.store.dispatch(loadTodo({ todos: this.todoArray }));
  }

  addTodo():void {
    if (this.newTodoTitle.trim().length === 0)
      return;
    const todo: Todo = {
      id: generateRandomId(),
      title: this.newTodoTitle,
      completed: false,
      userId : 1,
    }
    this.store.dispatch(addTodo({ todo }));
    this.newTodoTitle = '';
  }

  toggleTodo(id: string | number):void {
    this.store.dispatch(toggleTodo({ id }));  
  }

  removeTodo(id: string | number):void {
    this.store.dispatch(removeTodo({ id }));
  }
}
