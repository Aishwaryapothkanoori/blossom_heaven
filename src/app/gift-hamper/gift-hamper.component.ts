import { Component,OnInit } from '@angular/core';
import { BlossomService } from '../blossom.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-gift-hamper',
  templateUrl: './gift-hamper.component.html',
  styleUrl: './gift-hamper.component.css'
})
export class GiftHamperComponent implements OnInit {
  gifthamper:any;
  constructor(private service : BlossomService,private cartService: CartService){
  
  }
  ngOnInit(): void {
    this.service.getAllGiftHamper().subscribe((data : any)=>{
      this.gifthamper = data.map((gift: any) => ({ ...gift, quantity: 1 }));
    });
  }
  addToCart(gifthamper: any) {
    console.log("Adding to cart:", gifthamper);
    this.cartService.addToCart(gifthamper);
  }


  
}
