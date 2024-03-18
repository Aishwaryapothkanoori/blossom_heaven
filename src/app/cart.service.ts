import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];
  constructor() { }
  
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
  }
  
  
  
  
  getItems() {
    return this.items;
    
  }
  

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeFromCart(item: any): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log("Item removed from cart:", item);
      console.log("Items in cart:", this.items);
    }
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}
