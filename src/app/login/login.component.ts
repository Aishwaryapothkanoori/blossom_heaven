import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  email: String= '';
  password: String = '';
  customer :any;
  captcha: string = '';
  captchaInput: string = '';
  constructor(private router: Router,
     private service: LoginService,
      private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.generateCaptcha();
    this.service.isLoggedIn.subscribe((loggedIn: boolean) => {
      this.service.setUserLoggedIn(); // Update the isLoggedIn flag in the service
    });
    this.service.getAllCustomers().subscribe(
      (data:any)=>{
      this.customer=data
      }
      
    )
    
  }
//   loginValidate(form: any) {
//     if (!form.email || !form.password|| !this.captchaInput) {
//       alert("Email, password, and captcha are required.");
//       return;
//     }
    
//     if (form.email == "admin@gmail.com" && form.password == "admin") {
//       alert("welcome to admin page");
//       this.service.loginSuccess(true);
//       // this.customer.setUserLoggedIn();
//       this.router.navigate(['admin']);
//       form.resetForm();
//       // return;
      
//     }
//     else{
//       let foundUser=false;
//       this.service.getAllCustomers().subscribe((customers:any[])=>{
//         customers.forEach((customer:any)=>{
//           if(form.email===customer.email && form.password===customer.password){
//             foundUser=true;
//             alert("login successful");
//             // this.customer.setUserLoggedIn();
//             this.service.loginSuccess(false);
            
//             const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
//             if (returnUrl.includes('/wedding-flowers')) {
//               // Store the information that the user intends to make a purchase
//               sessionStorage.setItem('pendingPurchase', 'true');
//             }
//             this.router.navigateByUrl(returnUrl);
//             // return;
//           }
//         });
//         if(!foundUser){
//           alert("invalid credentials")
//           this.service.setUserLogout();
//         }
//       });
   
//   }
// }
loginValidate(form: any) {
  if (!form.email || !form.password || !this.captchaInput) {
    alert("Email, password, and captcha are required.");
    return;
  }
  if (this.captchaInput.toLowerCase() !== this.captcha.toLowerCase()) {
    alert("Incorrect captcha, please try again.");
    return;
  }
  if (form.email == "admin@gmail.com" && form.password == "admin") {
    alert("Welcome to admin page.");
    this.service.loginSuccess(true);
    this.router.navigate(['admin']);
  } else {
    let foundUser = false;
    this.service.getAllCustomers().subscribe((customers: any[]) => {
      customers.forEach((customer: any) => {
        if (form.email === customer.email && form.password === customer.password) {
          foundUser = true;
          alert("Login successful.");
          this.service.loginSuccess(false);

          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
          if (returnUrl.includes('/wedding-flowers')) {
            // Store the information that the user intends to make a purchase
            sessionStorage.setItem('pendingPurchase', 'true');
          }
          this.router.navigateByUrl(returnUrl);
        }
      });
      if (!foundUser) {
        alert("Invalid credentials.");
        this.service.setUserLogout();
      }
    });
  }
}
generateCaptcha(): void {
  const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = 6;
  this.captcha = Array.from({ length }, () =>
    possibleChars[Math.floor(Math.random() * possibleChars.length)]
  ).join('');
}
}
