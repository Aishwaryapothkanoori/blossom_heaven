import { Component,OnInit } from '@angular/core';
import { BlossomService } from '../blossom.service';
@Component({
  selector: 'app-aniversary',
  templateUrl: './aniversary.component.html',
  styleUrl: './aniversary.component.css'
})
export class AniversaryComponent {
aniversary:any;
  constructor(private service : BlossomService){
  
  }
  ngOnInit(): void {
    this.service.getAllAniversary().subscribe((data : any)=>{
      this.aniversary=data;
    });
  }
}
