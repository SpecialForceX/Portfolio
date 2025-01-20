import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFooterInfoComponent } from './hero-footer-info.component';

describe('HeroFooterInfoComponent', () => {
  let component: HeroFooterInfoComponent;
  let fixture: ComponentFixture<HeroFooterInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroFooterInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroFooterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
