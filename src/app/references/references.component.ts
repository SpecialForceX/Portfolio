import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBoxComponent } from '../shared/components/info-box/info-box.component';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, InfoBoxComponent],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
})

export class ReferencesComponent {
  currentIndex: number;
  currentLanguage: string = 'EN';


  /**
  * Content of the references in multiple languages.
  * @type {Object}
  */
  referencesContent = {
    EN: [
      {
        content: `Patrick's creativity and precision in frontend development always bring our projects to life.`,
        author: 'A. Meier - Frontend Developer',
      },
      {
        content: 'Patrick’s attention to detail and collaborative nature make him an outstanding team player.',
        author: 'M. Becker - Frontend Developer',
      },
      {
        content: 'Patrick excels at creating intuitive and visually stunning user interfaces.',
        author: 'L. Schulz - Frontend Developer',
      },
    ],
    DE: [
      {
        content: 'Patricks Kreativität und Präzision im Frontend-Development bringen unsere Projekte immer zum Leben.',
        author: 'A. Meier - Frontend-Entwickler',
      },
      {
        content: 'Patricks Liebe zum Detail und seine kooperative Art machen ihn zu einem herausragenden Teamplayer.',
        author: 'M. Becker - Frontend-Entwickler',
      },
      {
        content: 'Patrick glänzt darin, intuitive und visuell beeindruckende Benutzeroberflächen zu gestalten.',
        author: 'L. Schulz - Frontend-Entwickler',
      },
    ],
  };


  /**
  * Array of references for the currently selected language.
  * @type {Array}
  */
  references = this.referencesContent.EN;


  /**
  * Initializes the ReferencesComponent and subscribes to language changes.
  * 
  * @param {LanguageService} languageService - Service to manage the application's language state.
  */
  constructor(private languageService: LanguageService) {
    this.currentIndex = Math.floor(this.references.length / 2);
    this.languageService.language$.subscribe((lang) => {
      this.currentLanguage = lang;
      this.references = this.referencesContent[lang];
      this.currentIndex = Math.floor(this.references.length / 2);
    });
  }


  /**
  * Navigates the carousel to the left or right.
  * 
  * @param {'left' | 'right'} direction - The direction to navigate.
  */
  navigate(direction: 'left' | 'right'): void {
    if (direction === 'left') {
      this.currentIndex = (this.currentIndex - 1 + this.references.length) % this.references.length;
    } else {
      this.currentIndex = (this.currentIndex + 1) % this.references.length;
    }
  }


  /**
  * Calculates the transform CSS property for an item based on its index relative to the current index.
  * 
  * @param {number} index - The index of the reference item.
  * @returns {string} The transform property value.
  */
  getItemTransform(index: number): string {
    const baseOffset = -280;
    const relativeOffset = (index - this.currentIndex) * 700;
    return `translateX(${baseOffset + relativeOffset}px) translateY(-50%) scale(${
      index === this.currentIndex ? 1.1 : 0.8
    })`;
  }
}