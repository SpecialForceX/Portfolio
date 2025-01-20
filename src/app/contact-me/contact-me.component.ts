import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../services/language.service';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})

export class ContactMeComponent {
  consentChecked = false;
  submissionSuccess = false;
  contactData = {
    name: '',
    email: '',
    message: '',
    checkbox: '',
  };

  /**
  * Multilingual content for the form and success messages.
  * Supports English (EN) and German (DE).
  */
  content: any = {
    EN: {
      successMessage: 'Thank you! Your message has been sent successfully.',
      firstTitle: 'Contact me',
      secondTitle: "Let's work together",
      thirdTitle: 'Got a problem to solve?',
      text1: `Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.
             Need a Frontend developer? `,
      text2: `Let’s talk!`,
      nameLabel: "What's your name?",
      emailLabel: "What's your email?",
      messageLabel: 'How can I help you?',
      consentLabelText: "I've read the",
      consentLinkText: 'privacy policy',
      consentLabelTextAfter: 'and agree to the processing of my data as outlined.',
      namePlaceholder: 'Your name goes here',
      nameError: 'Oops! it seems your name is missing',
      emailPlaceholder: 'youremail@email.com',
      emailError: 'Hoppla! your email is required',
      messagePlaceholder: 'Hello Patrick, I am interested in...',
      messageError: 'What do you need to develop?',
      consentError: 'Please accept the privacy policy.',
      buttonText: 'Say Hello ;)',
    },
    DE: {
      successMessage: 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.',
      firstTitle: 'Kontaktieren Sie mich',
      secondTitle: 'Lassen Sie uns gemeinsam arbeiten',
      thirdTitle: 'Haben Sie ein Problem zu lösen?',
      text1: `Kontaktiere mich über dieses Formular. Ich freue mich darauf, von dir zu hören, deine Ideen kennenzulernen und Dir mit meiner Arbeit zu helfen. Du brauchst einen Frontend-Entwickler? `,
      text2: `Lass uns reden!`,
      nameLabel: 'Wie ist Ihr Name?',
      emailLabel: 'Wie lautet Ihre E-Mail-Adresse?',
      messageLabel: 'Wie kann ich Ihnen helfen?',
      consentLabelText: 'Ich habe die',
      consentLinkText: 'Datenschutzerklärung',
      consentLabelTextAfter: 'gelesen und stimme der Verarbeitung meiner Daten zu.',
      namePlaceholder: 'Ihr Name kommt hierhin',
      nameError: 'Oops! Ihr Name fehlt scheinbar',
      emailPlaceholder: 'ihremail@email.com',
      emailError: 'Hoppla! Ihre E-Mail-Adresse wird benötigt',
      messagePlaceholder: 'Hallo Patrick, ich interessiere mich für...',
      messageError: 'Was möchten Sie entwickeln?',
      consentError: 'Bitte akzeptieren Sie die Datenschutzerklärung.',
      buttonText: 'Sag Hallo ;)',
    },
  };


  firstTitle: string = '';
  secondTitle: string = '';
  thirdTitle: string = '';
  text1: string = '';
  text2: string = '';
  placeholders: any = {};
  legalNoticeLink: string = '/legal-notice-en';
  mailTest = false;

  /**
  * Constructor that initializes the component and sets the default language.
  * @param http - Service for making HTTP requests.
  * @param languageService - Service for managing the application's language state.
  */
  constructor(private http: HttpClient, private languageService: LanguageService) {
    this.setLanguage('EN');
    this.languageService.language$.subscribe((lang) => {
      this.setLanguage(lang);
    });
  }
  /**
  * Sets the language of the form and updates the displayed content.
  * @param lang - The language code ('EN' or 'DE').
  */
  private setLanguage(lang: 'EN' | 'DE'): void {
    const languageContent = this.content[lang];
    this.firstTitle = languageContent.firstTitle;
    this.secondTitle = languageContent.secondTitle;
    this.thirdTitle = languageContent.thirdTitle;
    this.text1 = languageContent.text1;
    this.text2 = languageContent.text2;
    this.placeholders = languageContent;
    this.legalNoticeLink = lang === 'EN' ? '/legal-notice-en' : '/legal-notice-de';
  }

  /** Configuration for the HTTP POST request to submit form data. */
  post = {
    endPoint: 'https://patrickbatke.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
  * Handles form submission, validates input, sends data to the server,
  * and displays a success message on successful submission.
  * @param ngForm - The Angular form object.
  */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.submissionSuccess = true;
            ngForm.resetForm();
            setTimeout(() => {
              this.submissionSuccess = false;
            }, 5000);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.submissionSuccess = true;
      ngForm.resetForm();
      setTimeout(() => {
        this.submissionSuccess = false;
      }, 5000);
    }
  }
}