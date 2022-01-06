import { Injectable } from '@angular/core';

import { Project } from './project';
import { PROJECTS } from './project-list';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Project[] {
    return PROJECTS;
  }
}
