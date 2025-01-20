import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'imprint-en',
    loadComponent: () =>
      import('./imprint/imprint-en/imprint-en.component').then(
        (m) => m.ImprintEnComponent
      ),
  },
  {
    path: 'imprint-de',
    loadComponent: () =>
      import('./imprint/imprint-de/imprint-de.component').then(
        (m) => m.ImprintDeComponent
      ),
  },
  {
    path: 'legal-notice-en',
    loadComponent: () =>
      import('./legal-notice/legal-notice-en/legal-notice-en.component').then(
        (m) => m.LegalNoticeEnComponent
      ),
  },
  {
    path: 'legal-notice-de',
    loadComponent: () =>
      import('./legal-notice/legal-notice-de/legal-notice-de.component').then(
        (m) => m.LegalNoticeDeComponent
      ),
  },
  {
    path: 'legal-notice',
    redirectTo: 'legal-notice-en',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
