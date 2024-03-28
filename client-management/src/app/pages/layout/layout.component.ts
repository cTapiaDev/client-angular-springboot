import { Component, OnInit } from '@angular/core';
import { ClientsComponent } from '../clients/clients.component';
import { ProfilesComponent } from '../profiles/profiles.component';
import { SidebarService } from '../../services/sidebar/sidebar.service';
import { CreateComponent } from '../clients/create/create.component';
import { EditComponent } from '../clients/edit/edit.component';
import { DeleteComponent } from '../clients/delete/delete.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ClientsComponent, ProfilesComponent, CreateComponent, EditComponent, DeleteComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

  constructor(private sidebarService: SidebarService) {}

  public viewClients?: boolean = true;
  public viewProfiles?: boolean;

  public viewCreateClient?: boolean;
  public viewEditClient?: boolean;
  public viewDeleteClient?: boolean;

  ngOnInit(): void {
    this.sidebarService.disClientsOn.subscribe(data => {
      this.viewClients = data;
      this.viewProfiles = false;
      this.viewCreateClient = false;
      this.viewEditClient = false;
      this.viewDeleteClient = false;
    })

    this.sidebarService.disProfilesOn.subscribe(data => {
      this.viewProfiles = data;
      this.viewClients = false;
      this.viewCreateClient = false;
      this.viewEditClient = false;
      this.viewDeleteClient = false;
    })

    this.sidebarService.disCreateClient.subscribe(data => {
      this.viewCreateClient = data;
      this.viewProfiles = false;
      this.viewClients = false;
      this.viewEditClient = false;
      this.viewDeleteClient = false;
    })

    this.sidebarService.disEditClient.subscribe(data => {
      this.viewEditClient = data;
      this.viewProfiles = false;
      this.viewClients = false;
      this.viewCreateClient = false;
      this.viewDeleteClient = false;
    })

    this.sidebarService.disDeleteClient.subscribe(data => {
      this.viewDeleteClient = data;
      this.viewProfiles = false;
      this.viewClients = false;
      this.viewEditClient = false;
      this.viewCreateClient = false;
    })
  }
}
