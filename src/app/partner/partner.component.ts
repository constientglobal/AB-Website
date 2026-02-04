import { Component } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
declare var bootstrap: any;
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partner',
  imports: [RouterModule, RouterLink, FormsModule, CommonModule],
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css'],
})
export class PartnerComponent {
  partnerFormData = {
    fullname: '',
    mobile: '',
    whatsappNumber: '',
    alternateContact: '',
    email: '',
    city: '',
    pincode: '',
    profession: '',
    category: '',
    businessType: '',
    businessName: '',
    otherProfessionDetails: '',
    hasDedicatedOffice: '',
    officeLocation: '',
    hasFinancialExperience: '',
    yearsOfExperience: '',
    totalClients: '',
    equityKnowledge: '',
  };
  loading = false;
  successMessage = '';
  errorMessage = '';
  showExp: boolean = false;
  yearsList: number[] = Array.from({ length: 30 }, (_, i) => i + 1);
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}
  meheryApiKey: string = '1jtucsvdq7x4lVID9I6AG4F';
  meheryApiId: string = '685be9862cf01852fc079025';
  secretKey: string = 'MySuperSecretKey123';

  ngOnInit(): void {}

  //   toggleExp(event: Event): void {
  //   const value = (event.target as HTMLSelectElement).value;
  //   this.showExp = value === 'yes'; // shows the field only if dropdown value is 'yes'
  // }

  openModal(): void {
    const modalEl = document.getElementById('partnerModal');
    if (modalEl) {
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    }
  }

  closeModal(): void {
    const modalEl = document.getElementById('partnerModal');
    if (modalEl) {
      const modalInstance =
        bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
      modalInstance.hide();
    }
    document.body.classList.remove('modal-open');
    document.querySelectorAll('.modal-backdrop').forEach((el) => el.remove());
    window.location.reload();
  }

  toggleView(view: 'login' | 'register'): void {
    const login = document.getElementById('loginSection');
    const register = document.getElementById('registerSection');

    if (view === 'login') {
      login?.classList.remove('hidden');
      register?.classList.add('hidden');
    } else {
      register?.classList.remove('hidden');
      login?.classList.add('hidden');
    }
  }

  move(step: number): void {
    document
      .querySelectorAll('.step')
      .forEach((el) => el.classList.remove('active'));

    const target = document.getElementById('step' + step);
    target?.classList.add('active');

    // Hide "Already a Partner?" button after step 1
    const loginSwitch = document.getElementById('loginSwitch');
    loginSwitch?.classList.toggle('hidden', step > 1);
  }

  toggleProfFields(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;

    const sal = document.getElementById('sal_fields');
    const biz = document.getElementById('biz_fields');
    const oth = document.getElementById('oth_fields');

    sal?.classList.toggle('hidden', value !== 'Salaried');
    biz?.classList.toggle('hidden', value !== 'Business');
    oth?.classList.toggle('hidden', value !== 'Others');
  }

  toggleOffice(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    const office = document.getElementById('office_loc_group');

    office?.classList.toggle('hidden', value !== 'Yes');
  }

  toggleExp(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    console.log('Selected value:', value); // Debugging
    this.showExp = value === 'Yes';
  }

  decrypt(encrypted: string): string {
    const bytes = CryptoJS.AES.decrypt(encrypted, this.secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  submitPartnerForm(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const payload = {
      channelId: 'gmail:onboardingabsolutebrokingcom',
      to: {
        // email: 'partner@absolutebroking.com',
        email: 'partner@absolutebroking.com',
        name: this.partnerFormData.fullname,
      },
      type: 'template',
      template: {
        data: {
          fullname: this.partnerFormData.fullname,
          mobile: this.partnerFormData.mobile,
          whatsappNumber: this.partnerFormData.whatsappNumber,
          alternativeContact: this.partnerFormData.alternateContact,
          email: this.partnerFormData.email,
          city: this.partnerFormData.city,
          pincode: this.partnerFormData.pincode,
          profession: this.partnerFormData.profession,
          category: this.partnerFormData.category,
          businessType: this.partnerFormData.businessType,
          businessName: this.partnerFormData.businessName,
          otherProfessionDetails: this.partnerFormData.otherProfessionDetails,
          hasDedicatedOffice: this.partnerFormData.hasDedicatedOffice,
          officeLocation: this.partnerFormData.officeLocation,
          hasFinancialExperience: this.partnerFormData.hasFinancialExperience,
          yearsOfExperience: this.partnerFormData.yearsOfExperience,
          totalClients: this.partnerFormData.totalClients,
          equityKnowledge: this.partnerFormData.equityKnowledge,
        },
        code: 'partnerwithus',
        lang: 'en',
      },
      subject: 'Thank you for Reaching us!',
    };

    const headers = new HttpHeaders()
      .set('x-api-key', this.meheryApiKey)
      .set('x-api-id', this.meheryApiId);

    this.http
      .post(
        'https://absolutebroking.mehery.com/xms/api/v1/message/send',
        payload,
        { headers, responseType: 'text' as 'json' },
      )
      .subscribe({
        next: (res) => {
          this.loading = false;
          this.successMessage = 'Message sent successfully.';
          console.log('Contact form submitted:', res);
          this.closeModal();
          form.resetForm();
          this.partnerFormData = {
            fullname: '',
            mobile: '',
            whatsappNumber: '',
            alternateContact: '',
            email: '',
            city: '',
            pincode: '',
            profession: '',
            category: '',
            businessType: '',
            businessName: '',
            otherProfessionDetails: '',
            hasDedicatedOffice: '',
            officeLocation: '',
            hasFinancialExperience: '',
            yearsOfExperience: '',
            totalClients: '',
            equityKnowledge: '',
          };
          this.reloadPage();
        },
        error: (err) => {
          this.loading = false;
          this.errorMessage = 'There was an error sending your message.';
          console.error('Error sending contact form:', err);
        },
      });
  }

  reloadPage() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
