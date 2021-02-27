import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmsComponent } from './farms.component';
import { FarmComponent } from './farm/farm.component';
import { FarmModule } from './farm/farm.module';



@NgModule({
  declarations: [FarmsComponent],
  imports: [
    CommonModule,
    FarmModule
  ],
  exports: [
    FarmComponent
  ]
})
export class FarmsModule { }
