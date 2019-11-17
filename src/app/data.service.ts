import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb(){
    let todos = [
      { id: 1, title: 'Courses', description: 'thon, patate, lardon', status: 1},
      { id: 1, title: 'José', description: 'st emilion, baguette', status: 0},
      { id: 1, title: 'Anniversaire', description: 'gateau, bougie', status: 1}
    ];
    return { todos };
  }
}
