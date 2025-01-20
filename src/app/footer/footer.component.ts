import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { RouterModule } from '@angular/router'; // RouterLink Unterstützung

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})

export class FooterComponent {
  /**
  * Object containing footer content for different languages.
  * @type {Object}
  */
  content: any = {
    EN: {
      location: 'Lüneburg, Germany',
      role: 'Web Developer',
      copyright: '© Patrick Batke 2025',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
      legalNotice: 'Imprint',
    },
    DE: {
      location: 'Lüneburg, Deutschland',
      role: 'Webentwickler',
      copyright: '© Patrick Batke 2025',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'E-Mail',
      legalNotice: 'Impressum',
    },
  };


  footerContent = this.content.EN;
  imprintLink: string = '/imprint-en';

  /**
  * Creates an instance of FooterComponent and initializes the content based on the selected language.
  * Subscribes to language changes to dynamically update the footer content.
  * 
  * @param {LanguageService} languageService - Service to handle language selection.
  */
  constructor(private languageService: LanguageService) {
    this.updateContent(this.languageService.getLanguage());
    this.languageService.language$.subscribe((lang) => {
      this.updateContent(lang);
    });
  }


  /**
  * Updates the footer content and imprint link based on the provided language.
  * 
  * @private
  * @param {'EN' | 'DE'} lang - The language code ('EN' for English, 'DE' for German).
  */
  private updateContent(lang: 'EN' | 'DE'): void {
    this.footerContent = this.content[lang];
    this.imprintLink = lang === 'EN' ? '/imprint-en' : '/imprint-de';
  }
}