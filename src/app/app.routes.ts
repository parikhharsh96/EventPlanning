import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path: 'home', loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent)},
    {path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(mod => mod.DashboardComponent)},
    
];
