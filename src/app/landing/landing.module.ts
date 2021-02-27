import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { HomeModule } from '../home/home.module';
import { RoadmapModule } from '../roadmap/roadmap.module';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    HomeModule,
    RoadmapModule
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }
