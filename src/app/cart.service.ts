import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];
  private cartItemsKey = 'cartItems';
  private cartItems: any[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);
  constructor() {
    const storedItems = localStorage.getItem(this.cartItemsKey);
    if (storedItems) {
      this.items = JSON.parse(storedItems);
      this.updateCartItemCount();
    }
   }
  
  addToCart(item: any): void {
    // Check if an item with the same properties already exists in the cart
    const existingItem = this.items.find(i =>
      i.id === item.id && i.description === item.description /* Add other relevant properties here */
    );
  
    if (existingItem) {
      existingItem.quantity++; // Increment quantity if item already exists
    } else {
      item.quantity = 1; // Set initial quantity if item is added for the first time
      this.items.push(item);
    }
  
    console.log("Item added to cart:", item);
    console.log("Items in cart:", this.items);
    localStorage.setItem(this.cartItemsKey, JSON.stringify(this.items));
    this.updateCartItemCount();
  }
  
  
  
  
  getItems() : any[]{
    return this.items;
    
  }
  

  clearCart():void {
    this.items = [];
    localStorage.removeItem(this.cartItemsKey);
    this.updateCartItemCount();
  }

  removeFromCart(item: any): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log("Item removed from cart:", item);
      console.log("Items in cart:", this.items);
      localStorage.setItem(this.cartItemsKey, JSON.stringify(this.items));
      this.updateCartItemCount();
    }
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
  private updateCartItemCount(): void {
    this.cartItemCount.next(this.items.length);
  }

  getCartItemCount(): BehaviorSubject<number>  {
    return this.cartItemCount;
  }
  increaseQuantity(item: any): void {
    item.quantity++;
    localStorage.setItem(this.cartItemsKey, JSON.stringify(this.items));
    this.updateCartItemCount();
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
      localStorage.setItem(this.cartItemsKey, JSON.stringify(this.items));
      this.updateCartItemCount();
    }
  }
}
