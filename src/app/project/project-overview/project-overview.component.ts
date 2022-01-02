import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { PROJECTS } from '../project-list';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {
  projects = PROJECTS;
  selectedProject?: Project;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
    console.log(this.selectedProject);
  }

}
