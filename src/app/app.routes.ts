import { Routes } from '@angular/router';
import { LoginComponent } from '../components/pages/login/login.component';
import { LanguageGuardService } from '../services/language-guard.service';
import { RegisterComponent } from '../components/pages/register/register.component';

export const routes: Routes = [
    {
        path: ':lang',
        canActivate: [LanguageGuardService],
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
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
