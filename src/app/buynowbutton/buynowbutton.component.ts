import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-buynowbutton',
  templateUrl: './buynowbutton.component.html',
  styleUrl: './buynowbutton.component.css'
})
export class BuynowbuttonComponent  {
  @Input()
  paymentLink: string="";
  constructor(private router: Router, private loginService: LoginService) {}
 buyNow(){
  if (this.loginService.getUserLoggedStatus()) {
    console.log("Buy Now clicked");
    window.location.href = this.paymentLink;
  } else {
    console.log("User not logged in, redirecting to login page...");
    this.router.navigate(['/login']);
  }
}
}
