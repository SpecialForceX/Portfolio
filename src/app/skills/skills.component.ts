import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { InfoBoxComponent } from '../shared/components/info-box/info-box.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [InfoBoxComponent, CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent {
  currentLanguage: string = 'EN';
  content: any;


  /**
  * Content for the skills section in multiple languages.
  * @type {Object}
  */
  skillsContent: any = {
    EN: {
      firstTitle: 'Technologies',
      title: 'Skill Set',
      content:
        'My journey has involved working on diverse projects, employing a range of frontend technologies and concepts.',
      subContentTitle1: `You need `,
      subContentTitle2: `another skill?`,
      subContentText: 'Feel free to contact me. I look forward to expanding on my previous knowledge.',
      buttonText: "Let's Talk",
      skills: [
        { logo: '/assets/img/skills/html_logo.png', name: 'HTML' },
        { logo: '/assets/img/skills/css_logo.png', name: 'CSS' },
        { logo: '/assets/img/skills/javascript_logo.png', name: 'JavaScript' },
        { logo: '/assets/img/skills/materialDesign_logo.png', name: 'Material Design' },
        { logo: '/assets/img/skills/typescript_logo.png', name: 'TypeScript' },
        { logo: '/assets/img/skills/angular_logo.png', name: 'Angular' },
        { logo: '/assets/img/skills/firebase_logo.png', name: 'Firebase' },
        { logo: '/assets/img/skills/git_logo.png', name: 'GIT' },
        { logo: '/assets/img/skills/api_logo.png', name: 'Rest-Api' },
        { logo: '/assets/img/skills/scrum_logo.png', name: 'Scrum' },
        { logo: '/assets/img/skills/mindset_logo.png', name: 'Growth mindset' },
      ],
    },
    DE: {
      firstTitle: 'Technologien',
      title: 'Fähigkeiten',
      content:
        'Meine Reise umfasste die Arbeit an vielfältigen Projekten mit verschiedenen Frontend-Technologien und Konzepten.',
      subContentTitle1: `Sie brauchen `,
      subContentTitle2: `eine andere Fähigkeit?`,
      subContentText: 'Kontaktieren Sie mich gerne. Ich freue mich darauf, mein Wissen zu erweitern.',
      buttonText: 'Sprechen wir darüber',
      skills: [
        { logo: '/assets/img/skills/html_logo.png', name: 'HTML' },
        { logo: '/assets/img/skills/css_logo.png', name: 'CSS' },
        { logo: '/assets/img/skills/javascript_logo.png', name: 'JavaScript' },
        { logo: '/assets/img/skills/materialDesign_logo.png', name: 'Material Design' },
        { logo: '/assets/img/skills/typescript_logo.png', name: 'TypeScript' },
        { logo: '/assets/img/skills/angular_logo.png', name: 'Angular' },
        { logo: '/assets/img/skills/firebase_logo.png', name: 'Firebase' },
        { logo: '/assets/img/skills/git_logo.png', name: 'GIT' },
        { logo: '/assets/img/skills/api_logo.png', name: 'Rest-Api' },
        { logo: '/assets/img/skills/scrum_logo.png', name: 'Scrum' },
        { logo: '/assets/img/skills/mindset_logo.png', name: 'Growth mindset' },
      ],
    },
  };


  /**
  * Initializes the SkillsComponent and subscribes to language changes.
  * 
  * @param {LanguageService} languageService - Service to manage the application's language state.
  */
  constructor(private languageService: LanguageService) {
    this.content = this.skillsContent[this.currentLanguage];
    this.languageService.language$.subscribe((lang) => {
      this.currentLanguage = lang;
      this.content = this.skillsContent[lang];
    });
  }
}