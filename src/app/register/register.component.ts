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
      password: ['', [Validators.required, Validators.pattern(/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/)]],
      phno: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: ['', Validators.required],
      // country: ['', Validators.required],
      city: ['', Validators.required]
    });
  }



  get password() {
    return this.signUpForm.get('password');
  }

  signupSubmit() {
    // Handle form submission
    console.log('Submitting signup form...');
    console.log('Form validity:', this.signUpForm.valid);
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
    }
}

}
