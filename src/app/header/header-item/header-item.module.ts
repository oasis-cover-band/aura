import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderItemComponent } from './header-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderItemComponent
  ]
})
export class HeaderItemModule { }
