import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  signUpForm: FormGroup;
  showSignUpForm= true;
  signUpData: any = {};
  countries:any;

  ngOnInit(): void {
    this.loginService.getAllCountries().subscribe((data:any)=>{
      this.countries=data.sort((a: any, b: any) => a.name.common.localeCompare(b.name.common));
      //makes the countrys list alphabetical order
    });
  }

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      confirmPassword: ['', Validators.required],
      phno: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: ['', Validators.required],
      // country: ['', Validators.required],
      city: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator // Including the custom validator here
    }
    );
  }



  get password() {
    return this.signUpForm.get('password');
  }
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  signupSubmit() {
    // Handle form submission
    const form = this.signUpForm.value;
    if (!form.name || !form.email || !form.password || !form.phno || !form.address || !form.city) {
        alert("All fields are required.");
        return;
    }
    console.log('Submitting signup form...');
    console.log('Form validity:', this.signUpForm.valid);
    if (this.signUpForm.get('email')?.invalid) {
      const emailControl = this.signUpForm.get('email');
      if (emailControl && emailControl.value && !emailControl.errors?.['email']) {
        // Append @gmail.com if the email is not valid
        emailControl.setValue(emailControl.value + '@gmail.com');
      }
    }
    if (this.signUpForm.valid) {
      this.loginService.registerUser(this.signUpForm.value).subscribe(
        (response: any) => {
          console.log('Registration successful', response);
          // Optionally, you can navigate to a login page or display a success message.
          this.router.navigate(['/login']);
        },
        (error:any) => {
          console.error('Registration failed', error);
          // Handle errors, display error messages, etc.
          // Log the form control errors to identify the specific issue
    console.log('Form errors:', this.signUpForm.errors);

        }
      );
    } else {
      console.warn('Invalid form. Please check the entered details.');
      console.log('Form errors:', this.signUpForm.errors);
    }
}
handleEmailBlur() {
  // Implement your logic here if needed
  console.log('Email input blurred');
}
passwordMatchValidator(formGroup: FormGroup) {
  const password = formGroup.get('password');
  const confirmPassword = formGroup.get('confirmPassword');

  if (!password || !confirmPassword) {
    return null;
  }

  if (password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true }; // Return an error object
  } else {
    confirmPassword.setErrors(null);
    return null; // Return null if passwords match
  }
}

}
