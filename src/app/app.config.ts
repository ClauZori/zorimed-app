import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageGuardService } from '../services/language-guard.service';
import { MatIconModule } from '@angular/material/icon';

const clients: any[] = [
];

const services: any[] = [
  LanguageGuardService
]

export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    ...clients,
    ...services,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    RouterOutlet,
    BrowserModule,
    // {
    //   provide: API_BASE_URL,
    //   useFactory: () => environment.SERVER_URL
    // },
    importProvidersFrom(
      HttpClientModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot({ timeOut: 15000, closeButton: true, progressBar: true, }),
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: TranslateHttpLoaderFactory,
          deps: [HttpClient]
        }
      }),
    )
  ]
};

