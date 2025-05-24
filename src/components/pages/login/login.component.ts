import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { GenericComponent } from '../../generic/generic.component';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    SharedModule
  ]
})
export class LoginComponent extends GenericComponent
  implements OnInit, OnDestroy {
  username = '';
  password = '';
  loginError = false;

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

  onLogin() {
    // if (this.authService.login(this.username, this.password)) {
    //   this.router.navigate(['/dashboard']);
    // } else {
    //   this.loginError = true;
    // }
  }
}
