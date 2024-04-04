import { Component, Input } from '@angular/core';
import { Email } from '../email.model';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './mailmandata.component.html',
  styleUrls: ['./mailmandata.component.css']
})
export class MailmandataComponent {
  @Input()
  emails!: Email[];
  orario: string = '';
  mostra: boolean = false; 

  espandiEmail(email: Email): void {
    email.espanso = !email.espanso;
  }

  rendiSpeciale(email: Email): void {
    email.speciale = !email.speciale;
  }



  getOrario(email: any) {
    email.orarioInvio = new Date().toLocaleTimeString();
  }
}