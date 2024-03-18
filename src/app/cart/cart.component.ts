import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  item: any;
  totalPrice: number = 0;
  constructor(private cartService: CartService) {}

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
    // Call a service method to remove the item from the cart
    this.cartService.removeFromCart(product);
    // Update the local item list to reflect the changes
    this.item = this.cartService.getItems();
    this.calculateTotalPrice();
  }
  calculateTotalPrice(): void {
    this.totalPrice = this.cartService.getTotalPrice();
  }
  
  proceedToPayment(): void {
    // Implement the logic to navigate to the payment page or trigger payment process
    console.log("Proceeding to payment...");
    // For example, you can navigate to a payment component or route
  }
}
