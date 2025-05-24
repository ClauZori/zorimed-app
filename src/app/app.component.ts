import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageGuardService } from '../services/language-guard.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'zorimed-app';

  constructor(
    private languageGuardService: LanguageGuardService
  ) {

  }

  async ngOnInit() {
    this.initializeAppAsync();
  }

  ngOnDestroy() {
    
  }

  public async initializeAppAsync() {
    this.languageGuardService.initializeAppLanguages();
  }
}
