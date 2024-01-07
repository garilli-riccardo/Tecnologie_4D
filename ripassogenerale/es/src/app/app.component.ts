import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'es';
  name = "primo"
  TextColor: string = 'red' 
  MATERIE = [
    {id: 1, name:' Informatica'},
    {id: 2, name:' Tecnologia'},
    {id: 3, name:'Sistemi'},
    {id: 4, name:' Elettronica'},
  ];
  
}
