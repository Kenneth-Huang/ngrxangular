import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private httpClient: HttpClient) { }

  getTodoList(): Observable <Todo[]> {
    return this.httpClient.get<Todo[]>(this.apiUrl);
  }
}
