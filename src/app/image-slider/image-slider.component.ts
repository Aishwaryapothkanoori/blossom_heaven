import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent {
  images: string[] = [
    'assets/reviews/Screenshot 2024-03-12 104335.png',
    'assets/reviews/Screenshot 2024-03-12 104348.png',
    'assets/reviews/Screenshot 2024-03-12 104422.png',
    'assets/reviews/Screenshot 2024-03-12 104348.png',
    
    // Add more image URLs here
  ];
}
