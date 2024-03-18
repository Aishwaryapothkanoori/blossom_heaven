import { Component,OnInit } from '@angular/core';
import { BlossomService } from '../blossom.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.css'
})
export class NewArrivalsComponent implements OnInit{
  arrivals:any;
  constructor(private service : BlossomService,private cartService: CartService){
  
  }
  ngOnInit(): void {
    this.service.getAllNewArrivals().subscribe((data : any)=>{
      this.arrivals=data;
    });
  }
  addToCart(arrivals: any) {
    console.log("Adding to cart:", arrivals);
    this.cartService.addToCart(arrivals);
  }
}

