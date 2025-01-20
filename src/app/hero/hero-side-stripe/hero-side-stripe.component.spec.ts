import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSideStripeComponent } from './hero-side-stripe.component';

describe('HeroSideStripeComponent', () => {
  let component: HeroSideStripeComponent;
  let fixture: ComponentFixture<HeroSideStripeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSideStripeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroSideStripeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
