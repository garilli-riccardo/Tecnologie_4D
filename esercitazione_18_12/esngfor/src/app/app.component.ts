import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esngfor';
  CANTANTI = [
    {id: 1, name:'Sleepy Hallow'},
    {id: 2, name:'Kanye West'},
    {id: 5, name:'Drake'},
    {id: 3, name:'Travis Scott'},
    {id: 4, name:'Sheff G'}
  ];
}
