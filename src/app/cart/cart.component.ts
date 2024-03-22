import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  item: any;
  totalPrice: number = 0;
  isLoggedIn: boolean = false;
  constructor(private cartService: CartService, private router: Router,private loginService: LoginService) {}

  addToCart(item : any) {
    // Call a service method to add the item to the cart
    this.cartService.addToCart(item);
    this.calculateTotalPrice();
  }
  ngOnInit(): void {
    this.item = this.cartService.getItems();
    this.calculateTotalPrice();
  }
  deleteFromCart(product: any): void {
    this.cartService.removeFromCart(product);
    this.item = this.cartService.getItems();
    this.calculateTotalPrice();
  }
  calculateTotalPrice(): void {
    this.totalPrice = this.cartService.getTotalPrice();
  }
  
  proceedToPayment(): void {
    this.isLoggedIn = this.loginService.getUserLoggedStatus();

    if (this.isLoggedIn) {
      console.log("User logged in, redirecting to payment page...");
      this.router.navigate(['/payment']);
    } else {
      console.log("User not logged in, redirecting to login page...");
      this.router.navigate(['/login']);
    }
  }
  increaseQuantity(product: any): void {
    this.cartService.increaseQuantity(product);
    this.calculateTotalPrice();
  }

  decreaseQuantity(product: any): void {
    product.quantity--;

  // If the quantity becomes 0, remove the item from the cart
  if (product.quantity === 0) {
    this.deleteFromCart(product);
  } else {
    // Update the total price and cart count
    this.calculateTotalPrice();
  }
  }
}
