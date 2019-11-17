import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToDoListComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ToDoListComponent]
})
export class AppModule { }
