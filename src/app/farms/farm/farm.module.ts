import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmComponent } from './farm.component';



@NgModule({
  declarations: [FarmComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FarmComponent
  ]
})
export class FarmModule { }
