import { Component,OnInit } from '@angular/core';
import { BlossomService } from '../blossom.service';
@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.css'
})
export class NewArrivalsComponent implements OnInit{
  arrivals:any;
  constructor(private service : BlossomService){
  
  }
  ngOnInit(): void {
    this.service.getAllNewArrivals().subscribe((data : any)=>{
      this.arrivals=data;
    });
  }
}

