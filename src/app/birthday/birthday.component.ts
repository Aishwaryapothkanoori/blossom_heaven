import { Component,OnInit } from '@angular/core';
import { BlossomService } from '../blossom.service';
@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrl: './birthday.component.css'
})
export class BirthdayComponent implements OnInit {
  birthdayCards:any;
  constructor(private service : BlossomService){
  
  }
  ngOnInit(): void {
    this.service.getAllBirthdayCard().subscribe((data : any)=>{
      this.birthdayCards=data;
    });
  }
}
