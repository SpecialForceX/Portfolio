import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero-footer-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-footer-info.component.html',
  styleUrls: ['./hero-footer-info.component.scss']
})

export class HeroFooterInfoComponent implements OnInit {
  currentLanguage: 'EN' | 'DE' = 'EN';


  /**
  * Texts to display in the footer for each language.
  * @type {Object.<string, string[]>}
  */
  texts: { [key: string]: string[] } = {
    EN: [
      'Available for remote work',
      'Frontend Developer',
      'Based in Lüneburg',
      'Open to work'
    ],
    DE: [
      'Verfügbar für Remote-Arbeit',
      'Frontend-Entwickler',
      'Ansässig in Lüneburg',
      'Offen für neue Herausforderungen'
    ]
  };


  /**
  * Creates an instance of HeroFooterInfoComponent.
  * 
  * @param {LanguageService} languageService - Service to manage the application's language state.
  */
  constructor(private languageService: LanguageService) {}


  /**
  * Lifecycle hook that subscribes to language changes and updates the current language.
  */
  ngOnInit(): void {
    this.languageService.language$.subscribe((lang) => {
      this.currentLanguage = lang;
    });
  }
}





