import { Component, OnInit } from '@angular/core';
import { PROJECTS } from './projects-list';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {
  projects = PROJECTS;

  constructor() { }

  ngOnInit(): void {
  }

}
