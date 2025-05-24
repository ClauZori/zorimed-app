import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { GenericComponent } from '../../generic/generic.component';
import { Router } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [
    SharedModule
  ]
})
export class RegisterComponent extends GenericComponent
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

  removeImage() {
    this.profileImage = undefined;
    this.previewUrl = null;
  }

  public firstName = '';
  public lastName = '';
  public email = '';
  public cnp = '';
  public password = '';
  public profileImage?: File;
  public previewUrl: string | ArrayBuffer | null = null;

  public onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.profileImage = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  public onRegister() {
    console.log('Registration Data:', {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      cnp: this.cnp,
      password: this.password,
      profileImage: this.profileImage
    });

    alert('Registration successful!');
  }
}
