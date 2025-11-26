import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trainee',
  standalone: true, // ✅ REQUIRED FOR IMPORTS ARRAY TO WORK
  imports: [CommonModule], // ✅ Enables ngFor, ngIf, ngClass
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.css'], // ✅ Correct property name
})
export class TraineeComponent {
  currentIndex = 0;

  testimonials = [
    {
      image: 'assets/img/s.png',
      text: `The most impactful part was the supportive and high-performance culture fostered by the senior management and team leaders. My assigned mentor provided weekly, insightful guidance that significantly shaped my commercial perspective. The networking opportunities across different departments were fantastic, making the transition into the industry much smoother and less daunting.`,
      name: 'Sowmiya R',
      role: 'Assistant manager - Dealer',
      stars: '⭐ ⭐ ⭐ ⭐ ⭐',
    },
    {
      image: 'assets/img/t.png',
      text: `I was impressed by the opportunity to directly contribute to a live project involving the implementation of a new trading algorithm. This allowed me to apply my analytical skills immediately and understand the firm's technological backbone. While the training content was strong, a dedicated session on the future of FinTech and AI in broking would enhance the curriculum's forward-looking aspect.`,
      name: 'Thiyagu S',
      role: 'Assistant manager - Operations',
      stars: '⭐ ⭐ ⭐ ⭐ ☆',
    },
    {
      image: 'assets/img/m.png',
      text: `This program offers an incredibly steep and rewarding learning curve, pushing me outside my comfort zone to handle real client scenarios. The fast-paced environment truly reflects the dynamism of the financial markets. The only slight improvement would be to provide more pre-reading or introductory materials to optimize the initial week's absorption of basic industry terminology.`,
      name: 'Murugan Nagarajan K',
      role: 'Assistant manager - Operations',
      stars: '⭐ ⭐ ⭐ ⭐ ☆',
    },
    {
      image: 'assets/img/d.png',
      text: `The program's rotational structure was highly effective, offering deep exposure to both front-office and compliance operations. I especially valued the hands-on project in market risk modeling, which translated theoretical knowledge into practical skills. The mentorship in the sales division was excellent, though I would suggest extending the duration of the operational rotation for more detailed process understanding.`,
      name: 'Dhamini R',
      role: '____________________',
      stars: '⭐ ⭐ ⭐ ⭐ ☆',
    },
  ];

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }
}
