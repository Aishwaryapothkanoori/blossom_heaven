import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router, private service: LoginService) {}
  ngOnInit(): void {
    this.service.getAllCustomers().subscribe(
      (data:any)=>{
      this.customer=data
      }
    )
  }
  loginValidate(form: any) {
    if (form.email == "admin@gmail.com" && form.password == "admin") {
      alert("welcome to admin page");
      // this.customer.setUserLoggedIn();
      this.router.navigate(['admin']);
      form.resetForm();
      // return;
      
    }
    else{
      let foundUser=false;
      this.service.getAllCustomers().subscribe((customers:any[])=>{
        customers.forEach((customer:any)=>{
          if(form.email===customer.email && form.password===customer.password){
            foundUser=true;
            alert("login successful");
            // this.customer.setUserLoggedIn();
            this.router.navigate(['home']);
          }
        });
        if(!foundUser){
          alert("invalid credentials")
          this.customer.setUserLogout();
        }
      });
    //   for(let customer of this.customer){
    //   if(customer.email==form.email && customer.password==form.password){
       
    //     this.router.navigate(['/home'])
    //    //document.write("welcome to customer page"+ this.email)
    //     this.service.setUserLoggedIn()
    //     return;
    //   }
    // }
    // }
    // alert("login failed");
  }
}
}
