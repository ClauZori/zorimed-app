import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageGuardService } from '../services/language-guard.service';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SidebarComponent } from "../components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
],
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
