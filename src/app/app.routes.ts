import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then((page) => page.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((page) => page.AboutComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then((page) => page.ContactComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then((page) => page.NotFoundComponent)
  }
];
