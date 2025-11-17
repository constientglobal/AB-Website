import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { RouterModule, RouterLink } from '@angular/router';


@Component({
  selector: 'app-calculator',
  imports: [FormsModule, CommonModule, ChartModule,  RouterModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent implements OnInit {
  activeTab: 'sip' | 'lumpsum' = 'sip';
  sipAmount = 500;
  sipRate = 1;
  sipYears = 1;
  lumpsumAmount = 1000;
  lumpsumRate = 1;
  lumpsumYears = 1;
  sipInvested = 0;
  sipReturns = 0;
  sipTotal = 0;
  lumpsumInvested = 0;
  lumpsumReturns = 0;
  lumpsumTotal = 0;
  isSipAmountInvalid: boolean = false;
  isLumpsumAmountInvalid: boolean = false;
  data: any;
  options: any;

  activateTab(tab: 'sip' | 'lumpsum') {
    this.activeTab = tab;
    console.log(tab);
  }
  ngOnInit() {
    this.calculateSIP();
    this.calculateLumpsum();
  }
  calculateSIP() {
    if (this.sipAmount < 500 || this.sipRate < 1) {
      this.isSipAmountInvalid = true;
      return;
    }
    this.isSipAmountInvalid = false;
    const monthlyRate = this.sipRate / 12 / 100;
    const months = this.sipYears * 12;
    const futureValue = this.sipAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    this.sipInvested = this.sipAmount * months;
    this.sipTotal = futureValue;
    this.sipReturns = this.sipTotal - this.sipInvested;
    this.initChart(this.sipInvested, this.sipReturns, this.sipTotal);
  }

  calculateLumpsum() {
    if (this.lumpsumAmount < 500 || this.lumpsumRate < 1) {
      this.isLumpsumAmountInvalid = true;
      return;
    }
    this.isLumpsumAmountInvalid = false;
    const rate = this.lumpsumRate / 100;
    const futureValue = this.lumpsumAmount * Math.pow(1 + rate, this.lumpsumYears);
    this.lumpsumInvested = this.lumpsumAmount;
    this.lumpsumTotal = futureValue;
    this.lumpsumReturns = futureValue - this.lumpsumInvested;
    this.initChart(this.lumpsumInvested, this.lumpsumReturns, this.lumpsumTotal);
  }
  resetSIP() {
    this.sipAmount = 500;
    this.sipRate = 1;
    this.sipYears = 1;
    this.calculateSIP();

  }

  resetLumpsum() {
    this.lumpsumAmount = 1000;
    this.lumpsumRate = 1;
    this.lumpsumYears = 1;
    this.calculateLumpsum();
  }

  initChart(investment: number, returns: number, total: number) {
    this.data = {
      labels: ['Invested Amount', 'Estimated Returns'],
      datasets: [
        {
          data: [investment, returns],
          backgroundColor: ['#3f51b5', '#00bfa6'],
          hoverBackgroundColor: ['#303f9f', '#009688']
        }
      ]
    };

    this.options = {
      cutout: '70%',
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: '#000',
            font: { size: 14 }
          }
        }
      }
    };
  }
}
