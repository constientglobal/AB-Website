import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { KnowledgehubComponent } from './knowledgehub/knowledgehub.component';
import { PartnerComponent } from './partner/partner.component';
import { CharterComponent } from './charter/charter.component';
import { AwarnessComponent } from './awarness/awarness.component';
import { SecurityComponent } from './security/security.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { PolicyComponent } from './policy/policy.component';
import { CookiesComponent } from './cookies/cookies.component';
import { TermsComponent } from './terms/terms.component';
import { OdrComponent } from './odr/odr.component';
import { DndComponent } from './dnd/dnd.component';
import { ContactusComponent } from './contactus/contactus.component';
import { IpoComponent } from './ipo/ipo.component';
import { CommodityComponent } from './commodity/commodity.component';
import { PoliciespdfComponent } from './policiespdf/policiespdf.component';
import { EquityComponent } from './equity/equity.component';
import { CurrencyComponent } from './currency/currency.component';
import { PrivateEquityComponent } from './private-equity/private-equity.component';
import { MutualfundComponent } from './mutualfund/mutualfund.component';
import { PmsandmifComponent } from './pmsandmif/pmsandmif.component';
import { FixedincomeComponent } from './fixedincome/fixedincome.component';
import { LoansComponent } from './loans/loans.component';
import { WealthComponent } from './wealth/wealth.component';
import { DpComponent } from './dp/dp.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { MtfComponent } from './mtf/mtf.component';
import { SeamlessbrokingComponent } from './seamlessbroking/seamlessbroking.component';
import { YoungComponent } from './young/young.component';
import { Component } from '@angular/core';
import { HousewivesComponent } from './housewives/housewives.component';
import { RetiredComponent } from './retired/retired.component';
import { SubBrokersComponent } from './sub-brokers/sub-brokers.component';
import { FraudAwarenessComponent } from './fraud-awareness/fraud-awareness.component';
import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { StockMarketScamsComponent } from './stock-market-scams/stock-market-scams.component';
import { RiskProfilingComponent } from './risk-profiling/risk-profiling.component';
import { InvestmentAwarenessComponent } from './investment-awareness/investment-awareness.component';
import { CareerwithABComponent } from './careerwith-ab/careerwith-ab.component';
import { InternshipProgramComponent } from './internship-program/internship-program.component';
import { LeadingthewayComponent } from './leadingtheway/leadingtheway.component';
import { TraineeComponent } from './trainee/trainee.component';
import { NewsandmediaComponent } from './newsandmedia/newsandmedia.component';
import { WhatweofferComponent } from './whatweoffer/whatweoffer.component';
import { ErrorComponent } from './error/error.component';
import { InternalComponent } from './internal/internal.component';
import { ACSComponent } from './acs/acs.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'career', component: CareerComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'partner', component: PartnerComponent },
  { path: 'knowledgehub', component: KnowledgehubComponent },
  {path: 'charter', component: CharterComponent},
  {path: 'awarness', component: AwarnessComponent},
  {path: 'security', component: SecurityComponent},
  {path: 'disclaimer', component: DisclaimerComponent},
  {path:'policy', component: PolicyComponent},
  {path:'cookies', component: CookiesComponent},
  {path:'t&c', component: TermsComponent},
  {path:'odr', component: OdrComponent},
  {path:'dnd', component: DndComponent},
  {path: 'contactUs', component: ContactusComponent},
  {path:'ipo', component: IpoComponent},
  {path:'commodity', component: CommodityComponent},
  {path:'policies',component: PoliciespdfComponent},
  {path:'equity',component: EquityComponent},
  {path:'currency',component: CurrencyComponent},
  {path:'privateEquity',component: PrivateEquityComponent},
  {path:'mutualfund',component: MutualfundComponent},
  {path:'pmsandaif',component: PmsandmifComponent},
  {path:'fixedincome',component: FixedincomeComponent},
  {path:'loans',component: LoansComponent},
  {path:'wealth',component: WealthComponent},
  {path:'dp', component:DpComponent},
  {path:'insurance',component:InsuranceComponent},
  {path:'mtf', component:MtfComponent},
  {path:'seamlessbroking', component:SeamlessbrokingComponent},
  {path: "YoungEntrepreneurs", component:YoungComponent},
  {path:'Housewives', component:HousewivesComponent},
  {path:'RetiredIndividuals', component:RetiredComponent},
  {path:'Sub-Brokers&AuthorizedPersons', component:SubBrokersComponent},
  {path:'OnlineFraudAwareness', component:FraudAwarenessComponent},
  {path:'CyberSecurity', component:CyberSecurityComponent},
  {path:'StockMarketScams', component:StockMarketScamsComponent},
  {path:'RiskProfiling', component:RiskProfilingComponent},
  {path:'InvestmentAwareness', component:InvestmentAwarenessComponent},
  {path:'CareerwithAB', component:CareerwithABComponent},
  {path:'InternshipProgram', component:InternshipProgramComponent},
  {path:'Leadingtheway', component:LeadingthewayComponent},
  {path:'ManagementTrainee', component:TraineeComponent},
  {path:'News&Media', component:NewsandmediaComponent},
  {path:'WhatweOffer', component:WhatweofferComponent},
  {path:'Internal', component:InternalComponent},
  {path:'Internal/AccountClosureSectionLogin', component:ACSComponent},
  {path:'**', component:ErrorComponent}
];
