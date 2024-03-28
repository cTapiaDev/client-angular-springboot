import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  @Output() disClientsOn: EventEmitter<any> = new EventEmitter();
  @Output() disProfilesOn: EventEmitter<any> = new EventEmitter();

  @Output() disCreateClient: EventEmitter<any> = new EventEmitter();
  @Output() disEditClient: EventEmitter<any> = new EventEmitter();
  @Output() disDeleteClient: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
