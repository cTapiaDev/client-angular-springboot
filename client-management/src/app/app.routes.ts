import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [  
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
