import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LandingModule } from './landing/landing.module';
import { SaleModule } from './sale/sale.module';
import { SaleComponent } from './sale/sale.component';
import { FarmsComponent } from './farms/farms.component';
import { FarmsModule } from './farms/farms.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import { WrapperModule } from './wrapper/wrapper.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { InformationComponent } from './information/information.component';
import { InformationModule } from './information/information.module';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'farms', component: FarmsComponent},
  {path: 'lge', component: SaleComponent},
  {path: 'wrapper', component: WrapperComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'information', component: InformationComponent},
];

@NgModule({
  imports: [
    LandingModule,
    SaleModule,
    FarmsModule,
    DashboardModule,
    InformationModule,
    WrapperModule,
    RouterModule.forRoot(routes, { enableTracing: false, initialNavigation: 'enabledNonBlocking' }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
