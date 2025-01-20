import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-project-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-box.component.html',
  styleUrls: ['./project-box.component.scss'],
})

export class ProjectBoxComponent {
  @Input() projects: any[] = [];
  @Input() projectIndex: number = 0;
  @Output() closeBox = new EventEmitter<void>();

  language: 'EN' | 'DE' = 'EN';


  /**
  * Translations for text displayed in the component.
  * @type {Object}
  */
  translations = {
    EN: {
      projectDescriptionTitle: 'What is this project about?',
      nextProject: 'Next project',
    },
    DE: {
      projectDescriptionTitle: 'Worum geht es in diesem Projekt?',
      nextProject: 'Nächstes Projekt',
    },
  };


  /**
  * Initializes the ProjectBoxComponent and subscribes to language changes.
  * 
  * @param {LanguageService} languageService - Service to manage the application's language state.
  */
  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe((lang) => {
      this.language = lang as 'EN' | 'DE';
    });
  }


  /**
  * Retrieves the current project details, including translated name and description.
  * 
  * @returns {Object} The current project's details with translations.
  */
  get project() {
    const currentProject = this.projects[this.projectIndex];
    return {
      ...currentProject,
      name: currentProject.name[this.language],
      description: currentProject.description[this.language],
    };
  }


  /**
  * Retrieves the translated title for the project description section.
  * 
  * @returns {string} The translated project description title.
  */
  get projectDescriptionTitle(): string {
    return this.translations[this.language].projectDescriptionTitle;
  }


  /**
  * Retrieves the translated text for the next project button.
  * 
  * @returns {string} The translated "next project" text.
  */
  get nextProjectText(): string {
    return this.translations[this.language].nextProject;
  }


  /**
  * Advances to the next project in the list, looping back to the start if necessary.
  */
  showNextProject(): void {
    this.projectIndex = (this.projectIndex + 1) % this.projects.length;
  }
}