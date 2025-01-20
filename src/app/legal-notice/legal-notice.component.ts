import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  template: '',
  styleUrls: ['./legal-notice.component.scss'],
})


export class LegalNoticeComponent implements OnInit {

  /**
  * Creates an instance of LegalNoticeComponent.
  * 
  * @param {LanguageService} languageService - Service to manage the application's language state.
  */
  constructor(private languageService: LanguageService) {}


  /**
  * Lifecycle hook that initializes the component and subscribes to language changes.
  */
  ngOnInit() {
    this.loadHtmlBasedOnLanguage();
    this.languageService.language$.subscribe(() => {
      this.loadHtmlBasedOnLanguage();
    });
  }


  /**
  * Loads the appropriate HTML content for the legal notice based on the current language.
  * Fetches the HTML file corresponding to the current language and inserts it into the component's DOM.
  * 
  * @private
  */
  private loadHtmlBasedOnLanguage(): void {
    const lang = this.languageService.getLanguage();
    const htmlFilePath = `./legal-notice.component.${lang.toLowerCase()}.html`;

    fetch(htmlFilePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load ${htmlFilePath}`);
        }
        return response.text();
      })
      .then((html) => {
        const container = document.querySelector('app-legal-notice');
        if (container) {
          container.innerHTML = html;
        }
      })
      .catch((error) => {
        console.error('Error loading legal notice HTML:', error);
      });
  }
}

