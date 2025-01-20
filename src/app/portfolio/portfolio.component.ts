import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectBoxComponent } from '../project-box/project-box.component';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectBoxComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})

export class PortfolioComponent {
  showProjectBox = false;
  selectedProject: any = {};
  language: 'EN' | 'DE' = 'EN';


  /**
  * List of portfolio projects with details for each project.
  * @type {Array}
  */
  projects = [
    {
      number: '01',
      name: { EN: 'Join', DE: 'Join' },
      description: {
        EN: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        DE: 'Aufgabenmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      },
      skills: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      skillIcons: [
        '/assets/img/project-box/html.png',
        '/assets/img/project-box/css.png',
        '/assets/img/project-box/javascript.png',
        '/assets/img/project-box/firebase.png',
      ],
      portfolioImage: '/assets/img/portfolio/join.png',
      projectBoxImage: '/assets/img/project-box/join.png',
      githubLink: 'https://github.com/SpecialForceX/Join',
      liveTestLink: 'https://patrickbatke.de/join/html',
    },
    {
      number: '02',
      name: { EN: 'Space Warrior', DE: 'Space Warrior' },
      description: {
        EN: 'An arcade game where you battle enemies in space.',
        DE: 'Ein Arcade-Spiel, bei dem Sie im Weltraum gegen Feinde kämpfen.',
      },
      skills: ['HTML', 'CSS', 'JavaScript'],
      skillIcons: [
        '/assets/img/project-box/html.png',
        '/assets/img/project-box/css.png',
        '/assets/img/project-box/javascript.png',
      ],
      portfolioImage: '/assets/img/portfolio/space_warrior.png',
      projectBoxImage: '/assets/img/project-box/space-warrior.png',
      githubLink: 'https://github.com/SpecialForceX/Space_Warrior',
      liveTestLink: 'https://patrickbatke.de/spacewarriors/',
    },
    {
      number: '03',
      name: { EN: 'Pokedex', DE: 'Pokedex' },
      description: {
        EN: 'A web application to browse and learn about Pokémon, powered by the PokéAPI.',
        DE: 'Eine Webanwendung zum Durchsuchen und Lernen über Pokémon, betrieben von der PokéAPI.',
      },
      skills: ['HTML', 'CSS', 'JavaScript'],
      skillIcons: [
        '/assets/img/project-box/html.png',
        '/assets/img/project-box/css.png',
        '/assets/img/project-box/javascript.png',
      ],
      portfolioImage: '/assets/img/portfolio/pokedex.png',
      projectBoxImage: '/assets/img/project-box/pokedex.png',
      githubLink: 'https://github.com/SpecialForceX/MyPokedex',
      liveTestLink: 'https://patrickbatke.de/pokedex/',
    },
  ];


  /**
  * Index of the currently selected project, or null if none is selected.
  * @type {number | null}
  */
  currentProjectIndex: number | null = null;


  /**
  * Initializes the PortfolioComponent and subscribes to language changes.
  * 
  * @param {LanguageService} languageService - Service to manage the application's language state.
  */
  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe((lang) => {
      this.language = lang as 'EN' | 'DE';
    });
  }


  /**
  * Opens the project detail box for the specified project index.
  * 
  * @param {number} index - The index of the project to open.
  */
  openProjectBox(index: number): void {
    this.currentProjectIndex = index;
    document.body.classList.add('no-scroll');
  }
  

  /**
  * Closes the currently open project detail box.
  */
  closeProjectBox(): void {
    this.currentProjectIndex = null;
    document.body.classList.remove('no-scroll');
  }
  

  /**
  * Checks if the given skill is the last in the list of skills.
  * 
  * @param {string} skill - The skill to check.
  * @param {string[]} skills - The list of skills.
  * @returns {boolean} True if the skill is the last in the list, otherwise false.
  */
  isLastSkill(skill: string, skills: string[]): boolean {
    return skills.indexOf(skill) === skills.length - 1;
  }


  /**
  * Retrieves the translated text for the current language.
  * 
  * @param {{ EN: string; DE: string }} text - The text object containing translations.
  * @returns {string} The translated text for the current language.
  */
  getTranslatedText(text: { EN: string; DE: string }): string {
    return text[this.language];
  }
}