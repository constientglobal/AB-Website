import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'

declare const bootstrap: any;

@Component({
  selector: 'app-navheader',
  standalone: true,
  imports: [RouterModule, RouterLink, FormsModule],
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.css']
})
export class NavheaderComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const offcanvas = this.el.nativeElement.querySelector('#mobileSidebar');

    if (offcanvas) {
      const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvas);

      offcanvas.querySelectorAll('a[routerLink]').forEach((link: HTMLElement) => {
        link.addEventListener('click', () => {
          bsOffcanvas.hide(); // This properly closes the offcanvas menu
        });
      });
    }
  }
}
