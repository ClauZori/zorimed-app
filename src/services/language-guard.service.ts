import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageGuardService implements CanActivate {
  private supportedLangs = ['en', 'ro'];

  constructor(
    private translateService: TranslateService,
    private translate: TranslateService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const lang = route.params['lang'];

    if (!this.supportedLangs.includes(lang)) {
      this.router.navigate(['/en/login']); 
      return false;
    }

    this.translate.use(lang);
    return true;
  }

  public initializeAppLanguages() {
    this.translateService.addLangs(this.supportedLangs);
    this.translateService.setDefaultLang('ro');
    this.translateService.use('ro');
  }
}
