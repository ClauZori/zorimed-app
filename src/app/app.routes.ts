import { Routes } from '@angular/router';
import { LoginComponent } from '../components/pages/login/login.component';
import { LanguageGuardService } from '../services/language-guard.service';

export const routes: Routes = [
  {
    path: ':lang',
    canActivate: [LanguageGuardService],
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      // Add other components here, e.g., home, register, etc.
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'en/login' // Default to English
  },
  {
    path: '**',
    redirectTo: 'en/login'
  }
];
