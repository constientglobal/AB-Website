import { Component } from '@angular/core';

@Component({
  selector: 'app-internship-program',
  templateUrl: './internship-program.component.html',
  styleUrls: ['./internship-program.component.css'] // ✅ fixed plural
})
export class InternshipProgramComponent {
toggleText(event: Event) {
  const btn = event.target as HTMLElement;
  const card = btn.closest('.col-md-6');
  if (card) {
    const moreText = card.querySelector('.more-text') as HTMLElement;
    moreText.classList.toggle('d-none');
  }
}

}
