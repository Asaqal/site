import { Component, HostListener, OnInit } from '@angular/core';
import { Project } from '../project';
import { PROJECTS } from '../project-list';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {
  scrollThreshold = 50;

  projects = PROJECTS;
  selectedProject = this.projects[0];

  constructor() { }

  ngOnInit(): void {
  }

  // onSelect(project: Project): void {
  //   this.selectedProject = project;
  //   console.log(this.selectedProject);
  // }

  @HostListener('mousewheel', ['$event']) onMousewheel(event: WheelEvent): void {
    // if (document.body.scrollTop / 50 < 1) {
    //   this.selectedProject = this.projects[0]
    // }
    // console.log("scrolled");
    // if (Math.trunc(document.body.scrollTop / this.scrollThreshold) == 0) {
    //   this.selectedProject = this.projects[0];
    // } else if (Math.trunc(document.body.scrollTop / this.scrollThreshold) > this.projects.length) {
    //   this.selectedProject = this.projects[this.projects.length-1];
    // } else {
    //   this.selectedProject = this.projects[Math.trunc(document.body.scrollTop / this.scrollThreshold)];
    // }
    if (event.deltaY < 0) { // scroll up
      console.log("up");
    } else if (event.deltaY > 0) {
      console.log("down");
    }
  }

}
