import { Component } from '@angular/core';
import { Email } from './email.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email-cognome';
  newEmail: Email = new Email('', '', '');

  emails: Email[] = [];

  inviaEmail() {
    this.emails.push(this.newEmail);
    this.newEmail = new Email('', '', '');
  }
}