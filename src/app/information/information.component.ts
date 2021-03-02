import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../static-info-services/project.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  projectInformation = this.projectService.projectInformation;
  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
  }

}
