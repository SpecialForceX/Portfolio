import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { HeroMainContentComponent } from "./hero-main-content/hero-main-content.component";
import { HeroFooterInfoComponent } from "./hero-footer-info/hero-footer-info.component";
import { HeroSideStripeComponent } from "./hero-side-stripe/hero-side-stripe.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, HeroMainContentComponent, HeroFooterInfoComponent, HeroSideStripeComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent {
}
