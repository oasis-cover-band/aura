import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../static-info-services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name = this.projectService.project.name;
  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
  }

}
