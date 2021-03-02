import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../static-info-services/project.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  socials = this.projectService.project.socials;
  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
  }

}
