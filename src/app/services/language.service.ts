import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LanguageService {

  /**
  * BehaviorSubject to hold the current language state.
  * @type {BehaviorSubject<'EN' | 'DE'>}
  * @private
  */
  private currentLanguage = new BehaviorSubject<'EN' | 'DE'>('EN');


  /**
  * Observable for subscribing to language changes.
  * @type {Observable<'EN' | 'DE'>}
  */
  language$ = this.currentLanguage.asObservable();


  /**
  * Retrieves the current language.
  * 
  * @returns {'EN' | 'DE'} The current language.
  */
  getLanguage(): 'EN' | 'DE' {
    return this.currentLanguage.value;
  }


  /**
  * Toggles the language between 'EN' and 'DE'.
  */
  toggleLanguage(): void {
    const newLanguage = this.currentLanguage.value === 'EN' ? 'DE' : 'EN';
    this.setLanguage(newLanguage);
  }


  /**
  * Sets the language to a specified value.
  * 
  * @param {'EN' | 'DE'} language - The language to set.
  */
  setLanguage(language: 'EN' | 'DE'): void {
    this.currentLanguage.next(language);
  }
}


