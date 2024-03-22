import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isLoggedIn: boolean = false;
  cartItemCount: number = 0; // Assuming initially user is not logged in

  constructor(private service: LoginService, private router: Router,private cartService: CartService) {}
  // Method to handle login
  ngOnInit() {
    this.isLoggedIn = this.service.isAuthenticated();
    this.service.isLoggedIn.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });
    this.cartService.getCartItemCount().subscribe((count:number) => {
      this.cartItemCount = count;
    });
  }
  logout():void {
    this.service.logout();
    this.router.navigate(['/home']);
  }
}
