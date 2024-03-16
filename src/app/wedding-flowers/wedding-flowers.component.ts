import { Component,OnInit } from '@angular/core';
import { BlossomService } from '../blossom.service';
@Component({
  selector: 'app-wedding-flowers',
  templateUrl: './wedding-flowers.component.html',
  styleUrl: './wedding-flowers.component.css'
})
export class WeddingFlowersComponent implements OnInit{
  wedding:any;
  constructor(private service : BlossomService){
  
  }
  ngOnInit(): void {
    this.service.getAllWeddingFlowers().subscribe((data : any)=>{
      this.wedding=data;
    });
  }
}
