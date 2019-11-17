import { Component, OnInit } from '@angular/core';
import { ToDoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ToDoListComponent implements OnInit {
  
  todos: any[] = [];
  constructor(private policyService: ToDoService) { }

  ngOnInit() {
    this.policyService.getToDos().subscribe((data : any[])=>{
        console.log(data);
        this.todos = data;
    })

  }
}
