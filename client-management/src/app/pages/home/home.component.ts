import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, LayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
