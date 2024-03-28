import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Contact } from '../../model/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private http = inject(HttpClient);

  list() {
    return this.http.get<Contact[]>(environment.urlContacts);
  }

  get(id: number) {
    return this.http.get<Contact>(environment.urlContacts + id);
  }

  create(contact: any) {
    return this.http.post<Contact>(environment.urlContacts, contact);
  }

  update(id: number, contact: any) {
    return this.http.put<Contact>(environment.urlContacts + id, contact);
  }

  delete(id: number) {
    return this.http.delete<void>(environment.urlContacts + id);
  }
}
