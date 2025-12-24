import { Component } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acs',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './acs.component.html',
  styleUrl: './acs.component.css',
})
export class ACSComponent {
  currentCaptcha = '';
  captchaInput = '';
  captchaError = false;
  showSuccessToast = false;
  showErrorToast = false;
  successMessage = '';
  errorMessage = '';
  clientId: any;

  ngOnInit(): void {
    this.generateCaptcha();
  }

  generateCaptcha(): void {
    const chars =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?></|';
    let code = '';

    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    this.currentCaptcha = code;
    this.captchaInput = '';
    this.captchaError = false;
  }

  onSubmit(form: NgForm): void {
    // Angular form validation
    if (form.invalid) {
      this.showError('Please fill all required fields correctly');
      return;
    }

    // Captcha validation
    if (this.captchaInput !== this.currentCaptcha) {
      this.captchaError = true;
      this.showError('Invalid captcha. Please try again.');
      this.generateCaptcha();
      return;
    }

    this.captchaError = false;
    this.showSuccess('Validation successful. Proceeding...');

    // API call here
  }

  private showSuccess(message: string): void {
    this.successMessage = message;
    this.showSuccessToast = true;
    this.showErrorToast = false;

    setTimeout(() => {
      this.showSuccessToast = false;
    }, 3000);
  }

  private showError(message: string): void {
    this.errorMessage = message;
    this.showErrorToast = true;
    this.showSuccessToast = false;

    setTimeout(() => {
      this.showErrorToast = false;
    }, 3000);
  }

  hideToast(): void {
    this.showSuccessToast = false;
    this.showErrorToast = false;
  }
}
