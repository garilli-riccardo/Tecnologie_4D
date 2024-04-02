import { Component, Input } from '@angular/core';
import { Email } from '../email.model';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './mandamail.component.html',
  styleUrls: ['./mandamail.component.css']
})
export class MandamailComponent {
  @Input()
  emails!: Email[];

  espandiEmail(email: Email): void {
    email.espanso = !email.espanso;
  }

  rendiSpeciale(email: Email): void {
    email.speciale = !email.speciale;
  }
}