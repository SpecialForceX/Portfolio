import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero-main-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-main-content.component.html',
  styleUrls: ['./hero-main-content.component.scss']
})

export class HeroMainContentComponent {
  currentLanguage: 'EN' | 'DE' = 'EN';


  /**
  * Text content for the hero section, organized by language.
  * @type {Object.<string, { title: string; name: string; work: string; contact: string }>}
  */
  texts: { [key: string]: { title: string; name: string; work: string; contact: string } } = {
    EN: {
      title: 'Frontend Developer',
      name: 'Patrick Batke',
      work: 'Check my work',
      contact: 'Contact me'
    },
    DE: {
      title: 'Frontend-Entwickler',
      name: 'Patrick Batke',
      work: 'Meine Arbeit',
      contact: 'Kontakt'
    }
  };


  /**
  * Initializes the HeroMainContentComponent and subscribes to language changes.
  * 
  * @param {LanguageService} languageService - Service to manage the application's language state.
  */
  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe((lang) => {
      this.currentLanguage = lang;
    });
  }
}