import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-policiespdf',
  imports: [CommonModule],
  templateUrl: './policiespdf.component.html',
  styleUrl: './policiespdf.component.css'
})
export class PoliciespdfComponent {
  policies = [
    { id: 'AML', title: 'Anti-Money Laundering (AML)', icon: 'fas fa-shield-alt' },
    { id: 'PFI', title: 'Pre-Funded Instrument', icon: 'fas fa-money-check-alt' },
    { id: 'ERROR', title: 'Client Code Modification & Error Handling', icon: 'fas fa-exchange-alt' },
    { id: 'activity', title: 'Assessment of Activities Outsourced', icon: 'fas fa-tasks' },
    { id: 'risk', title: 'Risk Management', icon: 'fas fa-shield-virus' },
    { id: 'kycDraft', title: 'KYC Draft', icon: 'fas fa-file-signature' },
    { id: 'PML', title: 'Prevention of Money Laundering (PML)', icon: 'fas fa-ban' },
    { id: 'Goods', title: 'Handling of Goods Till Date', icon: 'fas fa-box' },
    { id: 'VC', title: 'Vernacular Communication', icon: 'fas fa-language' },
    { id: 'UC', title: 'Upstream Communication', icon: 'fas fa-network-wired' }
  ];

  handlePolicyClick(policyId: string) {
    this.linksChange(policyId);
  }

  linksChange(url: string): void {
    const path = `${location.origin}/assets/pdfs`;

    const navigateList = ['terms', 'Awareness', 'SECURITY', 'DISCLAIMERS', 'PRIVACY', 'COOKIES', 'ODR', 'DND', 'Charter'];
    const openDirectMap: { [key: string]: string } = {
      AML: 'ANTI MONEY LAUNDERING POLICY DRAFT.pdf',
      UC: 'Absolute Broking UpstreamTransaction Information_ ABPL.pdf',
      VC: 'Vernacular Communication- ABPL.pdf',
      PFI: 'Pre-Funded Instruments Policy.pdf',
      ERROR: 'CLIENT CODE MODIFICATION & ERROR POLICY DRAFT.pdf',
      activity: 'Policy for assessment of activities outsourced DRAFT.pdf',
      risk: 'RISK MANAGEMENT POLICY DRAFT.pdf',
      kycDraft: 'KYC DRAFT.pdf',
      PML: 'policy on prevention of  money laundering DRAFT.pdf',
      Goods: 'POLICY FOR HANDLING GOOD TILL DATE ORDERS DRAFT.pdf'
    };

    if (navigateList.includes(url)) {
      console.log('Navigating to:', url);
    } else if (openDirectMap[url]) {
      window.open(`${path}/${openDirectMap[url]}`, '_blank');
    } else {
      console.warn('Invalid policy URL key:', url);
    }
  }


}
