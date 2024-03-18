import { CartService } from './../cart.service';
import { Component,OnInit } from '@angular/core';
import { BlossomService } from '../blossom.service';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrl: './birthday.component.css'
})
export class BirthdayComponent implements OnInit {
  birthdayCards:any;
  constructor(private service : BlossomService,private cartService: CartService){
  
  }
   
 


  ngOnInit(): void {
    this.service.getAllBirthdayCard().subscribe((data : any)=>{
      this.birthdayCards=data;
      console.log("Birthday Cards:",this.birthdayCards);
    });
  }

  addToCart(birthdayCard: any) {
    console.log("Adding to cart:", birthdayCard);
    this.cartService.addToCart(birthdayCard);
  }

}
