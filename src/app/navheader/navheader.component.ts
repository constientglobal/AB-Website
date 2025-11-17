import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

declare const bootstrap: any;

@Component({
  selector: 'app-navheader',
  standalone: true,
  imports: [RouterModule, RouterLink, FormsModule],
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.css'],
})
export class NavheaderComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const offcanvas = this.el.nativeElement.querySelector('#mobileSidebar');

    if (offcanvas) {
      const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvas);

      offcanvas
        .querySelectorAll('a[routerLink]')
        .forEach((link: HTMLElement) => {
          link.addEventListener('click', () => {
            bsOffcanvas.hide(); // This properly closes the offcanvas menu
          });
        });
    }
  }

  // goToKycPage() {
  //   const mobileInput = document.getElementById(
  //     'mobileNumber'
  //   ) as HTMLInputElement | null;
  //   const emailInput = document.getElementById(
  //     'emailAddress'
  //   ) as HTMLInputElement | null;

  //   const mobile = mobileInput?.value.trim() || '';
  //   const email = emailInput?.value.trim() || '';

  //   if (mobile.length !== 10) {
  //     alert('Please enter a valid 10-digit Mobile Number.');
  //     return;
  //   }

  //   if (!email.includes('@') || !email.includes('.')) {
  //     alert('Please enter a valid Email address.');
  //     return;
  //   }

  //   const url = `https://kyc.absolutebroking.com/KYCUI/register?mobile=${encodeURIComponent(
  //     mobile
  //   )}&email=${encodeURIComponent(email)}`;
  //   window.location.href = url;
  // }
   goToKycPage(form?: any) {
    const mobileInput = document.getElementById('mobileNumber') as HTMLInputElement | null;
    const emailInput = document.getElementById('emailAddress') as HTMLInputElement | null;

    const mobile = mobileInput?.value.trim() || '';
    const email = emailInput?.value.trim() || '';

    if (mobile.length !== 10) {
      alert('Please enter a valid 10-digit Mobile Number.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid Email address.');
      return;
    }

    const url = `https://kyc.absolutebroking.com/KYCUI/register?mobile=${encodeURIComponent(
      mobile
    )}&email=${encodeURIComponent(email)}`;

    window.location.href = url;
  }
}
