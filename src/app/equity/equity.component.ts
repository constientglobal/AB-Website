import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ourDirectorsInfo } from '../about/about.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-equity',
  imports: [CarouselModule, RouterLink],
  templateUrl: './equity.component.html',
  styleUrl: './equity.component.css'
})
export class EquityComponent {
  directorsInfo: ourDirectorsInfo[] = [
    {
      image: 'assets/img/CapitalAppreciation.png',
      name: ' Capital Appreciation',
      position: ' Managing Director',
      message: ' The value of shares tends to rise as companies grow and become more profitable, offering potential profit on sale.',
      facebook : '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/Dividends.png',
      name: 'Dividends',
      position: 'Director ',
      message: 'Many companies pay out a portion of their profits to shareholders, providing regular income.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/InflationHedge.png',
      name: 'Inflation Hedge',
      position: 'Director',
      message: 'Historically, equity investments have outpaced inflation, preserving and growing your purchasing power.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/Diversification.png',
      name: 'Diversification',
      position: 'Executive Director',
      message: 'Equity helps spread risk across various sectors and asset classes in an investment portfolio.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/Liquidity.png',
      name: 'Liquidity',
      position: 'Executive Director',
      message: 'Shares of public companies are generally easy to trade on stock exchanges, offering quick access to funds.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    }
  ];

}
