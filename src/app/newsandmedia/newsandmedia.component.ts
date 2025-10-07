import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newsandmedia',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './newsandmedia.component.html',
  styleUrls: ['./newsandmedia.component.css']
})
export class NewsandmediaComponent {
  posts = [
    { id: 1, image: 'assets/img/m10.png', title: '', subtitle: '' },
    { id: 2, image: 'assets/img/m9.png', title: '', subtitle: '' },
    { id: 3, image: 'assets/img/m7.png', title: '', subtitle: '' },
    { id: 4, image: 'assets/img/m11.png', title: '', subtitle: '' },
    { id: 5, image: 'assets/img/m8.png', title: '', subtitle: '' },
    { id: 6, image: 'assets/img/m1.png', title: '', subtitle: '' },
    { id: 6, image: 'assets/img/m2.png', title: '', subtitle: '' }
  ];
}


    // { id: 1, image: 'assets/img/m10.png', title: 'Proudly Recognized as a DPIIT Startup', subtitle: 'DPIIT #Startupindia • 5th August 2025' },
    // { id: 2, image: 'assets/img/m9.png', title: 'Shining Star of May 🌟', subtitle: 'Jeeva – DM • 6th August 2025' },
    // { id: 3, image: 'assets/img/m7.png', title: 'Achiever of the Month – June 2025', subtitle: 'Selin Jayaselvi - RM • 6th August 2025' },
    // { id: 4, image: 'assets/img/m11.png', title: 'Absolute Achiever – June Edition', subtitle: 'Ramya Balaji - RM • 6th August 2025' },
    // { id: 5, image: 'assets/img/m8.png', title: 'Champion of the Month – July', subtitle: 'Selin Jayaselvi - RM • 6th August 2025' },
    // { id: 6, image: 'assets/img/m1.png', title: 'Top Performer - Cash Price', subtitle: 'Selin Jayaselvi - RM • 6th August 2025' },
    // { id: 6, image: 'assets/img/m2.png', title: 'Top Performer - Cash Price', subtitle: 'Selin Jayaselvi - RM • 6th August 2025' }
