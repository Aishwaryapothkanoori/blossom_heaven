import { Component,OnInit } from '@angular/core';
import { BlossomService } from '../blossom.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-wedding-flowers',
  templateUrl: './wedding-flowers.component.html',
  styleUrl: './wedding-flowers.component.css'
})
export class WeddingFlowersComponent implements OnInit{
  wedding:any;
  constructor(private service : BlossomService,private cartService: CartService){
  
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
}
