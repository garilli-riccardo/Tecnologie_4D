import { Component } from '@angular/core';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.css']
})
export class ThirdComponentComponent {
  title = 'es';
  name = "terzo (figlio del secondo)"
  TextColor: string = 'brown';
}
