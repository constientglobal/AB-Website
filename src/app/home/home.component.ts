import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink ,Router} from '@angular/router';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule, RouterModule, RouterLink,CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}
  product: productInfo[] = [
      {
        image: 'assets/img/values-1.jpg',
        header: 'Broking',
        message : 'Absolute Broking is one of the fastest growing stock broking company. Equity, Derivatives, Commodity,Currency market is often considered as the main engine driving the Economy.',
        category : ["Equity","Commodity","Currency"]
      },
      {
        image: 'assets/img/dp1.png',
        header: 'Mutual Funds',
        message : 'Mutual Funds are ideal for investors who want to invest in various kinds of scheme. The range of products includes liquid, gilt, debt, equity and balanced funds.',
        category : []
      },
      {
        image: 'assets/img/values-3.png',
        header: 'IPO',
        message : 'Apply online and invest in companies listed on the Indian exchanges with an IPO (Initial Public Offering) using mobile UPI with your Absolute Broking Account.',
        category : []
      },
      {
        image: 'assets/img/widget1.png',
        header: 'MTF',
        message : 'At Absolute Broking Private Limited, we offer the Margin Trading Facility (MTF) to empower discerning investors and traders to take advantage of market opportunities by leveraging their capital.',
        category : []
      },
      {
        image: 'assets/img/values-3.png',
        header: 'DP',
        message : 'At Absolute Broking Private Limited, we offer comprehensive depository services to ensure the safe, efficient, and convenient holding of your securities in electronic form.',
        category : []
      },
      {
        image: 'assets/img/insuranceprod.png',
        header: 'Insurance',
        message : 'At Absolute Broking Private Limited, we understand that true financial well-being extends beyond investments – it encompasses comprehensive protection for you and your loved ones.',
        category : []
      },
      {
        image: 'assets/img/loan3.png',
        header: 'Loans',
        message : 'Welcome to our comprehensive guide on various types of loans – essential financial tools that can help individuals and businesses meet their diverse funding needs, from personal expenses to large investments.',
        category : []
      },
      {
        image: 'assets/img/dp1.png',
        header: 'Wealth',
        message : ' Wealth management is an all-encompassing financial service that combines financial planning, investment portfolio management, and a range of aggregated financial services.',
        category : ["Private Equity","PMS/AIF","Fixed Income"]
      }
    ];

  homepageAlert : boolean = false;
  ngOnInit(): void {
    this.homepageAlert = true;
  }

  alertClose(){
    this.homepageAlert=false;
  }
  prodRedirect(value: string) {
    if(value === "Mutual Funds"){
      this.router.navigateByUrl(`/mutualfund`);
    }
    else if(value === "IPO"){
       this.router.navigateByUrl(`/ipo`);
    }
    else if(value === "Equity"){
      this.router.navigateByUrl(`/equity`);
    }
    else if(value === "Commodity"){
      this.router.navigateByUrl(`/commodity`);
    }
    else if(value === "Currency"){
      this.router.navigateByUrl(`/currency`);
    }
    else if(value === "MTF"){
      this.router.navigateByUrl(`/mtf`);
    }
    else if(value === "DP"){
      this.router.navigateByUrl(`/dp`);
    }
    else if(value === "Insurance"){
      this.router.navigateByUrl(`/insurance`);
    }
    else if(value === "Loans"){
      this.router.navigateByUrl(`/loans`);
    }
    else if(value === "Private Equity"){
      this.router.navigateByUrl(`/privateequity`);
    }
    else if(value === "PMS/AIF"){
      this.router.navigateByUrl(`/pmsandaif`);
    }
    else if(value === "Fixed Income"){
      this.router.navigateByUrl(`/fixedincome`);
    }
  }
}

export interface productInfo {
  image : string,
  header : string,
  message : string,
  category : string[]
}
