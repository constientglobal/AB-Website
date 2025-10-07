import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface Director {
  img: string;
  alt: string;
  description?: string;
}
@Component({
  selector: 'app-about',
  imports: [CarouselModule, CommonModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit, OnDestroy {
  selectedDirector: Director | null = null;
  index = 0;
  visibleCards = 4;
  autoSlideInterval: any;
  directors: Director[] = [
    {
      img: 'assets/img/KKS.png',
      alt: 'Karthik - Executive Director',
      description: `
        <h4 class="text-dark-blue fw-bold text-center mb-3 border-bottom pb-2">Visionary Leadership for Wealth Creation</h4>
        <p><strong>Karthik KS:</strong> our Chief Executive Officer, brings a wealth of experience to the financial
        services sector, with a career spanning since 2003. With an MS in Information Technology &amp;
        Management, Karthik has a unique blend of technical knowledge and financial acumen.</p>
        <p>His professional journey includes significant contributions at leading firms such as Prudent
        Corporate Advisory Services, Angel One, and ICICI Bank. Throughout his career, he has
        consistently demonstrated expertise in sales and distribution, handling responsibilities at
        various levels and driving market success.</p>
        <p>Karthik's leadership is centred on leveraging technology and strategic insights to create
        value and drive sustainable growth for our clients and our organization.</p>
      `
    },
    {
      img: 'assets/img/KDJ.png', alt: 'Karthikeyan D - Chief Business Officer',
      description: `          
          <h4 class="text-dark-blue fw-bold text-center mb-3 border-bottom pb-2">Experience That Drives Excellence</h4>
          <p><strong>Karthikeyan D</strong>: serves as our Chief Business Officer, bringing over two decades of
          extensive experience to the financial services industry. As a science post-graduate, he provides a
          unique, analytical, and data-driven perspective to market research and advisory.</p>
          <p>His career includes significant roles at leading financial institutions such as Reliance
          Securities Ltd and Karvy Broking, where he honed his expertise. Karthikeyan&#39;s profound
          knowledge of market dynamics, combined with his dedication to meticulous research,
          ensures our clients receive the most insightful and actionable guidance, driving their success
          and growth.</p>`
    },
    {
      img: 'assets/img/A.png', alt: 'Anbazhagan T - Vice President',
      description: `
                <h4 class="text-dark-blue fw-bold text-center mb-3 border-bottom pb-2">Building Trust Through Expertise</h4>
          <p><strong>Anbazhagan T</strong>, our Vice President, is a dynamic investment professional with a strong
            foundation built in the banking and insurance sectors. His expertise is a result of his
            comprehensive understanding of <strong>mutual funds, financial risk,</strong> and <strong>distribution
              strategy.</strong></p>
          <p>With a proven track record, Anbazhagan excels at cultivating and maintaining key
            relationships across both institutional and retail channels. His ability to connect with clients
            and partners, combined with his deep industry knowledge, makes him an invaluable leader
            in our organization.</p>`
    },
    {
      img: 'assets/img/SES.png', alt: 'P. Seshathri - Assistant Vice President',
      description: `
                <h4 class="text-dark-blue fw-bold text-center mb-3 border-bottom pb-2">Empowering Your Financial Journey</h4>
          <p><strong>P. Seshathri</strong>, our Assistant Vice President, is a seasoned leader with over <strong>15
              years of experience</strong> in the financial industry. With a strong background in broking and wealth
            management, he has successfully led sales and distribution efforts, consistently driving
            growth and building lasting client relationships. Seshathri’s deep market knowledge and
            strategic approach are key to our commitment to delivering exceptional service and helping
            you achieve your financial goals.</p>`
    },
    {
      img: 'assets/img/N.png', alt: 'Mr. Neethin Kumar - Product Head - Commodity',
      description: `
                <h4 class="text-dark-blue fw-bold text-center mb-3 border-bottom pb-2">Expert Insights for Smart Trading</h4>
          <p><strong>Mr. Neethin Kumar</strong>, our Product Head - Commodity, brings over <strong>20 years of strong
              dealing and analytical experience</strong> in the commodities market. He has an impressive career history,
            having worked exclusively on commodity trading and advisory at leading firms such as <strong>India
              Infoline</strong> and <strong>Angel One</strong>. His extensive knowledge and sharp insights are
            instrumental in providing our clients with top-tier guidance and support in the world of commodity trading.
          </p>`
    }
  ];

  directorsInfo: ourDirectorsInfo[] = [
    {
      image: 'assets/img/team/pmg.png',
      name: ' PM Gurudas',
      position: ' Managing Director',
      message: 'Pioneering Change with Purpose & Vision',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/vig.png',
      name: 'Vignesha',
      position: 'Director ',
      message: 'Driving digital growth & strategy.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/eswr.png',
      name: 'Eshvar',
      position: 'Director',
      message: ' Financial stewardship & Planning.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/kd.png',
      name: 'Karthikeyan',
      position: 'Executive Director',
      message: 'Ensuring Operational Excellence.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/ksk.png',
      name: 'Karthik',
      position: 'Executive Director',
      message: 'Leading with Integrity & Driving Results.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/pmg.png',
      name: ' PM Gurudas',
      position: ' Managing Director',
      message: 'Pioneering Change with Purpose & Vision',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/vig.png',
      name: 'Vignesha',
      position: 'Director ',
      message: 'Driving digital growth & strategy.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/eswr.png',
      name: 'Eshvar',
      position: 'Director',
      message: ' Financial stewardship & Planning.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/kd.png',
      name: 'Karthikeyan',
      position: 'Executive Director',
      message: 'Ensuring Operational Excellence.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/ksk.png',
      name: 'Karthik',
      position: 'Executive Director',
      message: 'Leading with Integrity & Driving Results.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/pmg.png',
      name: ' PM Gurudas',
      position: ' Managing Director',
      message: 'Pioneering Change with Purpose & Vision',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/vig.png',
      name: 'Vignesha',
      position: 'Director ',
      message: 'Driving digital growth & strategy.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/eswr.png',
      name: 'Eshvar',
      position: 'Director',
      message: ' Financial stewardship & Planning.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/kd.png',
      name: 'Karthikeyan',
      position: 'Executive Director',
      message: 'Ensuring Operational Excellence.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/ksk.png',
      name: 'Karthik',
      position: 'Executive Director',
      message: 'Leading with Integrity & Driving Results.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/pmg.png',
      name: ' PM Gurudas',
      position: ' Managing Director',
      message: 'Pioneering Change with Purpose & Vision',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/vig.png',
      name: 'Vignesha',
      position: 'Director ',
      message: 'Driving digital growth & strategy.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/eswr.png',
      name: 'Eshvar',
      position: 'Director',
      message: ' Financial stewardship & Planning.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/kd.png',
      name: 'Karthikeyan',
      position: 'Executive Director',
      message: 'Ensuring Operational Excellence.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/ksk.png',
      name: 'Karthik',
      position: 'Executive Director',
      message: 'Leading with Integrity & Driving Results.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/pmg.png',
      name: ' PM Gurudas',
      position: ' Managing Director',
      message: 'Pioneering Change with Purpose & Vision',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/vig.png',
      name: 'Vignesha',
      position: 'Director ',
      message: 'Driving digital growth & strategy.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/eswr.png',
      name: 'Eshvar',
      position: 'Director',
      message: ' Financial stewardship & Planning.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/kd.png',
      name: 'Karthikeyan',
      position: 'Executive Director',
      message: 'Ensuring Operational Excellence.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/ksk.png',
      name: 'Karthik',
      position: 'Executive Director',
      message: 'Leading with Integrity & Driving Results.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/pmg.png',
      name: ' PM Gurudas',
      position: ' Managing Director',
      message: 'Pioneering Change with Purpose & Vision',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/vig.png',
      name: 'Vignesha',
      position: 'Director ',
      message: 'Driving digital growth & strategy.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/eswr.png',
      name: 'Eshvar',
      position: 'Director',
      message: ' Financial stewardship & Planning.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/kd.png',
      name: 'Karthikeyan',
      position: 'Executive Director',
      message: 'Ensuring Operational Excellence.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    },
    {
      image: 'assets/img/team/ksk.png',
      name: 'Karthik',
      position: 'Executive Director',
      message: 'Leading with Integrity & Driving Results.',
      facebook: '',
      insta: '',
      twitter: '',
      linkedin: ''
    }
  ];


  scrollTo(divId: string): void {
    const element = document.getElementById(divId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  ngOnInit(): void {
    this.setVisibleCards(); // set once on load
    window.addEventListener('resize', this.setVisibleCards.bind(this)); // update on resize
    this.autoSlideInterval = setInterval(() => this.autoSlide(), 2000);
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
    window.removeEventListener('resize', this.setVisibleCards.bind(this));
  }
  autoSlide() {
    this.index = (this.index + 1) % (this.directors.length - this.visibleCards + 1);
  }


  setVisibleCards() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 576) {
      this.visibleCards = 1;   // Mobile
    } else if (screenWidth <= 991) {
      this.visibleCards = 2;   // Tablet
    } else {
      this.visibleCards = 4;   // Desktop
    }
  }

  updateSlider(): string {
    const offset = this.index * (100 / this.visibleCards);
    return `translateX(-${offset}%)`;
  }

  openModal(director: Director) {
    this.selectedDirector = director;
    const modal = document.getElementById('directorModal');
    if (modal) {
      const modalInstance = new (window as any).bootstrap.Modal(modal);
      modalInstance.show();
    }
  }
}
export interface ourDirectorsInfo {
  image: string,
  name: string,
  position: string,
  message: string,
  facebook: string,
  twitter: string,
  insta: string,
  linkedin: string

}