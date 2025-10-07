import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import CryptoJS from 'crypto-js';
declare var bootstrap: any;

@Component({
  selector: 'app-career',
  imports: [RouterModule, RouterLink, CommonModule, FormsModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {
  constructor(private http: HttpClient) {

  }
  selectedCategory: string = '';
  selectedJobTitle: string = '';
  formData: any = {
    name: '',
    mobile: '',
    email: '',
    status: '',
    currentOrg: '',
    currentCtc: '',
    expectedCtc: '',
    noticePeriod: '',
    preferredLocation: '',
  };
  resumeFile: File | null = null;
  base64Resume: string = '';


  // 🔐 Encrypted Keys (generated using AES)
  // encryptedApiKey: string = "U2FsdGVkX1/J7fVhFZPvGi3w4GkKTXfSMtYta77+scs=";
  // encryptedApiId: string = "U2FsdGVkX1+Lmt0GmK4BBrOEG+/GEduvcY++Mczc9XQ=";

  // meheryApiKey: string = '';
  // meheryApiId: string = '';

  secretKey: string = 'MySuperSecretKey123';

  // encrypt(value: string): string {
  //   return CryptoJS.AES.encrypt(value, this.secretKey).toString();
  // }

  decrypt(encrypted: string): string {
    const bytes = CryptoJS.AES.decrypt(encrypted, this.secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
  meheryApiKey: string = "1jtucsvdq7x4lVID9I6AG4F";
  meheryApiId: string = "685be9862cf01852fc079025";


  jobList = [
    {
      title: 'Relationship Manager (RM)',
      category: ['Wealth Management', 'Dealing'],
      description: 'Builds and nurtures long-term relationships with clients, offering personalized investment solutions, ensuring customer satisfaction, and driving portfolio growth.'
    },
    {
      title: 'Telecaller',
      category: ['Sales', 'Dealing'],
      description: 'Acts as the first point of contact for potential clients, handling outbound/inbound calls, explaining products and services, and setting appointments for further engagement.'
    },
    {
      title: 'Team Leader (TL)',
      category: ['Operation', 'Dealing'],
      description: 'Leads and motivates a team of telecallers or RMs, monitors daily performance, ensures target achievement, and maintains high service standards.'
    },
    {
      title: 'Sales Manager (SM)',
      category: ['Sales', 'Dealing'],
      description: 'Drives overall sales strategy, manages the performance of the sales team, identifies growth opportunities, and ensures consistent client acquisition and revenue targets.'
    },
    {
      title: 'Branch Manager',
      category: ['Sales'],
      description: 'Oversees branch operations and ensures the achievement of sales and operational goals.'
    },
    {
      title: 'Operations Executive',
      category: ['Operation'],
      description: 'Ensures seamless daily operations and backend processing of client transactions.'
    },
    {
      title: 'Equity Dealer',
      category: ['Dealing'],
      description: 'Executes equity transactions and manages client portfolios.'
    }
  ];

  maxVisible = 6; // 2 rows of 3 columns
  showAll = false;

  get filteredJobs() {
    if (!this.selectedCategory) return this.jobList;
    return this.jobList.filter(job => job.category.includes(this.selectedCategory));
  }

  get visibleJobs() {
    return this.showAll ? this.filteredJobs : this.filteredJobs.slice(0, this.maxVisible);
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
    this.showAll = false;
  }

  showAllJobs() {
    this.showAll = true;
  }
  openApplicationForm(title: string) {
    this.selectedJobTitle = title;
    this.formData = {
      name: '',
      mobile: '',
      email: '',
      status: '',
      currentOrg: '',
      currentCtc: '',
      expectedCtc: '',
      noticePeriod: '',
      preferredLocation: '',
    };

    const modal = new bootstrap.Modal(document.getElementById('applicationModal'));
    modal.show();
  }

  onStatusChange() {
    if (this.formData.status === 'Fresher') {
      this.formData.currentOrg = '';
      this.formData.currentCtc = '';
      this.formData.expectedCtc = '';
      this.formData.noticePeriod = '';
      this.formData.preferredLocation = '';
    }
  }

  // submitApplication() {
  //   console.log('Submitted Data:', this.formData);
  //   alert('Application submitted successfully!');
  // }

  submitApplication() {
    if (!this.resumeFile || !this.base64Resume) {
      alert("Please select a resume file first.");
      return;
    }

    const uploadPayload = {
      base64String: this.base64Resume
    };

    // Step 1: Upload Base64 file
    this.http.post('https://www.absolutebroking.com/ABCoreWebAPI/api/DIYV1/SaveResumeFromBase64', uploadPayload, { responseType: 'text' })
      .subscribe({
        next: (res: string) => {
          const uploadedUrl = res;

          // Step 2: Prepare Mehery API payload
          const payload = {
            channelId: 'gmail:onboardingabsolutebrokingcom',
            to: {
              email: 'hr@absolutebroking.com',
              name: this.formData.name
            },
            type: 'template',
            template: {
              data: {
                ename: this.formData.name,
                emobile: this.formData.mobile,
                eemail: this.formData.email,
                estatus: this.formData.status,
                eorg: this.formData.currentOrg || '',
                cctc: this.formData.currentCtc || '',
                ectc: this.formData.expectedCtc || '',
                np: this.formData.noticePeriod || '',
                location: this.formData.preferredLocation || ''
              },
              code: 'job_application',
              lang: 'en'
            },
            document: {
              caption: this.resumeFile,
              filename: this.resumeFile,
              link: "https://www.absolutebroking.com/ABCoreWebAPI/file/" + uploadedUrl
            }
          };

          const headers = new HttpHeaders()
            .set('x-api-key', this.meheryApiKey)
            .set('x-api-id', this.meheryApiId);

          console.log("Final Payload to Mehery:", payload);

          // Step 3: Send to Mehery
          this.http.post('https://absolutebroking.mehery.com/xms/api/v1/message/send', payload, { headers }).subscribe({
            next: res => console.log('Application sent:', res),
            error: err => alert('Failed to send application')
          });
        },
        error: (err) => {
          console.error("Resume upload failed:", err);
          alert("Resume upload failed.");
        }
      });
  }

  convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result as string;
        const base64String = result.split(',')[1];
        resolve(base64String);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) {
      console.warn("No file selected.");
      return;
    }

    this.resumeFile = file;

    this.convertFileToBase64(file).then(base64 => {
      this.base64Resume = base64;
      console.log("Base64 string stored successfully.");
    }).catch(err => {
      console.error("Failed to convert file:", err);
      alert("Error converting file to Base64.");
    });
  }

}
