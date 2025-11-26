import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
declare var bootstrap: any;

@Component({
  selector: 'app-newsandmedia',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './newsandmedia.component.html',
  styleUrls: ['./newsandmedia.component.css'],
})
export class NewsandmediaComponent {
  // posts = [
  //   { id: 1, image: 'assets/img/m10.png', title: '', subtitle: '' },
  //   { id: 2, image: 'assets/img/m9.png', title: '', subtitle: '' },
  //   { id: 3, image: 'assets/img/m7.png', title: '', subtitle: '' },
  //   { id: 4, image: 'assets/img/m11.png', title: '', subtitle: '' },
  //   { id: 5, image: 'assets/img/m8.png', title: '', subtitle: '' },
  //   { id: 6, image: 'assets/img/m1.png', title: '', subtitle: '' },
  //   { id: 6, image: 'assets/img/m2.png', title: '', subtitle: '' }
  // ];

  newsData = [
    {
      image: '',
      title: "Absolute Broking's AI-Powered Platform Wins Global Award",
      summary:
        'Our new AI-driven trading platform has been recognized for its innovation and performance at the prestigious Global FinTech Awards, setting a new industry standard.',
      content:
        "Absolute Broking's groundbreaking AI platform, which provides real-time market analysis and personalized investment strategies, has won the 'Best Innovative Trading Technology' award. The recognition comes after months of rigorous testing and positive user feedback, highlighting the company's commitment to delivering cutting-edge solutions for its clients. This win reinforces our position as a leader in the global financial technology sector.",
    },
    {
      image: '',
      title: 'Absolute Broking Applauded for FinTech Innovation',
      summary:
        "A recent report from the Financial Times highlights Absolute Broking's innovative approach to investment technology, setting a new benchmark for the industry.",
      content:
        "The Financial Times has recognized Absolute Broking as a leader in financial technology. Their cutting-edge platform, featuring AI-driven analytics and a seamless user experience, has been praised for democratizing access to complex financial markets. This recognition solidifies the company's position at the forefront of the FinTech revolution.",
    },
    {
      image: '',
      title: 'Company Hosts Major Investment Seminar',
      summary:
        'Absolute Broking successfully conducted a large-scale investment seminar, drawing hundreds of attendees and featuring insights from top financial experts and market strategists.',
      content:
        "Hundreds of aspiring investors attended Absolute Broking's annual seminar, a cornerstone event for financial education. The event featured keynote speeches from industry veterans, interactive workshops, and networking opportunities. Topics included market trends for the coming year, navigating volatility, and ethical investing practices. The overwhelming positive feedback confirms the company's commitment to empowering its community.",
    },
    {
      image: '',
      title: 'New Partnership with Global Fund Announced',
      summary:
        'In a strategic move, Absolute Broking has formed a new partnership with a leading global investment fund, broadening the range of services and products available to its clients.',
      content:
        'Absolute Broking has officially partnered with a globally recognized investment fund, granting our clients exclusive access to a diverse portfolio of international assets. This collaboration is a significant milestone, reinforcing our commitment to providing world-class investment opportunities. The partnership will focus on co-developing new financial products and offering specialized advisory services.',
    },
    {
      image: '',
      title: 'Company Celebrates 10 Years in Business',
      summary:
        'Absolute Broking marks a decade of excellence in the financial services industry, celebrating a milestone built on trust, innovation, and client success.',
      content:
        'Ten years ago, Absolute Broking was founded with a mission to make financial markets accessible to everyone. Today, we celebrate a decade of growth, having served millions of clients and expanded our offerings. This anniversary is a testament to the dedication of our team and the loyalty of our clients. We look forward to another decade of empowering financial freedom.',
    },
  ];

  articlesToShowInitially = 2;
  currentArticlesCount = this.articlesToShowInitially;

  modalVisible = false;
  modalTitle = '';
  modalContent = '';

  get displayedArticles() {
    return this.newsData.slice(0, this.currentArticlesCount);
  }

  showMore() {
    this.currentArticlesCount = this.newsData.length;
  }

  showLess() {
    this.currentArticlesCount = this.articlesToShowInitially;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openModal(title: string, content: string) {
    this.modalTitle = title;
    this.modalContent = content;

    const modalElement = document.getElementById('articleModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  closeModal() {
    this.modalVisible = false;
  }
}

// { id: 1, image: 'assets/img/m10.png', title: 'Proudly Recognized as a DPIIT Startup', subtitle: 'DPIIT #Startupindia • 5th August 2025' },
// { id: 2, image: 'assets/img/m9.png', title: 'Shining Star of May 🌟', subtitle: 'Jeeva – DM • 6th August 2025' },
// { id: 3, image: 'assets/img/m7.png', title: 'Achiever of the Month – June 2025', subtitle: 'Selin Jayaselvi - RM • 6th August 2025' },
// { id: 4, image: 'assets/img/m11.png', title: 'Absolute Achiever – June Edition', subtitle: 'Ramya Balaji - RM • 6th August 2025' },
// { id: 5, image: 'assets/img/m8.png', title: 'Champion of the Month – July', subtitle: 'Selin Jayaselvi - RM • 6th August 2025' },
// { id: 6, image: 'assets/img/m1.png', title: 'Top Performer - Cash Price', subtitle: 'Selin Jayaselvi - RM • 6th August 2025' },
// { id: 6, image: 'assets/img/m2.png', title: 'Top Performer - Cash Price', subtitle: 'Selin Jayaselvi - RM • 6th August 2025' }
