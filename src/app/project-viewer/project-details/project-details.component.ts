import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  @Input() selectedProject!: Project;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    // checks which property changed
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'selectedProject': {
            console.log(this.selectedProject);
          }
        }
      }
    }
  }

}
