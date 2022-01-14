import { Component, HostListener, OnInit } from '@angular/core';
import { PROJECTS } from '../project-list';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {
  timeout!: ReturnType<typeof setTimeout>;
  scrollDelay = 60;

  projects = PROJECTS;
  selectedProjectIndex = 0;
  selectedProject = this.projects[this.selectedProjectIndex];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projects = this.projectService.getProjects();
  }

  updateSelectedProject(): void {
    if (this.selectedProjectIndex < 0) {
      this.selectedProjectIndex = this.projects.length-1;
    } else if (this.selectedProjectIndex > this.projects.length-1) {
      this.selectedProjectIndex = 0;
    }
    this.selectedProject = this.projects[this.selectedProjectIndex];
  }

  @HostListener('mousewheel', ['$event']) onMousewheel(event: WheelEvent): void {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.selectedProjectIndex += (event.deltaY/Math.abs(event.deltaY));
      this.updateSelectedProject();
    }, this.scrollDelay)
  }

}
