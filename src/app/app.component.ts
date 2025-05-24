import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguageGuardService } from '../services/language-guard.service';
import { ContentComponent } from '../components/pages/content/content.component';
import { SharedModule } from '../shared/shared.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    SharedModule,
    RouterOutlet
  ]
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
