import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LandingModule } from './landing/landing.module';
import { SaleModule } from './sale/sale.module';
import { SaleComponent } from './sale/sale.component';
import { FarmsComponent } from './farms/farms.component';
import { FarmsModule } from './farms/farms.module';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'farms', component: FarmsComponent},
  {path: 'lge', component: SaleComponent},
];

@NgModule({
  imports: [
    LandingModule,
    SaleModule,
    FarmsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
