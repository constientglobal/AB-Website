import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatweoffer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatweoffer.component.html',
  styleUrls: ['./whatweoffer.component.css']
})
export class WhatweofferComponent implements OnInit {

  services = [
    { title: 'Equity Trading', desc: 'Trade across BSE & NSE with advanced tools, insights, and real-time execution', icon: '📈', link: 'https://www.absolutebroking.com/equity' },
    { title: 'Mutual Fund Investment', desc: 'Diversify your wealth through expert-curated mutual fund portfolios', icon: '📊', link: 'https://www.absolutebroking.com/mutualfund' },
    { title: 'IPO Opportunities', desc: 'Apply for Initial Public Offerings directly and securely via our platform', icon: '📝', link: 'https://www.absolutebroking.com/ipo' },
    { title: 'Commodity Trading', desc: 'Access MCX & NCDEX for commodity derivatives and risk hedging', icon: '🛢️', link: 'https://www.absolutebroking.com/commodity' },
    { title: 'Fixed Income Products', desc: 'Invest in bonds, debentures, and fixed income products for steady returns', icon: '💰', link: 'https://www.absolutebroking.com/fixedincome' },
    { title: 'Portfolio Management', desc: 'Professional PMS services tailored to meet high-net-worth goals.', icon: '🧠', link: 'https://www.absolutebroking.com/pmsandaif' },
    { title: 'Insurance & Protection', desc: 'Life & general insurance solutions to secure your future', icon: '🛡️', link: 'https://www.absolutebroking.com/insurance' },
    { title: 'Loans Against Securities', desc: 'Get liquidity without selling your investments', icon: '🏦', link: 'https://www.absolutebroking.com/loans' },
    { title: 'Financial Planning', desc: 'Personalized planning for your long-term financial well-being ', icon: '📆', link: 'https://www.absolutebroking.com/mtf' },
  ];

  chunkedServices: any[][] = [];
  cardsPerSlide = 3;

  ngOnInit() {
    // Adjust cards per slide based on screen size for responsiveness
    if (window.innerWidth < 576) {
      this.cardsPerSlide = 1; // Mobile
    } else if (window.innerWidth < 992) {
      this.cardsPerSlide = 2; // Tablet
    } else {
      this.cardsPerSlide = 3; // Desktop
    }

    this.chunkedServices = this.chunkArray(this.services, this.cardsPerSlide);

    // Initialize Bootstrap Carousel with options
    setTimeout(() => {
      const carouselEl = document.getElementById('servicesCarousel');
      if (carouselEl && (window as any).bootstrap) {
        new (window as any).bootstrap.Carousel(carouselEl, {
          interval: 4000,
          wrap: true,
          touch: true
        });
      }
    }, 0);
  }

  private chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }
}
