import { Component,OnInit } from '@angular/core';
import { BlossomService } from '../blossom.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
curatedCollections:any;
constructor(private service : BlossomService,private router: Router){

}
navigateToBirthday() {
  this.router.navigateByUrl('/birthday');
}
navigateToParties() {
  this.router.navigateByUrl('/parties');
}
navigateToAniversary() {
  this.router.navigateByUrl('/aniversary');
}
navigateToSameDay() {
  this.router.navigateByUrl('/same-day');
}
navigateToWedding() {
  this.router.navigateByUrl('/wedding-flowers');
}
navigateToGiftHamper() {
  this.router.navigateByUrl('/gift-hamper');
}
navigateToNewArrivals() {
  this.router.navigateByUrl('/new-arrivals');
}
ngOnInit(): void {
  this.service.getAllCurratedCollections().subscribe((data : any)=>{
    this.curatedCollections=data;
  });
}}
