import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-customer-stories',
  templateUrl: './customer-stories.component.html',
  styleUrl: './customer-stories.component.css',
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in-out'),
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class CustomerStoriesComponent{

  slides = [
    { id: 1, imageUrl: 'assets/reviews/Screenshot 2024-03-12 104335.png' },
    { id: 2, imageUrl: 'assets/reviews/Screenshot 2024-03-12 104348.png'},
    { id: 1, imageUrl: 'assets/reviews/Screenshot 2024-03-12 104422.png' },
    { id: 2, imageUrl: 'assets/reviews/Screenshot 2024-03-12 104348.png'},
    { id: 1, imageUrl: 'assets/reviews/Screenshot 2024-03-12 104335.png' },
    { id: 2, imageUrl: 'assets/reviews/Screenshot 2024-03-12 104348.png'},
    // Add more slides as needed
  ];
  isOpen = false;

  togglePanel() {
    this.isOpen = !this.isOpen;
  }
  constructor() { }
  carouselConfig: any = {
    // Your configuration options here
  };


 
}
