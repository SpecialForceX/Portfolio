import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  currentLanguage: 'EN' | 'DE' = 'EN';
  hoveredLangIcon: string;
  isMobileMenuOpen: boolean = false;


  /**
  * Initializes the HeaderComponent with default values.
  * 
  * @param {LanguageService} languageService - Service to handle language operations.
  */
  constructor(private languageService: LanguageService) {
    this.hoveredLangIcon = '/assets/img/hero/lang_EN.png';
  }


  /**
  * Lifecycle hook that subscribes to language changes and updates the language icon accordingly.
  */
  ngOnInit(): void {
    this.languageService.language$.subscribe((lang) => {
      this.currentLanguage = lang;
      this.updateLangIcon(false);
    });
  }


  /**
  * Toggles the application language between 'EN' and 'DE'.
  */
  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }


  /**
  * Updates the language icon based on hover state.
  * 
  * @param {boolean} isHover - Whether the icon is being hovered.
  */
  onLangHover(isHover: boolean): void {
    this.updateLangIcon(isHover);
  }


  /**
  * Updates the language icon based on the current language and hover state.
  * 
  * @private
  * @param {boolean} isHover - Whether the icon is being hovered.
  */
  private updateLangIcon(isHover: boolean): void {
    if (this.currentLanguage === 'EN') {
      this.hoveredLangIcon = isHover
        ? '/assets/img/hero/lang_EN_hover.png'
        : '/assets/img/hero/lang_EN.png';
    } else {
      this.hoveredLangIcon = isHover
        ? '/assets/img/hero/lang_DE_hover.png'
        : '/assets/img/hero/lang_DE.png';
    }
  }


  /**
  * Toggles the mobile menu state and adds/removes the 'no-scroll' class on the document body.
  */
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  
  /**
  * Closes the mobile menu and removes the 'no-scroll' class from the document body.
  */
  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.classList.remove('no-scroll');
  }
}