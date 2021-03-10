import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ROOT_URL = 'http://localhost:3000';

  todos: any;

  constructor(private http: HttpClient) { }

  getTodos() {
    this.todos = this.http.get(this.ROOT_URL + '/todos')
  }

  deleteTodo() {
    this.todos = this.http.delete(this.ROOT_URL + '/todos')
  }
}
