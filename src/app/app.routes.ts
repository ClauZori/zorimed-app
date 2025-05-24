import { Routes } from '@angular/router';
import { LoginComponent } from '../components/pages/login/login.component';
import { RegisterComponent } from '../components/pages/register/register.component';
import { LanguageGuardService } from '../services/language-guard.service';
import { ContentComponent } from '../components/pages/content/content.component';

export const routes: Routes = [
  {
    path: ':lang',
    canActivate: [LanguageGuardService],
    children: [
      // Login and Register without layout
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },

      // All other pages with layout
      {
        path: 'content',
        component: ContentComponent,
        children: [
        ]
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'en/login'
  },
  {
    path: '**',
    redirectTo: 'en/login'
  }
];
