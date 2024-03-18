import { CartService } from './../cart.service';
import { Component,OnInit } from '@angular/core';
import { BlossomService } from '../blossom.service';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrl: './parties.component.css'
})
export class PartiesComponent implements OnInit{
  parties:any;
  constructor(private service : BlossomService,private cartService: CartService){
  
  }
  ngOnInit(): void {
    this.service.getAllParties().subscribe((data : any)=>{
      this.parties=data;
    });
  }
  addToCart(parties: any) {
    console.log("Adding to cart:", parties);
    this.cartService.addToCart(parties);
  }
}
