import { Component, OnInit, inject } from '@angular/core';
import { ContactService } from '../../services/contact/contact.service';
import { DatePipe } from '@angular/common';
import { Contact } from '../../model/contact.interface';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit {
  private contactService  = inject(ContactService);

  contacts: Contact[] = [];

  ngOnInit(): void {
      this.contactService.list()
        .subscribe((contacts) => {
          this.contacts = contacts;
        });
  }
}
