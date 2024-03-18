import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router){

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
}
