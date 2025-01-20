import { Component } from '@angular/core';
import { InfoBoxComponent } from "../shared/components/info-box/info-box.component";
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [InfoBoxComponent, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})

export class AboutMeComponent {
  currentLanguage: 'EN' | 'DE' = 'EN';


  /**
  * The multilingual content object containing text and bullet points
  * for English (EN) and German (DE).
  */
  content: any = {
    EN: {
      firstTitle: 'Who I Am',
      title: 'About Me',
      content: `Hi, I’m a german speaking Frontend Developer based in Lüneburg. Motivated by the limitless opportunities 
                within IT, I am excited about crafting visually captivating and intuitive websites and applications.`,
      bulletPoints: [
        {
          imgSrc: '/assets/img/about-me/location_logo.png',
          text: 'Flexible in terms of working environments, I can work effectively both on-site in Lüneburg and remotely.',
        },
        {
          imgSrc: '/assets/img/about-me/cognition_logo.png',
          text: 'I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.',
        },
        {
          imgSrc: '/assets/img/about-me/quality_logo.png',
          text: `In my profession, programming isn't just about writing code; it's a creative form of problem-solving. 
                 I take pride in my ability to distill complex technical challenges into simple, user-friendly solutions.`,
        },
      ],
    },
    DE: {
      firstTitle: 'Wer ich bin',
      title: 'Über mich',
      content: `Hallo, ich bin ein deutschsprachiger Frontend-Entwickler mit Sitz in Lüneburg. Motiviert durch die 
                grenzenlosen Möglichkeiten in der IT, bin ich begeistert von der Gestaltung visuell ansprechender 
                und intuitiver Webseiten und Anwendungen.`,
      bulletPoints: [
        {
          imgSrc: '/assets/img/about-me/location_logo.png',
          text: 'Flexibel in Bezug auf Arbeitsumgebungen, arbeite ich sowohl vor Ort in Lüneburg als auch remote effektiv.',
        },
        {
          imgSrc: '/assets/img/about-me/cognition_logo.png',
          text: 'Ich bin aufgeschlossen und immer auf der Suche nach persönlichen Herausforderungen, um mein Wissen und meine Fähigkeiten stetig zu verbessern.',
        },
        {
          imgSrc: '/assets/img/about-me/quality_logo.png',
          text: `In meinem Beruf geht es beim Programmieren nicht nur um das Schreiben von Code; es ist eine kreative Form der Problemlösung. 
                 Ich bin stolz auf meine Fähigkeit, komplexe technische Herausforderungen in einfache, benutzerfreundliche Lösungen zu verwandeln.`,
        },
      ],
    }
  };


  firstTitle: string = this.content.EN.firstTitle;
  title: string = this.content.EN.title;
  textContent: string = this.content.EN.content;
  bulletPoints = this.content.EN.bulletPoints;

  /**
  * Constructs the AboutMeComponent and subscribes to language changes
  * from the LanguageService to dynamically update content.
  * @param languageService - The service responsible for managing the application's language.
  */
  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe((lang) => {
      this.currentLanguage = lang;
      this.firstTitle = this.content[lang].firstTitle;
      this.title = this.content[lang].title;
      this.textContent = this.content[lang].content;
      this.bulletPoints = this.content[lang].bulletPoints;
    });
  }
}