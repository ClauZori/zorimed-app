import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegisterComponent {
removeImage() {
 
    this.profileImage = undefined;
    this.previewUrl = null;
   
}
  firstName = '';
  lastName = '';
  email = '';
  cnp = '';
  password = '';
  profileImage?: File;
  previewUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: Event): void {
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

  onRegister() {
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
