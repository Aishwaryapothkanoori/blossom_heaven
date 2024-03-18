import { Component,OnInit } from '@angular/core';
import { BlossomService } from '../blossom.service';
import { CartService } from './../cart.service';
@Component({
  selector: 'app-aniversary',
  templateUrl: './aniversary.component.html',
  styleUrl: './aniversary.component.css'
})
export class AniversaryComponent implements OnInit{
aniversary:any;
  constructor(private service : BlossomService,private cartService: CartService){
  
  }
  ngOnInit(): void {
    this.service.getAllAniversary().subscribe((data : any)=>{
      this.aniversary=data;
    });
  }
  addToCart(aniversary: any) {
    console.log("Adding to cart:", aniversary);
    this.cartService.addToCart(aniversary);
  }
}
