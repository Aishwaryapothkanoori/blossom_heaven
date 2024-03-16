import { Component,OnInit } from '@angular/core';
import { BlossomService } from '../blossom.service';
@Component({
  selector: 'app-gift-hamper',
  templateUrl: './gift-hamper.component.html',
  styleUrl: './gift-hamper.component.css'
})
export class GiftHamperComponent implements OnInit {
  gifthamper:any;
  constructor(private service : BlossomService){
  
  }
  ngOnInit(): void {
    this.service.getAllGiftHamper().subscribe((data : any)=>{
      this.gifthamper=data;
    });
  }
}
