import { Component,OnInit } from '@angular/core';
import { BlossomService } from '../blossom.service';
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-wedding-flowers',
  templateUrl: './wedding-flowers.component.html',
  styleUrl: './wedding-flowers.component.css'
})
export class WeddingFlowersComponent implements OnInit{
  wedding:any;
  constructor(private service : BlossomService,private cartService: CartService,private loginService: LoginService, private router: Router){
  
  }
  ngOnInit(): void {
    this.service.getAllWeddingFlowers().subscribe((data : any)=>{
      this.wedding=data;
    
    });
  }
  addToCart(wedding: any) {
    console.log("Adding to cart:", wedding);
    this.cartService.addToCart(wedding);
  }
  buyNow(wedding: any) {
    if (this.loginService.getUserLoggedStatus()) {
      console.log("User logged in, you can proceed to payment after clicking 'Buy Now' again.");
      // Redirect to the buy now page
      // window.location.href = "https://rzp.io/l/SrQxRd4"; // Or navigate to your buy now page route
    } else {
      // If user is not logged in, redirect to the login page
      console.log("User not logged in, redirecting to login page...");
      this.router.navigate(['/login'], { queryParams: { returnUrl: '/wedding-flowers' }});
    }
  }
  
}
