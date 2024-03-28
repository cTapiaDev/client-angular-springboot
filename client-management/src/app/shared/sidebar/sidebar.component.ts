import { Component, Input, OnInit } from '@angular/core';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { SidebarService } from '../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() clientsOn?: boolean;
  @Input() profilesOn?: boolean;

  @Input() createClient?: boolean;
  @Input() editClient?: boolean;
  @Input() deleteClient?: boolean;

  constructor(private sidebarService: SidebarService) {}

  viewClients() {
    this.clientsOn = true;
    this.sidebarService.disClientsOn.emit({
      data: this.clientsOn
    })
  }

  viewProfiles() {
    this.profilesOn = true;
    this.sidebarService.disProfilesOn.emit({
      data: this.profilesOn
    })
  }

  viewCreateClient() {
    this.createClient = true;
    this.sidebarService.disCreateClient.emit({
      data: this.createClient
    })
  }

  viewEditClient() {
    this.editClient = true;
    this.sidebarService.disEditClient.emit({
      data: this.editClient
    })
  }

  viewDeleteClient() {
    this.deleteClient = true;
    this.sidebarService.disDeleteClient.emit({
      data: this.deleteClient
    })
  }
}
