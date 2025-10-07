import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as CryptoJS from 'crypto-js';
interface Director {
  img: string;
  alt: string;
}
@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit, OnDestroy {
  index = 0;
  visibleCards = 4;
  autoSlideInterval: any;
  loading = false;
  successMessage = '';
  errorMessage = '';
  constructor(private http: HttpClient) {
    // this.meheryApiKey = this.decrypt(this.encryptedApiKey);
    // this.meheryApiId = this.decrypt(this.encryptedApiId);
  }
   directors: Director[] = [
    { img: 'assets/img/KKS.png', alt: 'K.K. Sharma - Chairman' },
    { img: 'assets/img/KDJ.png', alt: 'K.D. Joshi - Managing Director' },
    { img: 'assets/img/A.png', alt: 'A. Kumar - Executive Director' },
    { img: 'assets/img/SES.png', alt: 'S.E. Singh - Independent Director' },
    { img: 'assets/img/N.png', alt: 'N. Patel - Non-Executive Director' },
    { img: 'assets/img/KKS.png', alt: 'K.K. Sharma - Chairman' },
    { img: 'assets/img/KDJ.png', alt: 'K.D. Joshi - Managing Director' },
    { img: 'assets/img/A.png', alt: 'A. Kumar - Executive Director' },
    { img: 'assets/img/SES.png', alt: 'S.E. Singh - Independent Director' },
    { img: 'assets/img/N.png', alt: 'N. Patel - Non-Executive Director' },
    { img: 'assets/img/KKS.png', alt: 'K.K. Sharma - Chairman' },
    { img: 'assets/img/KDJ.png', alt: 'K.D. Joshi - Managing Director' },
    { img: 'assets/img/A.png', alt: 'A. Kumar - Executive Director' },
    { img: 'assets/img/SES.png', alt: 'S.E. Singh - Independent Director' },
    { img: 'assets/img/N.png', alt: 'N. Patel - Non-Executive Director' },
    { img: 'assets/img/KKS.png', alt: 'K.K. Sharma - Chairman' },
    { img: 'assets/img/KDJ.png', alt: 'K.D. Joshi - Managing Director' },
    { img: 'assets/img/A.png', alt: 'A. Kumar - Executive Director' },
    { img: 'assets/img/SES.png', alt: 'S.E. Singh - Independent Director' },
    { img: 'assets/img/N.png', alt: 'N. Patel - Non-Executive Director' }
  ];
  contact = {
    name: '',
    email: '',
    phone: '',
    address: '',
    area: '',
    city: '',
    pincode: '',
    message: ''
  };
  secretKey: string = 'AbsoluteBrokingContactUsForm@2025';

  // 🔐 Encrypted Keys
  // encryptedApiKey: string = "U2FsdGVkX1/J7fVhFZPvGi3w4GkKTXfSMtYta77+scs=";
  // encryptedApiId: string = "U2FsdGVkX1+Lmt0GmK4BBrOEG+/GEduvcY++Mczc9XQ=";

  // meheryApiKey: string = '';
  // meheryApiId: string = '';
  meheryApiKey: string = "1jtucsvdq7x4lVID9I6AG4F";
  meheryApiId: string = "685be9862cf01852fc079025";


  decrypt(encrypted: string): string {
    const bytes = CryptoJS.AES.decrypt(encrypted, this.secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  sendContactForm() {
    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const payload = {
      channelId: 'gmail:onboardingabsolutebrokingcom',
      to: {
        email: 'support@absolutebroking.com',
        name: this.contact.name
      },
      type: 'template',
      template: {
        data: {
          cname: this.contact.name,
          cemail: this.contact.email,
          cphone: this.contact.phone,
          caddress: this.contact.address,
          carea: this.contact.area,
          ccity: this.contact.city,
          cpincode: this.contact.pincode,
          cmessage: this.contact.message
        },
        code: 'contactus',
        lang: 'en'
      },
      subject: "Thank you for Reaching us!"
    };

    const headers = new HttpHeaders()
      .set('x-api-key', this.meheryApiKey)
      .set('x-api-id', this.meheryApiId);

    this.http.post('https://absolutebroking.mehery.com/xms/api/v1/message/send', payload, {
      headers,
      responseType: 'text' as 'json' // ✅ Final fix here
    }).subscribe({
      next: (res) => {
        this.loading = false;
        this.successMessage = 'Message sent successfully.';
        console.log('Contact form submitted:', res);
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = 'There was an error sending your message.';
        console.error('Error sending contact form:', err);
      }
    });
  }
   ngOnInit(): void {
    this.autoSlideInterval = setInterval(() => this.autoSlide(), 3000);
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  updateSlider(): string {
    const offset = -(this.index * (100 / this.visibleCards));
    return `translateX(${offset}%)`;
  }

  autoSlide(): void {
    if (this.index < this.directors.length - this.visibleCards) {
      this.index++;
    } else {
      this.index = 0;
    }
  }
}
