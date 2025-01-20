import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMainContentComponent } from './hero-main-content.component';

describe('HeroMainContentComponent', () => {
  let component: HeroMainContentComponent;
  let fixture: ComponentFixture<HeroMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroMainContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
