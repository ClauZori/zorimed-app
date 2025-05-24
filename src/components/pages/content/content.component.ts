import { Component, OnDestroy, OnInit } from '@angular/core';
import { GenericComponent } from '../../generic/generic.component';
import { Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SharedModule
  ],
})
export class ContentComponent extends GenericComponent 
  implements OnInit, OnDestroy {

  constructor(
    protected override router: Router,
    protected override location: Location,
    protected override translateService: TranslateService
  ) {
    super(router, location, translateService);
  }

  override ngOnInit() {
    super.ngOnInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
